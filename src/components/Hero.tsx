/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, FileText, Linkedin, Compass, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PERSONAL_INFO, CORE_CAPABILITIES } from '../constants';

export default function Hero() {
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] pt-32 pb-20 px-6 md:px-12 bg-bg flex items-center border-b border-border">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Recruiter Quick Status Banner */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-sans font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          <span>Open to APM · Junior PM · Product Management Internship</span>
        </div>

        {/* Hero Title */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#B87333] leading-[1.08] mb-6 max-w-5xl"
          style={{ color: '#B87333', fontWeight: 800 }}
        >
          <strong>Building products around real user problems.</strong>
        </h1>

        {/* Supporting Narrative */}
        <p className="text-lg md:text-xl text-text-main/80 font-sans leading-relaxed max-w-3xl mb-8">
          Product-focused CSE graduate with hands-on experience in user research, product discovery, AI-powered products, and product prototyping. I enjoy understanding how people actually experience a problem and turning those insights into simple, useful product solutions.
        </p>

        {/* Simple Capability Line */}
        <div className="text-sm md:text-base font-sans font-semibold text-text-main/70 mb-10 tracking-wide">
          User Research · Product Discovery · Product Thinking · AI Products · Prototyping
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => handleScrollTo('work')}
            className="px-6 py-3.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            View My Work →
          </button>
          
          <button
            onClick={() => navigate('/resume')}
            className="px-6 py-3.5 bg-white border border-border text-text-main font-sans font-bold text-xs uppercase tracking-wider hover:border-text-main transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <FileText className="w-4 h-4" /> Resume ↓
          </button>
        </div>

        {/* Quick Proof-Points Grid for Recruiters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-14 mt-14 border-t border-border/80">
          <div className="bg-white p-5 border border-border shadow-xs">
            <div className="text-brand font-mono text-xs uppercase tracking-widest font-semibold mb-1">
              Field Discovery
            </div>
            <div className="font-display font-bold text-base text-text-main mb-1">
              Farmer Token Case Study
            </div>
            <p className="text-xs font-sans text-text-main/70 leading-relaxed">
              On-ground contextual inquiries & queue workflow mapping with farmers at agricultural procurement yards.
            </p>
          </div>

          <div className="bg-white p-5 border border-border shadow-xs">
            <div className="text-brand font-mono text-xs uppercase tracking-widest font-semibold mb-1">
              Conversational CX
            </div>
            <div className="font-display font-bold text-base text-text-main mb-1">
              AgentRoomAI Workflows
            </div>
            <p className="text-xs font-sans text-text-main/70 leading-relaxed">
              Structured dialog flows, edge-case recovery, and order handling automating repetitive customer interactions.
            </p>
          </div>

          <div className="bg-white p-5 border border-border shadow-xs">
            <div className="text-brand font-mono text-xs uppercase tracking-widest font-semibold mb-1">
              Marketplace Concept
            </div>
            <div className="font-display font-bold text-base text-text-main mb-1">
              SpareXChange Prototype
            </div>
            <p className="text-xs font-sans text-text-main/70 leading-relaxed">
              MVP feature prioritization and QR OTP escrow flow addressing the core trust deficit in used spare parts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
