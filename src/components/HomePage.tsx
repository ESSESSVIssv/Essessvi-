/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="bg-bg py-24 md:py-32 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <div className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#B87333] font-bold mb-3 flex items-center gap-2" style={{ color: '#B87333' }}>
            <span>V. ESSESSVI</span>
            <span className="text-text-main/30">•</span>
            <span className="text-text-main/60 font-medium">Aspiring Product Manager</span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#B87333] leading-[1.1] mb-6 normal-case"
            style={{ color: '#B87333', fontWeight: 800 }}
          >
            <strong>Building products around real user problems.</strong>
          </h1>

          <p className="text-lg md:text-xl font-sans text-text-main/80 leading-relaxed max-w-3xl mb-8">
            I'm <span className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>V. Essessvi</span>, a CSE graduate focused on product work across user research, product discovery, consumer products, AI-powered experiences, and product prototyping. I enjoy understanding how people actually experience a problem and turning those insights into simple, useful product solutions.
          </p>

          {/* Capability line */}
          <div className="text-xs md:text-sm font-sans font-bold uppercase tracking-wider text-[#B87333] mb-10" style={{ color: '#B87333' }}>
            User Research · Product Discovery · Product Thinking · AI Products · Prototyping
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
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
          </div>

        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section className="bg-white py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-bold block mb-2" style={{ color: '#B87333' }}>
              About Me
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-[#B87333] mb-5" style={{ color: '#B87333' }}>
              Who I Am & How I Build
            </h2>
            <div className="space-y-4 text-base font-sans text-text-main/80 leading-relaxed">
              <p>
                I am a product-focused Computer Science and Engineering graduate from <strong>The Apollo University</strong> (2022–2026). My passion lies in understanding where everyday users experience friction and translating those real-world pain points into intuitive, high-utility product experiences.
              </p>
              <p>
                Rather than starting with lines of code or complex feature lists, I ground my work in <strong>field-based user observations</strong>, <strong>direct interviews</strong>, and <strong>workflow mapping</strong>. Whether conducting in-person research with mango farmers at local markets, building an automobile spare-parts marketplace concept (SpareXChange), or designing AI conversational order flows at AgentRoomAI, I focus on the problem before deciding what gets built.
              </p>
              <p>
                I combine a strong technical foundation in algorithms and software engineering with product discovery, user empathy, and rapid prototyping. I am currently seeking an <strong>Associate Product Manager (APM)</strong> role, <strong>Junior Product Manager</strong> position, or <strong>Product Management Internship</strong>.
              </p>
            </div>

            {/* Quick direct path to Work */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="px-6 py-3 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                Go to Work Page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white border border-border text-text-main font-sans font-bold text-xs uppercase tracking-wider hover:border-brand transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
