import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

async function startServer() {
  const app = express();
  
  // In development, dev server must run on port 3000 (proxied by Nginx on 8080).
  // In production (Cloud Run), port is passed as environment variable PORT (typically 8080).
  const isProduction = process.env.NODE_ENV === "production";
  const PORT = isProduction ? (Number(process.env.PORT) || 8080) : 3000;

  app.use(express.json());

  // Cloud Run health check endpoints
  app.get("/health", (_req, res) => {
    res.status(200).send("OK");
  });

  app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "healthy" });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, context, role } = req.body;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
          You are V.Essessvi's professional AI assistant. 
          Context: ${context}. 
          Role: ${role}.
          Visitor Message: ${message}
          
          Strict rules for your response:
          1. You must ONLY discuss V.Essessvi's own projects and what they have accomplished or engineered.
          2. Decline politely to answer any questions outside of V.Essessvi's professional portfolio, projects, and work experience.
          3. Keep responses concise, direct, and professional.
        `,
      });
      
      const text = response.text || "I'm sorry, I couldn't generate a response.";
      res.json({ text });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  app.post("/api/tts", async (req, res) => {
    try {
      const { text } = req.body;
      const audioResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Kore" },
            },
          },
        },
      });
      const audioBase64 = audioResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      res.json({ audio: audioBase64 });
    } catch (error) {
      console.error("TTS error:", error);
      res.status(500).json({ error: "Failed to generate audio" });
    }
  });

  // Serve static assets from public folder
  app.use(express.static(path.join(process.cwd(), "public")));

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running in ${isProduction ? "production" : "development"} on port ${PORT}`);
  });
}

startServer();
