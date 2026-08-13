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
    { icon: ShieldCheck, label: "Availability", value: "Full-Time" },
    { icon: Zap, label: "Focus", value: "AI Automation & No-Code" },
  ];

  return (
    <section
      id="contact"
      className="bg-bg py-32 border-t border-text-main/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start justify-between">
          <div className="w-full lg:w-[45%]">
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-light">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-gradient leading-[0.9] mb-12">
              LET'S <br />
              <span className="text-brand">CONNECT.</span>
            </h2>

            <p className="text-text-main/60 text-sm md:text-base mb-16 max-w-md leading-relaxed tracking-wider font-normal">
              Have a project in mind or looking for an AI automation engineer?
              Reach out through any channel.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-12 border-t border-text-main/10">
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

          <div className="w-full lg:w-[50%] space-y-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-8 group p-6 rounded-[2.5rem] bg-card/40 border border-[#D9C7B2]/20 hover:border-brand/40 hover:bg-card/80 transition-all duration-500 shadow-sm"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] text-text-main/40 font-light uppercase tracking-[0.3em] mb-1 font-normal">
                  Email
                </p>
                <p className="text-text-main font-display font-medium text-xl uppercase tracking-tight break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-8 group p-6 rounded-[2.5rem] bg-card/40 border border-[#D9C7B2]/20 hover:border-brand/40 hover:bg-card/80 transition-all duration-500 shadow-sm"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500 flex-shrink-0">
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
              className="flex items-center gap-8 group p-6 rounded-[2.5rem] bg-card/40 border border-[#D9C7B2]/20 hover:border-brand/40 hover:bg-card/80 transition-all duration-500 shadow-sm"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500 flex-shrink-0">
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
              className="flex items-center gap-8 group p-6 rounded-[2.5rem] bg-card/40 border border-[#D9C7B2]/20 hover:border-brand/40 hover:bg-card/80 transition-all duration-500 shadow-sm"
            >
              <div className="w-16 h-16 rounded-[2rem] bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-all duration-500 flex-shrink-0">
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
        </div>
      </div>
    </section>
  );
}
