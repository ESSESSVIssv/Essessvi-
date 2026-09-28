/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowDown, 
  Mail, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Compass, 
  Sparkles, 
  Layers, 
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import profilePic from '../assets/profile.png';

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAF9F6] text-neutral-900 selection:bg-[#B87333] selection:text-white">
      
      {/* HERO / ABOUT SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-neutral-200/80">
        
        {/* Subtle warm ambient glow */}
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#B87333]/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200/80">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans tracking-widest uppercase font-bold text-[#B87333]">
              <span className="font-extrabold">{PERSONAL_INFO.name.toUpperCase()}</span>
              <span className="text-neutral-300" aria-hidden="true">•</span>
              <span className="text-neutral-600 font-semibold tracking-normal normal-case sm:uppercase">
                Product Manager | AI Product & Automation
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 shadow-2xs text-[11px] font-sans font-semibold text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to APM · Junior PM · PM Internships</span>
            </div>
          </div>

          {/* Main 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-[#B87333]"></span>
                <span 
                  className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black"
                  style={{ color: '#B87333', fontWeight: 900 }}
                >
                  ABOUT ME
                </span>
              </div>

              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] leading-[1.12] mb-6 uppercase"
                style={{ color: '#B87333', fontWeight: 900 }}
              >
                <strong>WHO I AM & HOW I BUILD</strong>
              </h1>

              {/* Exact Authentic Copy */}
              <div className="space-y-4 text-base md:text-[17px] font-sans text-neutral-800 leading-relaxed">
                <p>
                  I am a product-focused Computer Science and Engineering graduate from <strong className="font-bold text-neutral-950">The Apollo University</strong> (2022–2026). My passion lies in understanding where everyday users experience friction and translating those real-world pain points into intuitive, high-utility product experiences.
                </p>
                <p>
                  Rather than starting with lines of code or complex feature lists, I ground my work in <strong className="font-bold text-neutral-950">field-based user observations</strong>, <strong className="font-bold text-neutral-950">direct interviews</strong>, and <strong className="font-bold text-neutral-950">workflow mapping</strong>. Whether conducting in-person research with mango farmers at local markets, building an automobile spare-parts marketplace concept (SpareXChange), or designing AI conversational order flows at AgentRoomAI, I focus on the problem before deciding what gets built.
                </p>
                <p>
                  I combine a strong technical foundation in algorithms and software engineering with product discovery, user empathy, and rapid prototyping. I am currently seeking an <strong className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>Associate Product Manager (APM)</strong> role, <strong className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>Junior Product Manager</strong> position, or <strong className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>Product Management Internship</strong>.
                </p>
              </div>

              {/* Core Disciplines - Clean Zero-Pill Text */}
              <div className="mt-8 pt-6 border-t border-neutral-200/80">
                <div className="text-[11px] font-sans uppercase tracking-widest text-[#B87333] font-black mb-2.5">
                  Core Product Capabilities
                </div>
                <div className="text-xs md:text-sm font-sans font-semibold text-neutral-700 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  <span>Product Thinking</span>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span>User Research</span>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span>Product Discovery</span>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span>User Journey Mapping</span>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span>AI Workflows</span>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span>Rapid Prototyping</span>
                </div>
              </div>

              {/* Primary Actions */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/work"
                  className="w-full sm:w-auto text-center justify-center px-6 py-3.5 bg-[#B87333] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/resume"
                  className="w-full sm:w-auto text-center justify-center px-6 py-3.5 bg-white border border-neutral-300 text-neutral-900 font-sans font-bold text-xs uppercase tracking-wider hover:border-[#B87333] hover:text-[#B87333] transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <FileText className="w-4 h-4" /> View Resume
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center justify-center px-5 py-3.5 bg-white sm:bg-transparent border border-neutral-200 sm:border-transparent text-neutral-700 hover:text-[#B87333] font-sans font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Contact Me
                </Link>
              </div>

            </div>

            {/* Right Column: "This Pic" (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm sm:max-w-md bg-white border border-neutral-200/90 p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] relative group">
                
                {/* Photo Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img 
                    src={profilePic} 
                    alt="V. Essessvi - Product Manager" 
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.01] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Subtle corner badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-neutral-200/80 shadow-2xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-neutral-800">
                      V. Essessvi
                    </span>
                  </div>
                </div>

                {/* Identity & Verification Card Footer */}
                <div className="pt-4 pb-1 px-1">
                  
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h2 
                      className="font-display font-black text-xl text-[#B87333] tracking-tight uppercase"
                      style={{ color: '#B87333', fontWeight: 900 }}
                    >
                      <strong>V. ESSESSVI</strong>
                    </h2>
                    <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase">
                      B.Tech CSE '26
                    </span>
                  </div>

                  <div className="text-xs font-sans font-semibold text-neutral-700 mb-3">
                    Product Manager | AI Product & Automation
                  </div>

                  <div className="pt-3 border-t border-neutral-100 space-y-1.5 text-xs font-sans text-neutral-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                      <span>The Apollo University (2022–2026)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                      <span>Chittoor, Andhra Pradesh, India</span>
                    </div>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-sans">
                    <a 
                      href="mailto:vessessvi12005@gmail.com"
                      className="font-bold text-[#B87333] hover:text-neutral-900 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>vessessvi12005@gmail.com</span>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/essessvi-vadlamudi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#B87333] hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THREE SIMPLE PRODUCT PILLARS (Clean, Elegant, Recruiter-Focused) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="mb-10">
            <span className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black block mb-1">
              HOW I APPROACH PRODUCTS
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-[#B87333] tracking-tight uppercase">
              <strong>THREE CORE PRINCIPLES</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Principle 1 */}
            <div className="p-7 bg-[#FAF9F6] border border-neutral-200/80 hover:border-[#B87333]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#B87333] block mb-3">01</span>
              <h3 className="text-lg font-display font-black text-[#B87333] mb-2 uppercase">
                <strong>Ground Work in User Reality</strong>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed">
                Step outside the screen. Conduct direct contextual interviews and on-ground observations to map real workflows before defining product requirements.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-7 bg-[#FAF9F6] border border-neutral-200/80 hover:border-[#B87333]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#B87333] block mb-3">02</span>
              <h3 className="text-lg font-display font-black text-[#B87333] mb-2 uppercase">
                <strong>Solve Before Automating</strong>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed">
                Use AI and workflow automation to resolve genuine conversational friction, incomplete requests, and repetitive operator bottlenecks.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-7 bg-[#FAF9F6] border border-neutral-200/80 hover:border-[#B87333]/50 transition-colors">
              <span className="text-xs font-mono font-bold text-[#B87333] block mb-3">03</span>
              <h3 className="text-lg font-display font-black text-[#B87333] mb-2 uppercase">
                <strong>Ship Simple, Trustworthy MVPs</strong>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed">
                Prioritize the core trust deficit first. Build concise, verified transaction journeys (like OTP handoffs) that validate value without bloat.
              </p>
            </div>

          </div>

          {/* Quick Portfolio Routing Footer */}
          <div className="mt-12 pt-8 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans text-neutral-600 font-medium">
              Explore detailed case studies across AI workflows, marketplaces, and field inquiries:
            </span>
            <Link
              to="/work"
              className="text-xs font-sans font-bold uppercase tracking-wider text-[#B87333] hover:text-neutral-900 transition-colors inline-flex items-center gap-1.5"
            >
              Explore All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
