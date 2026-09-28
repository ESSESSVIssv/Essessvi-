/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Phone,
  FileText,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import { Link } from "react-router-dom";

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="w-full bg-[#FAF9F6] py-12 sm:py-16 md:py-24 min-h-screen text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-neutral-200">
          <div className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black mb-2">
            GET IN TOUCH
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-3 uppercase leading-tight">
            <strong>Let's talk about products.</strong>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-sans text-neutral-700 max-w-2xl leading-relaxed">
            I'm a product-focused CSE graduate actively seeking an <strong className="text-neutral-950 font-bold">Associate Product Manager (APM)</strong> role, <strong className="text-neutral-950 font-bold">Junior PM</strong> position, or <strong className="text-neutral-950 font-bold">Product Management Internship</strong>.
          </p>
        </div>

        {/* Direct Channels */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black">
              DIRECT CHANNELS
            </h2>
            <span className="text-[11px] font-sans text-neutral-500 font-medium hidden sm:inline">
              Fastest response via Email or WhatsApp
            </span>
          </div>

          {/* Cards Stack - Mobile First & Beautiful on All Devices */}
          <div className="space-y-3.5 sm:space-y-4">
            
            {/* 1. EMAIL CARD */}
            <div className="bg-white border border-neutral-200/90 p-4 sm:p-5 shadow-2xs hover:border-[#B87333]/60 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left info */}
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 bg-[#B87333]/10 text-[#B87333] flex items-center justify-center rounded-sm shrink-0 mt-0.5 sm:mt-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
                      Email
                    </span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base sm:text-lg font-sans font-bold text-neutral-900 hover:text-[#B87333] transition-colors block break-all sm:break-normal"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 shrink-0">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-[#B87333] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors rounded-xs shadow-2xs inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Send Email</span>
                  </a>
                  
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="px-3.5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-sans font-semibold transition-colors rounded-xs inline-flex items-center gap-1.5 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedKey === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-600" />
                        <span className="hidden xs:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* 2. PHONE / WHATSAPP CARD */}
            <div className="bg-white border border-neutral-200/90 p-4 sm:p-5 shadow-2xs hover:border-[#B87333]/60 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left info */}
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 bg-[#B87333]/10 text-[#B87333] flex items-center justify-center rounded-sm shrink-0 mt-0.5 sm:mt-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
                      Phone / Mobile
                    </span>
                    <a 
                      href="tel:+919392964456"
                      className="text-base sm:text-lg font-sans font-bold text-neutral-900 hover:text-[#B87333] transition-colors block"
                    >
                      +91 9392964456
                    </a>
                  </div>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 shrink-0">
                  <a
                    href="tel:+919392964456"
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-neutral-900 text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#B87333] transition-colors rounded-xs shadow-2xs inline-flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919392964456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-[#25D366] text-white font-sans font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xs shadow-2xs inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => handleCopy('9392964456', 'phone')}
                    className="px-3 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-sans font-semibold transition-colors rounded-xs inline-flex items-center gap-1 cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone"
                  >
                    {copiedKey === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-600" />
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* 3. LINKEDIN CARD */}
            <div className="bg-white border border-neutral-200/90 p-4 sm:p-5 shadow-2xs hover:border-[#B87333]/60 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left info */}
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center rounded-sm shrink-0 mt-0.5 sm:mt-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
                      LinkedIn Profile
                    </span>
                    <a 
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-sans font-bold text-neutral-900 hover:text-[#0A66C2] transition-colors block truncate"
                    >
                      linkedin.com/in/essessvi-vadlamudi
                    </a>
                  </div>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 shrink-0">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-4 py-2.5 bg-[#0A66C2] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors rounded-xs shadow-2xs inline-flex items-center justify-center gap-1.5"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* 4. LOCATION & TIMEZONE CARD */}
            <div className="bg-white/80 border border-neutral-200/70 p-4 sm:p-5 shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 bg-neutral-100 text-neutral-600 flex items-center justify-center rounded-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10.5px] font-sans font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
                    Location & Availability
                  </span>
                  <div className="text-sm sm:text-base font-sans font-semibold text-neutral-800">
                    Chittoor, Andhra Pradesh, India · IST (UTC+5:30)
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">
                    Open to remote opportunities and on-site relocation.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* LOOKING FOR MY RESUME? - Beautiful Mobile-Friendly Callout */}
        <div className="p-5 sm:p-7 bg-white border-2 border-[#B87333]/30 shadow-xs relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-[#B87333]/10 text-[#B87333] flex items-center justify-center rounded-xs shrink-0 mt-0.5 sm:mt-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg sm:text-xl text-[#B87333] uppercase tracking-tight">
                  <strong>Looking for my resume?</strong>
                </h3>
                <p className="text-xs sm:text-sm font-sans text-neutral-600 mt-0.5">
                  Review my official single-page resume or save directly as a vector PDF.
                </p>
              </div>
            </div>

            <Link
              to="/resume"
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-[#B87333] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors inline-flex items-center justify-center gap-2 shadow-xs shrink-0 cursor-pointer"
            >
              <span>View Resume</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
