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
  Briefcase,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import profilePic from '../assets/profile.png';

export default function HomePage() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-bg flex items-center py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        {/* Top Eyebrow & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border/80">
          <div className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#B87333] font-black flex items-center gap-2" style={{ color: '#B87333' }}>
            <span className="font-extrabold">{PERSONAL_INFO.name.toUpperCase()}</span>
            <span className="text-text-main/30">•</span>
            <span className="text-text-main/80 font-bold">{PERSONAL_INFO.role}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 border border-brand/20 text-[#B87333] text-xs font-sans font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span>Open to APM · Junior PM · PM Internships</span>
          </div>
        </div>

        {/* Main Content: About Me + This Pic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: About Me Text (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-3">
              <span 
                className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black block" 
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

            {/* Exact Narrative Body */}
            <div className="space-y-4 text-base md:text-[17px] font-sans text-text-main/85 leading-relaxed">
              <p>
                I am a product-focused Computer Science and Engineering graduate from <strong className="font-bold text-text-main">The Apollo University</strong> (2022–2026). My passion lies in understanding where everyday users experience friction and translating those real-world pain points into intuitive, high-utility product experiences.
              </p>
              <p>
                Rather than starting with lines of code or complex feature lists, I ground my work in <strong className="font-bold text-text-main">field-based user observations</strong>, <strong className="font-bold text-text-main">direct interviews</strong>, and <strong className="font-bold text-text-main">workflow mapping</strong>. Whether conducting in-person research with mango farmers at local markets, building an automobile spare-parts marketplace concept (SpareXChange), or designing AI conversational order flows at AgentRoomAI, I focus on the problem before deciding what gets built.
              </p>
              <p>
                I combine a strong technical foundation in algorithms and software engineering with product discovery, user empathy, and rapid prototyping. I am currently seeking an <strong className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>Associate Product Manager (APM)</strong> role, <strong className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>Junior Product Manager</strong> position, or <strong className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>Product Management Internship</strong>.
              </p>
            </div>

            {/* Core Capability Line */}
            <div className="mt-6 pt-5 border-t border-border/80">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#B87333] font-black block mb-2" style={{ color: '#B87333' }}>
                Core Product Focus
              </span>
              <div className="text-xs md:text-sm font-sans font-bold text-text-main/80 flex flex-wrap gap-x-3 gap-y-1">
                <span>Field Research</span>
                <span className="text-text-main/30">•</span>
                <span>Product Discovery</span>
                <span className="text-text-main/30">•</span>
                <span>User Journey Mapping</span>
                <span className="text-text-main/30">•</span>
                <span>AI Workflow Design</span>
                <span className="text-text-main/30">•</span>
                <span>Rapid Prototyping</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/work"
                className="px-6 py-3.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/resume"
                className="px-6 py-3.5 bg-white border border-border text-text-main font-sans font-bold text-xs uppercase tracking-wider hover:border-brand hover:text-brand transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                Resume <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 bg-white border border-border text-text-main font-sans font-bold text-xs uppercase tracking-wider hover:border-brand hover:text-brand transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                Contact Me
              </Link>
            </div>

          </div>

          {/* Right Column: "This Pic" (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white border border-border p-4 shadow-sm">
              
              {/* Picture Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-bg border border-border/80">
                <img 
                  src={profilePic} 
                  alt="V. Essessvi - Product Manager" 
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Photo Caption / Identity Details */}
              <div className="pt-4 pb-2 px-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h2 
                    className="font-display font-black text-xl text-[#B87333] tracking-tight uppercase"
                    style={{ color: '#B87333', fontWeight: 900 }}
                  >
                    <strong>V. ESSESSVI</strong>
                  </h2>
                  <span className="text-[11px] font-mono font-bold text-brand uppercase">
                    B.TECH CSE
                  </span>
                </div>

                <div className="text-xs font-sans font-bold text-text-main/80 mb-3">
                  Product Manager | AI Product & Automation
                </div>

                <div className="pt-3 border-t border-border/80 space-y-2 text-xs font-sans text-text-main/70">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-brand shrink-0" />
                    <span>The Apollo University (2022–2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
                    <span>Chittoor, India</span>
                  </div>
                </div>

                {/* Quick Social / Connect links */}
                <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between">
                  <a 
                    href="mailto:vessessvi12005@gmail.com"
                    className="text-xs font-sans font-bold text-brand hover:text-text-main transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/essessvi-vadlamudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-bold text-brand hover:text-text-main transition-colors inline-flex items-center gap-1.5"
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
    </div>
  );
}
