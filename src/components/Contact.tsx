/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, FormEvent } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  User,
  Sparkles,
  Loader2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import { motion } from "motion/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm Essessvi's AI assistant. Ask me anything about his AI projects or automation work!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          context: PERSONAL_INFO.bio,
          role: PERSONAL_INFO.role,
        }),
      });
      
      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      const botResponse = data.text || "I'm sorry, I couldn't generate a response.";
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botResponse },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble responding right now. Please use the direct email or LinkedIn links on the left!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const trustBadges = [
    { icon: ShieldCheck, label: "Availability", value: "Full-Time / Intern" },
    { icon: Zap, label: "Focus", value: "AI Automation & No-Code" },
  ];

  return (
    <section
      id="contact"
      className="bg-bg py-32 border-t border-text-main/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          <div className="w-full lg:w-[45%]">
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-light">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-gradient leading-[0.9] mb-12">
              LET'S <br />
              <span className="text-brand">CONNECT.</span>
            </h2>

            <p className="text-text-main/60 text-sm md:text-base mb-16 max-w-md  leading-relaxed tracking-wider font-normal">
              Have a project in mind or looking for an AI automation engineer?
              Reach out through any channel.
            </p>

            <div className="space-y-8 mb-20">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-text-main/40 font-light uppercase tracking-[0.3em] mb-1 font-normal">
                    Email
                  </p>
                  <p className="text-text-main font-display font-medium text-xl uppercase tracking-tight">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-text-main/40 font-light uppercase tracking-[0.3em] mb-1 font-normal">
                    Phone
                  </p>
                  <p className="text-text-main font-display font-medium text-xl uppercase tracking-tight">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-text-main/40 font-light uppercase tracking-[0.3em] mb-1 font-normal">
                    LinkedIn
                  </p>
                  <p className="text-text-main font-display font-medium text-xl uppercase tracking-tight">
                    V.ESSESSVI
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8 group"
              >
                <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500">
                  <Github size={24} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-text-main/40 font-light uppercase tracking-[0.3em] mb-1 font-normal">
                    GitHub
                  </p>
                  <p className="text-text-main font-display font-medium text-xl uppercase tracking-tight">
                    V-ESSESSVI
                  </p>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-text-main/10">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="space-y-2">
                  <badge.icon className="w-5 h-5 text-brand opacity-60" />
                  <p className="text-[9px] font-mono font-light text-gray-600 uppercase tracking-widest">
                    {badge.label}
                  </p>
                  <p className="text-xs font-display font-light text-text-main uppercase">
                    {badge.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[55%]">
            <div className="premium-card h-[650px] flex flex-col bg-card overflow-hidden">
              {/* Terminal Header */}
              <div className="p-8 border-b border-text-main/10 flex items-center justify-between bg-text-main/5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-brand/20 flex items-center justify-center">
                      <Sparkles size={20} className="text-brand" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-card rounded-full shadow-lg"></div>
                  </div>
                  <div>
                    <h4 className="text-text-main font-display font-light text-sm uppercase tracking-widest font-normal">
                      AI Concierge
                    </h4>
                    <p className="text-[9px] font-mono text-text-main/40 uppercase tracking-widest font-light font-normal">
                      Always Active
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
              </div>

              {/* Interaction Zone */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar scroll-smooth">
                {messages.map((msg, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx}
                    className={`flex gap-6 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${msg.role === "user" ? "bg-brand shadow-[0_0_20px_rgba(184,115,51,0.4)]" : "bg-text-main/10 border border-text-main/20"}`}
                    >
                      {msg.role === "user" ? (
                        <User size={18} className="text-bg" />
                      ) : (
                        <Sparkles size={18} className="text-brand" />
                      )}
                    </div>
                    <div
                      className={`max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed border transition-all ${
                        msg.role === "user"
                          ? "bg-brand/5 text-text-main border-brand/20 rounded-tr-none"
                          : "bg-text-main/5 text-text-main/60 border-text-main/20 rounded-tl-none font-medium"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-2xl bg-text-main/10 flex items-center justify-center animate-pulse">
                      <Loader2 className="w-5 h-5 text-brand animate-spin" />
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl rounded-tl-none border border-text-main/20 w-24 h-16 flex items-center justify-center gap-1">
                      <span className="w-1.5 h-1.5 bg-brand/40 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-brand/40 rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-brand/40 rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Command Input */}
              <form
                onSubmit={handleSend}
                className="p-8 bg-text-main/5 border-t border-text-main/10 flex gap-4"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-text-main/5 border border-text-main/20 rounded-2xl px-6 py-4 text-sm text-text-main focus:outline-none focus:border-brand/40 transition-all font-mono placeholder:text-gray-600 shadow-inner font-normal"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-8 bg-brand hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed rounded-2xl flex items-center justify-center text-bg font-display font-light text-xs uppercase tracking-widest transition-all shadow-xl"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
