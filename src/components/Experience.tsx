/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Briefcase, 
  Bot, 
  Sparkles, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  Award, 
  Layers, 
  ExternalLink,
  Cpu,
  Smartphone,
  Search,
  MessageSquare,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPERIENCE, CLUBS } from '../constants';

type SegmentTab = 'all' | 'agentroomai' | 'products' | 'field' | 'leadership';

export default function Experience() {
  const [activeSegment, setActiveSegment] = useState<SegmentTab>('all');

  const agentRoomExperience = EXPERIENCE.find(e => e.company === 'AgentRoomAI');
  const productExperiences = EXPERIENCE.filter(e => e.company === 'SpareXChange' || e.company === 'JobLence');
  const fieldExperiences = EXPERIENCE.filter(e => e.company === 'Mango Farmer Token System' || e.company === 'CashKaro Product Teardown');

  return (
    <div className="w-full bg-[#FAF9F6] py-16 md:py-24 min-h-screen text-neutral-900 selection:bg-[#B87333] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Navigation Breadcrumb */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-neutral-600 hover:text-[#B87333] transition-colors mb-8 sm:mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-14 pb-8 border-b border-neutral-200">
          <div className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-bold mb-2">
            V. ESSESSVI • Aspiring Product Manager
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4 uppercase">
            Experience & Products
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-sans text-neutral-600 max-w-2xl leading-relaxed">
            Hands-on product execution spanning industry AI workflow automation at AgentRoomAI, dual-sided marketplace MVPs, agricultural field systems, and student leadership.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="bg-white border border-neutral-200 p-3.5 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black font-display text-[#B87333]">AgentRoomAI</div>
              <div className="text-[11px] font-sans font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Product & AI Intern</div>
            </div>
            <div className="bg-white border border-neutral-200 p-3.5 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black font-display text-neutral-900">3 MVPs</div>
              <div className="text-[11px] font-sans font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Built & Launched</div>
            </div>
            <div className="bg-white border border-neutral-200 p-3.5 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black font-display text-neutral-900">10+ Interviews</div>
              <div className="text-[11px] font-sans font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Field User Research</div>
            </div>
            <div className="bg-white border border-neutral-200 p-3.5 shadow-2xs">
              <div className="text-xl sm:text-2xl font-black font-display text-neutral-900">3+ Years</div>
              <div className="text-[11px] font-sans font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Campus Leadership</div>
            </div>
          </div>
        </div>

        {/* Interactive Segment Filter Tabs */}
        <div className="mb-10">
          <div className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 mb-3">
            Segment By Focus Area:
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Experience' },
              { id: 'agentroomai', label: 'AgentRoomAI (Work Experience)' },
              { id: 'products', label: 'Product Initiatives & MVPs' },
              { id: 'field', label: 'Field Systems & Teardowns' },
              { id: 'leadership', label: 'Campus Leadership & Clubs' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSegment(tab.id as SegmentTab)}
                className={`px-3.5 py-1.5 text-xs font-sans font-bold transition-all border cursor-pointer ${
                  activeSegment === tab.id
                    ? 'bg-[#B87333] text-white border-[#B87333] shadow-xs'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#B87333]/50 hover:text-[#B87333]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SEGMENT 1: AGENTROOMAI (FEATURED WORK EXPERIENCE)        */}
        {/* ======================================================== */}
        {(activeSegment === 'all' || activeSegment === 'agentroomai') && agentRoomExperience && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333]">
                <Bot className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 uppercase tracking-tight">
                  1. Industry Experience — AgentRoomAI
                </h2>
                <p className="text-xs font-sans text-neutral-500 uppercase tracking-wider font-semibold">
                  Conversational Commerce Automation · Intent Extraction · LLM Workflows
                </p>
              </div>
            </div>

            {/* Primary AgentRoomAI Spotlight Card */}
            <div className="bg-white border-2 border-[#B87333] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden mb-6">
              
              {/* Corner Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B87333] text-white text-[11px] font-sans font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Industry Experience
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-neutral-200 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-[#B87333] uppercase">
                      AgentRoomAI
                    </h3>
                    <span className="px-3 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-sans font-bold uppercase tracking-wider">
                      {agentRoomExperience.role}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-sans font-bold text-neutral-800">
                    {agentRoomExperience.title}
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest sm:text-right">
                  {agentRoomExperience.period}
                </div>
              </div>

              {/* Problem & Executive Summary */}
              <div className="p-4 bg-[#FAF9F6] border-l-4 border-[#B87333] mb-8">
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#B87333] mb-1">
                  Core Mission & Focus
                </div>
                <p className="text-sm sm:text-base font-sans text-neutral-800 leading-relaxed font-medium">
                  {agentRoomExperience.summary}
                </p>
              </div>

              {/* Segmented AgentRoomAI Products & Systems */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333] mb-4">
                  AI Products & Conversational Solutions Built Under AgentRoomAI
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Product 1 */}
                  <div className="p-4 bg-white border border-neutral-200 shadow-2xs hover:border-[#B87333]/40 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-[#B87333]">
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <h5 className="font-sans font-bold text-sm text-neutral-900">
                        WhatsApp Commerce & Ordering Bot
                      </h5>
                    </div>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed mb-3">
                      Designed guided conversational interactions that handle menu queries, extract order items, validate quantities, and generate immediate confirmations, reducing drop-offs caused by unstructured messaging.
                    </p>
                    <div className="text-[11px] font-sans font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200 inline-block">
                      Impact: Eliminated order ambiguity & shortened ordering time
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="p-4 bg-white border border-neutral-200 shadow-2xs hover:border-[#B87333]/40 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-[#B87333]">
                      <Cpu className="w-4 h-4 shrink-0" />
                      <h5 className="font-sans font-bold text-sm text-neutral-900">
                        Intent Modeling & Real-Time Extraction
                      </h5>
                    </div>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed mb-3">
                      Integrated prompt-driven LLM parsing to recognize user intents from natural language chats, accurately extracting addresses, timing constraints, and custom modifications in real time.
                    </p>
                    <div className="text-[11px] font-sans font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200 inline-block">
                      Impact: Handled free-form conversational queries seamlessly
                    </div>
                  </div>

                  {/* Product 3 */}
                  <div className="p-4 bg-white border border-neutral-200 shadow-2xs hover:border-[#B87333]/40 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-[#B87333]">
                      <Zap className="w-4 h-4 shrink-0" />
                      <h5 className="font-sans font-bold text-sm text-neutral-900">
                        Automated Status & Support Engine
                      </h5>
                    </div>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed mb-3">
                      Automated high-frequency repetitive customer touchpoints including real-time dispatch updates, delivery delay notifications, and common FAQ responses, reducing manual operator workload.
                    </p>
                    <div className="text-[11px] font-sans font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200 inline-block">
                      Impact: ~60% reduction in repetitive manual support tickets
                    </div>
                  </div>

                  {/* Product 4 */}
                  <div className="p-4 bg-white border border-neutral-200 shadow-2xs hover:border-[#B87333]/40 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-[#B87333]">
                      <Target className="w-4 h-4 shrink-0" />
                      <h5 className="font-sans font-bold text-sm text-neutral-900">
                        Edge-Case Testing & Prompt Refinement
                      </h5>
                    </div>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed mb-3">
                      Audited live transcripts to isolate conversational fail states (e.g. typos, sudden mid-order changes, invalid payment details) and iteratively refined system prompts and fallback branches.
                    </p>
                    <div className="text-[11px] font-sans font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200 inline-block">
                      Impact: High conversation completion rate across edge cases
                    </div>
                  </div>

                </div>
              </div>

              {/* Responsibilities list */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500 mb-3">
                  Key Execution Points
                </h4>
                <ul className="space-y-2.5">
                  {agentRoomExperience.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Skills tags */}
              <div className="mb-8 pt-6 border-t border-neutral-200">
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                  Demonstrated Competencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {agentRoomExperience.productSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-sans font-semibold bg-[#FAF9F6] border border-neutral-300 px-3 py-1 text-neutral-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Link to In-Depth Case Study */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF9F6] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 md:-mx-10 md:-mb-10 p-6">
                <div>
                  <div className="font-bold text-sm text-neutral-900">
                    Want to see the end-to-end teardown and conversational flow diagrams?
                  </div>
                  <div className="text-xs text-neutral-600 font-sans">
                    Read the complete AgentRoomAI Case Study covering discovery, friction points, and metrics.
                  </div>
                </div>

                <Link
                  to="/work/agentroomai"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B87333] text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#A0622A] transition-colors shadow-xs shrink-0"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SEGMENT 2: PRODUCT INITIATIVES & MVPS                   */}
        {/* ======================================================== */}
        {(activeSegment === 'all' || activeSegment === 'products') && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333]">
                <Layers className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 uppercase tracking-tight">
                  2. Product Inventions & Marketplaces
                </h2>
                <p className="text-xs font-sans text-neutral-500 uppercase tracking-wider font-semibold">
                  Dual-Sided Marketplaces · QR/OTP Transaction Flows · Job Discovery UX
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {productExperiences.map((exp, idx) => {
                const isSpareXChange = exp.company === 'SpareXChange';
                const studyUrl = isSpareXChange ? '/work/sparexchange' : '/work/joblence';

                return (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 p-6 sm:p-8 shadow-2xs hover:border-[#B87333]/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-neutral-200 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                          <h3 className="text-xl sm:text-2xl font-display font-black text-[#B87333] uppercase">
                            {exp.company}
                          </h3>
                          <span className="px-2.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-sans font-bold uppercase tracking-wider">
                            {exp.role}
                          </span>
                        </div>
                        <div className="text-sm font-sans font-bold text-neutral-800">
                          {exp.title}
                        </div>
                      </div>

                      <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider sm:text-right">
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-sm font-sans text-neutral-700 leading-relaxed mb-6 font-medium border-l-2 border-[#B87333] pl-3.5">
                      {exp.summary}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500 mb-3">
                        Product Highlights & Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.productSkills?.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[11px] font-sans font-semibold bg-[#FAF9F6] border border-neutral-200 px-2.5 py-0.5 text-neutral-700">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={studyUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#B87333] hover:underline shrink-0"
                      >
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SEGMENT 3: FIELD OPERATIONS & PRODUCT TEARDOWNS          */}
        {/* ======================================================== */}
        {(activeSegment === 'all' || activeSegment === 'field') && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333]">
                <Search className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 uppercase tracking-tight">
                  3. Field Research & Product Teardowns
                </h2>
                <p className="text-xs font-sans text-neutral-500 uppercase tracking-wider font-semibold">
                  Primary User Inquiries · Agricultural Queue UX · Funnel Conversion Audits
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fieldExperiences.map((exp, idx) => {
                const isFarmer = exp.company.includes('Farmer');
                const linkHref = isFarmer ? '/research/farmer-token' : '/teardowns/cashkaro';

                return (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 p-6 shadow-2xs hover:border-[#B87333]/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-1.5">
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-display font-black text-[#B87333] uppercase mb-1">
                        {exp.company}
                      </h3>
                      <div className="text-xs font-sans font-bold text-neutral-800 mb-3">
                        {exp.role}
                      </div>

                      <p className="text-xs font-sans text-neutral-600 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      <ul className="space-y-1.5 mb-5">
                        {exp.points.slice(0, 3).map((p, pIdx) => (
                          <li key={pIdx} className="text-xs font-sans text-neutral-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B87333] mt-1.5 shrink-0"></span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[10.5px] font-sans font-semibold text-neutral-500">
                        {exp.productSkills?.[0]} · {exp.productSkills?.[1]}
                      </span>

                      <Link
                        to={linkHref}
                        className="inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider text-[#B87333] hover:underline"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SEGMENT 4: CAMPUS LEADERSHIP & COMMUNITY IMPACT          */}
        {/* ======================================================== */}
        {(activeSegment === 'all' || activeSegment === 'leadership') && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333]">
                <Users className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-black text-neutral-900 uppercase tracking-tight">
                  4. Campus Leadership & Organizations
                </h2>
                <p className="text-xs font-sans text-neutral-500 uppercase tracking-wider font-semibold">
                  Department Coordination · Community Programs · Operations
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLUBS.map((club, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-6 shadow-2xs hover:border-[#B87333]/40 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-display font-black text-base sm:text-lg text-[#B87333] uppercase">
                      {club.title}
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-neutral-500">
                      {club.period}
                    </span>
                  </div>

                  <div className="text-xs font-sans font-bold text-neutral-800 uppercase tracking-wider mb-2.5">
                    {club.role}
                  </div>

                  <p className="text-xs font-sans text-neutral-600 leading-relaxed mb-4">
                    {club.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {club.points.map((p, pIdx) => (
                      <li key={pIdx} className="text-xs font-sans text-neutral-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B87333] mt-1.5 shrink-0"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                    {club.tools.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10.5px] font-sans font-semibold text-neutral-600 bg-[#FAF9F6] px-2 py-0.5 border border-neutral-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
