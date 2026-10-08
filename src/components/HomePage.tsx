/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import profilePic from '../assets/essessvi-real-photo.jpg';

export default function HomePage() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-[#FAF9F6] text-neutral-900 selection:bg-[#B87333] selection:text-white flex items-center py-10 sm:py-16 md:py-24">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full relative">
        
        {/* Subtle warm ambient glow */}
        <div 
          className="absolute -top-12 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#B87333]/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Status Bar (Responsive) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-neutral-200/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans tracking-widest uppercase font-bold text-[#B87333]">
            <span className="font-extrabold">{PERSONAL_INFO.name.toUpperCase()}</span>
            <span className="text-neutral-300" aria-hidden="true">•</span>
            <span className="text-neutral-600 font-semibold tracking-normal normal-case sm:uppercase">
              Aspiring Product Manager
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 shadow-2xs text-[11px] font-sans font-semibold text-neutral-800 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to APM · Junior PM · PM Internships</span>
          </div>
        </div>

        {/* Main 2-Column Showcase (Stacks vertically on small screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative (7 cols on lg, 1 col on small screens) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="h-px w-6 bg-[#B87333]"></span>
              <span 
                className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black"
                style={{ color: '#B87333', fontWeight: 900 }}
              >
                ABOUT ME
              </span>
            </div>

            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] leading-[1.12] mb-5 sm:mb-6 uppercase"
              style={{ color: '#B87333', fontWeight: 900 }}
            >
              <strong>WHO I AM & HOW I BUILD</strong>
            </h1>

            {/* Exact Authentic Copy */}
            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base md:text-[17px] font-sans text-neutral-800 leading-relaxed">
              <p>
                I am a product-focused Computer Science and Engineering graduate from <strong className="font-bold text-neutral-950">The Apollo University</strong> (2022–2026). My passion lies in understanding where everyday users experience friction and translating those real-world pain points into intuitive, high-utility product experiences.
              </p>
              <p>
                Rather than starting with lines of code or complex feature lists, I ground my work in <strong className="font-bold text-neutral-950">field-based user observations</strong>, <strong className="font-bold text-neutral-950">direct interviews</strong>, and <strong className="font-bold text-neutral-950">workflow mapping</strong>. Whether conducting in-person research with mango farmers at local markets, building an automobile spare-parts marketplace concept (SpareXChange), or designing AI conversational order flows at AgentRoomAI, I focus on the problem before deciding what gets built.
              </p>
              <p>
                I combine a strong technical foundation in algorithms and software engineering with product discovery, user empathy, and rapid prototyping. I am currently seeking an <strong className="font-bold text-[#B87333]">Associate Product Manager (APM)</strong> role, <strong className="font-bold text-[#B87333]">Junior Product Manager</strong> position, or <strong className="font-bold text-[#B87333]">Product Management Internship</strong>.
              </p>
            </div>

            {/* Core Disciplines - Clean Zero-Pill Text */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-200/80">
              <div className="text-[11px] font-sans uppercase tracking-widest text-[#B87333] font-black mb-2">
                Core Product Capabilities
              </div>
              <div className="text-xs sm:text-sm font-sans font-semibold text-neutral-700 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
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

            {/* Primary Actions (Mobile-First: Stacks vertically on phone, horizontal on sm+) */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <Link
                to="/work"
                className="w-full sm:w-auto text-center justify-center px-6 py-3.5 bg-[#B87333] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer min-h-[44px]"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/resume"
                className="w-full sm:w-auto text-center justify-center px-6 py-3.5 bg-white border border-neutral-300 text-neutral-900 font-sans font-bold text-xs uppercase tracking-wider hover:border-[#B87333] hover:text-[#B87333] transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer min-h-[44px]"
              >
                <FileText className="w-4 h-4" /> View Resume
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto text-center justify-center px-5 py-3.5 bg-white sm:bg-transparent border border-neutral-200 sm:border-transparent text-neutral-700 hover:text-[#B87333] font-sans font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer min-h-[44px]"
              >
                Contact Me
              </Link>
            </div>

          </div>

          {/* Right Column: "This Pic" (Stacks first on mobile or as ordered) */}
          <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md bg-white border border-neutral-200/90 p-3.5 sm:p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] relative group">
              
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
                <img 
                  src={profilePic || '/profile.jpg'} 
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/profile.jpg')) {
                      target.src = '/profile.jpg';
                    }
                  }}
                  alt="V. Essessvi - Product Manager" 
                  className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.01] transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle corner badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 border border-neutral-200/80 shadow-2xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-neutral-800">
                    V. Essessvi
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
