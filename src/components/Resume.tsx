/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { 
  Download, 
  ArrowLeft, 
  Printer, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Handle high-resolution print/PDF
  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 160));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div className="min-h-screen bg-[#F4F4F5] py-10 md:py-16 px-3 sm:px-6 md:px-12 font-sans text-neutral-900">
      
      {/* Top Header & Interactive Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-8 print-hide">
        <div className="flex items-center justify-between gap-4 mb-5">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-neutral-600 hover:text-brand transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider rounded-sm">
              <Check className="w-3 h-3" /> Official PDF Version
            </span>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-white border border-neutral-200 shadow-sm p-5 md:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-widest text-brand font-bold mb-1">
                Official Resume Document
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-black tracking-tight text-neutral-900">
                <span className="text-[#B87333]">V. ESSESSVI</span> — Resume
              </h1>
              <p className="text-xs md:text-sm text-neutral-600 mt-1 max-w-xl">
                Exact replica of my official single-page resume. Available to view or save directly as a print-ready PDF.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Download PDF */}
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors shadow-xs cursor-pointer"
                title="Save or print as vector PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 font-medium">
              Document Display
            </span>

            <div className="flex items-center gap-2 text-xs font-sans text-neutral-600">
              <span className="hidden sm:inline text-neutral-400">Zoom:</span>
              <button 
                onClick={handleZoomOut}
                className="w-7 h-7 flex items-center justify-center bg-white border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="min-w-[40px] text-center font-mono font-semibold text-neutral-800">
                {zoomLevel}%
              </span>
              <button 
                onClick={handleZoomIn}
                className="w-7 h-7 flex items-center justify-center bg-white border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={handleResetZoom}
                className="px-2 py-1 bg-white border border-neutral-200 hover:bg-neutral-50 text-[11px] font-semibold cursor-pointer flex items-center gap-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VIEWPORT AREA */}
      <div className="max-w-4xl mx-auto overflow-x-auto pb-12 print:p-0 print:m-0 print:max-w-none print:overflow-visible">
        
        <div 
          className="flex justify-center transition-transform origin-top"
          style={{ transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : 'none' }}
        >
          <div 
            ref={resumeRef}
            id="resume-document-sheet"
            className="print-page w-full max-w-[820px] bg-white border border-neutral-300 shadow-md p-8 sm:p-10 md:p-12 text-black leading-snug print:border-none print:shadow-none print:p-0"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
            }}
          >
            {/* HEADER */}
            <div className="text-center pb-2.5 mb-3 border-b border-black">
              <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight uppercase text-[#B87333] mb-0.5" style={{ color: '#B87333' }}>
                V. ESSESSVI
              </h1>
              <div className="text-sm font-bold text-neutral-900 mb-1">
                Aspiring Product Manager
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-800 flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5">
                <span>9392964456</span>
                <span>|</span>
                <a href="mailto:vessessvi2005@gmail.com" className="hover:underline text-neutral-800">
                  vessessvi2005@gmail.com
                </a>
                <span>|</span>
                <span className="uppercase">CHITTOOR</span>
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-800 flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5 mt-0.5">
                <a 
                  href="https://linkedin.com/in/essessvi-vadlamudi-ab2590273" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-neutral-800"
                >
                  linkedin.com/in/essessvi-vadlamudi
                </a>
                <span>|</span>
                <a 
                  href="https://essessvi.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-neutral-800"
                >
                  essessvi.vercel.app
                </a>
              </div>
            </div>

            {/* PROFILE */}
            <div className="mb-3">
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black">
                PROFILE
              </div>
              <p className="text-[11px] sm:text-[11.5px] leading-normal text-neutral-900 text-justify">
                Product-focused CSE graduate with hands-on experience in user research, product discovery, AI-powered products, and product prototyping. Conducted field-based research with farmers by observing real-world workflows and speaking directly with users to identify pain points and product opportunities. Experienced in AI workflow automation, consumer product projects, user journey mapping, market research, and translating real-world problems into simple, practical MVP concepts.
              </p>
            </div>

            {/* SKILLS */}
            <div className="mb-3">
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black">
                SKILLS
              </div>
              <div className="text-[11px] sm:text-[11.5px] leading-normal text-neutral-900 space-y-0.5">
                <div>
                  <span className="font-bold">Product:</span> Product Thinking | User Research | Product Discovery | User Journey Mapping | Problem Framing | Feature Prioritization | MVP | Market Research | Competitor Analysis
                </div>
                <div>
                  <span className="font-bold">AI & Tools:</span> AI Products | LLMs | OpenAI | Google AI Studio | Gemini API | WhatsApp Business API | Prompt Engineering | Workflow Automation | Notion
                </div>
              </div>
            </div>

            {/* EXPERIENCE / PRODUCT PROJECTS */}
            <div className="mb-3">
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                EXPERIENCE / PRODUCT PROJECTS
              </div>

              {/* 1. AgentRoomAI */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[12px] font-bold text-black">
                    AgentRoomAI
                  </span>
                  <span className="text-[11px] font-medium text-neutral-800">
                    Dec 2025 – Apr 2026
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-neutral-900 mb-0.5">
                  Role: Intern AI Workflow Engineer
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight">
                  <li>Identified customer friction in the ordering process, including incomplete orders, unclear messages, confirmations, and support requests.</li>
                  <li>Designed conversational flows to make customer ordering faster, simpler, and more reliable.</li>
                  <li>Integrated AI models to understand customer intent and generate relevant real-time responses.</li>
                  <li>Automated repetitive WhatsApp interactions to reduce manual effort and improve response handling.</li>
                  <li>Identified edge cases and iterated workflows based on observed user interactions.</li>
                  <li>Built and tested AI-powered workflows using n8n, OpenAI, and WhatsApp Business API.</li>
                </ul>
              </div>

              {/* 2. SpareXChange */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[12px] font-bold text-black">
                    SpareXChange — Self-Initiated Product Project
                  </span>
                  <span className="text-[11px] font-medium text-neutral-800">
                    Jan 2025 – Mar 2025
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-neutral-900 mb-0.5">
                  Role: Product Lead & Developer
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight">
                  <li>Conducted market research and competitor analysis to identify customer needs and gaps in the automobile spare-parts market.</li>
                  <li>Mapped user journeys and identified friction points in the spare-parts buying experience.</li>
                  <li>Defined and prioritized product features based on user needs and business requirements.</li>
                  <li>Designed an MVP focused on spare-part discovery, inventory visibility, and transaction management.</li>
                  <li>Implemented an OTP-based payment/verification flow for a smoother transaction experience.</li>
                </ul>
              </div>

              {/* 3. JobLence */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[12px] font-bold text-black">
                    JobLence — Self-Initiated Product Project
                  </span>
                  <span className="text-[11px] font-medium text-neutral-800">
                    Product Project
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-neutral-900 mb-0.5">
                  Role: Product Prototype
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight">
                  <li>Identified job-search friction faced by students and early-career candidates when navigating large numbers of job listings.</li>
                  <li>Analyzed the job-discovery journey and designed a simplified experience focused on relevant opportunities and easier search.</li>
                  <li>Defined core MVP features around job search, filtering, and relevance.</li>
                </ul>
              </div>

              {/* 4. Mango Farmer Token System */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[12px] font-bold text-black">
                    Mango Farmer Token System
                  </span>
                  <span className="text-[11px] font-medium text-neutral-800">
                    Product Research / Prototype
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-neutral-900 mb-0.5">
                  Role: Product Research & Prototype
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight">
                  <li>Conducted field-based user research at a market by observing how farmers and factory staff manage token and queue processes.</li>
                  <li>Spoke directly with farmers to understand their day-to-day experience, frustrations, and challenges in the existing workflow.</li>
                  <li>Mapped the process and identified friction and visibility gaps affecting farmers.</li>
                  <li>Translated field observations into product opportunities and designed an app-based workflow to simplify token management and improve process visibility.</li>
                  <li>Focused on a simple user experience for users with varying levels of technical familiarity.</li>
                </ul>
              </div>

              {/* 5. CashKaro Product Teardown */}
              <div className="mb-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[12px] font-bold text-black">
                    CashKaro Product Teardown
                  </span>
                  <span className="text-[11px] font-medium text-neutral-800">
                    Product Analysis
                  </span>
                </div>
                <div className="text-[11px] font-semibold text-neutral-900 mb-0.5">
                  Role: Product Analysis / UX Teardown
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight">
                  <li>Analyzed the first-time user journey to understand how new users discover CashKaro's product value proposition.</li>
                  <li>Examined onboarding, savings communication, deal discovery, and key conversion touchpoints.</li>
                  <li>Proposed clearer product-specific savings messaging, improved deal discovery, and stronger first-time-user value communication.</li>
                  <li>Structured recommendations using observation, problem, hypothesis, proposed solution, and expected impact.</li>
                </ul>
              </div>

            </div>

            {/* EDUCATION */}
            <div className="mb-3">
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                EDUCATION
              </div>
              
              <div className="space-y-1.5 text-[11px] sm:text-[11.5px]">
                {/* The Apollo University */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-black">The Apollo University</div>
                    <div className="text-neutral-800">B.Tech in Computer Science & Engineering</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-medium text-neutral-800">Sep 2022 – Apr 2026</div>
                    <div className="font-bold text-black">CGPA: 7.17</div>
                  </div>
                </div>

                {/* Govt. Jr. College */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-black">Govt. Jr. College, Vadamalapet</div>
                    <div className="text-neutral-800">Intermediate</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-medium text-neutral-800">Mar 2020 – Aug 2022</div>
                    <div className="font-bold text-black">542 marks</div>
                  </div>
                </div>

                {/* Camford English High School */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-black">Camford English High School, Chittoor</div>
                    <div className="text-neutral-800">SSC</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-medium text-neutral-800">Apr 2008 – May 2020</div>
                    <div className="font-bold text-black">416 marks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* LANGUAGES KNOWN */}
            <div className="mb-3">
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black">
                LANGUAGES KNOWN
              </div>
              <div className="text-[11px] sm:text-[11.5px] text-neutral-900">
                English • Telugu • Hindi • Tamil
              </div>
            </div>

            {/* CLUBS & LEADERSHIP */}
            <div className="mb-3">
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                CLUBS & LEADERSHIP
              </div>
              <div className="space-y-1.5 text-[11px] sm:text-[11.5px] text-neutral-900">
                <div>
                  <div className="font-bold text-black">
                    NSS (2022–2026) — Coordinator & Member
                  </div>
                  <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight mt-0.5">
                    <li>Led student groups in community outreach and environmental campaigns.</li>
                    <li>Facilitated collaboration between university administration and student volunteers.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-black">
                    Echo Club (2024–2025) — Member
                  </div>
                  <ul className="list-disc list-outside ml-3.5 text-[10.5px] sm:text-[11px] text-neutral-900 space-y-0.5 leading-tight mt-0.5">
                    <li>Participated in sustainability initiatives and eco-friendly campus activities.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <div className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black">
                CERTIFICATIONS
              </div>
              <div className="space-y-0.5 text-[10.5px] sm:text-[11px] text-neutral-900">
                <div className="flex justify-between items-baseline">
                  <span>• <span className="font-semibold">Aha! Product Management Professional Certificate</span> (LinkedIn Learning)</span>
                  <span className="font-medium text-neutral-800 shrink-0 ml-2">May 27, 2026</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>• <span className="font-semibold">IBM Data Fundamentals</span></span>
                  <span className="font-medium text-neutral-800 shrink-0 ml-2">Dec 2025</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>• <span className="font-semibold">Acquiring Data – AI Fundamentals</span></span>
                  <span className="font-medium text-neutral-800 shrink-0 ml-2">Nov 2024</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>• <span className="font-semibold">Google Cloud Computing Foundations</span></span>
                  <span className="font-medium text-neutral-800 shrink-0 ml-2">Dec 2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
