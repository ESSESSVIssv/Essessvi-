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
  Check,
  Phone,
  Mail,
  MapPin,
  ExternalLink
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
              <Check className="w-3 h-3" /> Official Updated Resume
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
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={handlePrint}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors shadow-xs cursor-pointer"
                title="Save or print as vector PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-neutral-500 font-medium">
              Document Display
            </span>

            <div className="flex items-center gap-2 text-xs font-sans text-neutral-600">
              <span className="hidden sm:inline text-neutral-400">Zoom:</span>
              <button 
                onClick={handleZoomOut}
                className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center bg-white border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="min-w-[40px] text-center font-mono font-semibold text-neutral-800">
                {zoomLevel}%
              </span>
              <button 
                onClick={handleZoomIn}
                className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center bg-white border border-neutral-200 hover:bg-neutral-50 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={handleResetZoom}
                className="px-2.5 py-1.5 sm:py-1 bg-white border border-neutral-200 hover:bg-neutral-50 text-[11px] font-semibold cursor-pointer flex items-center gap-1"
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
          className="flex justify-center transition-transform origin-top min-w-full"
          style={{ transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : 'none' }}
        >
          <div 
            ref={resumeRef}
            id="resume-document-container"
            className="print-page w-full max-w-[820px] bg-white border border-neutral-300 shadow-md p-4 sm:p-7 md:p-10 text-black leading-snug print:border-none print:shadow-none print:p-0"
            style={{
              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
            }}
          >
            {/* 1. HEADER */}
            <div className="text-center pb-2 mb-2.5 border-b border-black">
              <h1 className="text-2xl sm:text-[28px] font-bold tracking-normal uppercase text-black mb-0.5 leading-tight">
                V. ESSESSVI
              </h1>
              <div className="text-[13px] sm:text-[14px] font-bold text-black mb-1">
                Aspiring Product Manager
              </div>
              <div className="text-[10.5px] sm:text-[11px] text-black flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span className="flex items-center gap-1">📞 9392964456</span>
                <span>|</span>
                <a href="mailto:vessessvi12005@gmail.com" className="hover:underline text-black flex items-center gap-1">
                  ✉ vessessvi12005@gmail.com
                </a>
                <span>|</span>
                <span className="flex items-center gap-1">📍 CHITTOOR</span>
              </div>
              <div className="text-[10.5px] sm:text-[11px] text-black flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <a 
                  href="https://linkedin.com/in/essessvi-vadlamudi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-black"
                >
                  linkedin.com/in/essessvi-vadlamudi
                </a>
                <span>|</span>
                <a 
                  href="https://essessvi.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-black"
                >
                  essessvi.vercel.app
                </a>
              </div>
            </div>

            {/* 2. PROFILE */}
            <div className="mb-2.5">
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black font-sans">
                PROFILE
              </div>
              <p className="text-[10.5px] sm:text-[11px] leading-relaxed text-black text-justify">
                Product Manager with hands-on experience building AI-powered products and user-focused solutions. Skilled in end-to-end product ownership — from understanding user problems, conducting market and competitor research, mapping user journeys, defining product features, and delivering measurable outcomes. Strong interest in AI products, consumer experiences, and solving real-world problems through simple, practical products.
              </p>
            </div>

            {/* 3. SKILLS */}
            <div className="mb-2.5">
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black font-sans">
                SKILLS
              </div>
              <div className="text-[10.5px] sm:text-[11px] leading-relaxed text-black space-y-0.5">
                <div>
                  <span className="font-bold">Product:</span> Product Thinking | User Research | Product Discovery | User Journey Mapping | Feature Prioritization | MVP | Market Research | Competitor Analysis
                </div>
                <div>
                  <span className="font-bold">AI & Tools:</span> AI Products | LLMs | n8n | OpenAI | Google AI Studio | Gemini API | WhatsApp Business API | Prompt Engineering | Workflow Automation | Figma | Notion | Google Sheets
                </div>
              </div>
            </div>

            {/* 4. EXPERIENCE / PRODUCT PROJECTS */}
            <div className="mb-2.5">
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black font-sans">
                EXPERIENCE / PRODUCT PROJECTS
              </div>

              {/* 4.1 AgentRoomAI */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[11.5px] font-bold text-black">
                    AgentRoomAI
                  </span>
                  <span className="text-[10.5px] font-bold text-black">
                    Dec 2025 – Apr 2026
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-[10.5px] text-neutral-800 mb-0.5 font-sans italic">
                  <span>Product & AI Workflow Intern</span>
                  <span>(Remote | Part-time)</span>
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug">
                  <li>Identified customer challenges in the ordering process, including incomplete orders, unclear messages, confirmations, and support requests.</li>
                  <li>Designed conversational flows to make customer ordering faster, simpler, and more reliable.</li>
                  <li>Integrated AI models to understand customer intent and generate relevant real-time responses.</li>
                  <li>Automated repetitive WhatsApp interactions to reduce manual effort and improve response handling — including order requests, menu/product queries, order-detail extraction, validation, confirmations, status updates, notifications, and support.</li>
                  <li>Tested conversational flows and refined prompts based on observed user interactions.</li>
                </ul>
              </div>

              {/* 4.2 SpareXChange */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[11.5px] font-bold text-black">
                    SpareXChange — Self-Initiated Product Project
                  </span>
                  <span className="text-[10.5px] font-bold text-black">
                    Jan 2025 – Mar 2025
                  </span>
                </div>
                <div className="text-[10.5px] text-neutral-800 mb-0.5 font-sans italic">
                  Product Lead
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug">
                  <li>Conducted user research and competitor analysis to identify customer needs and gaps in the automobile spare-parts market.</li>
                  <li>Mapped user journeys and identified friction points in the spare-parts buying experience (5 major friction points).</li>
                  <li>Defined and prioritized product features based on user needs and business requirements.</li>
                  <li>Built the MVP focused on spare-part discovery, inventory visibility, and transaction management.</li>
                  <li>Target users: vehicle/bike owners, mechanics, spare-parts buyers/sellers, local shops, and scrapyard sellers.</li>
                  <li>Implemented a QR-based payment flow with OTP verification for a smoother transaction experience.</li>
                </ul>
              </div>

              {/* 4.3 JobLence */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[11.5px] font-bold text-black">
                    JobLence — Self-Initiated Product Management Case Study
                  </span>
                  <span className="text-[10.5px] font-bold text-black">
                    Mar 2026 – May 2026
                  </span>
                </div>
                <div className="text-[10.5px] text-neutral-800 mb-0.5 font-sans italic">
                  Product Manager (Independent Prototype)
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug">
                  <li>Identified job-search friction faced by students and early-career candidates when navigating large numbers of job listings.</li>
                  <li>Designed a job discovery experience focused on relevant opportunities and simplified search.</li>
                  <li>Defined core MVP features around job search, filtering, and relevance.</li>
                </ul>
              </div>

              {/* 4.4 Mango Farmer Token System */}
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[11.5px] font-bold text-black">
                    Mango Farmer Token System
                  </span>
                  <span className="text-[10.5px] font-bold text-black">
                    2026 Harvest Season
                  </span>
                </div>
                <div className="text-[10.5px] text-neutral-800 mb-0.5 font-sans italic">
                  Product Prototype | Food & Industries Department — Mango Procurement & Processing Operations
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug">
                  <li>Identified the need for a more organized token and queue-management process between mango farmers and factory staff.</li>
                  <li>Designed an app-based workflow to simplify token management and improve process visibility for farmers.</li>
                  <li>Conducted 3-4 site visits and interviewed 10-12 farmers to understand their challenges and needs.</li>
                  <li>Focused on a simple user experience suitable for users with varying levels of technical familiarity.</li>
                </ul>
              </div>

              {/* 4.5 CashKaro Product Teardown */}
              <div className="mb-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[11.5px] font-bold text-black">
                    CashKaro Product Teardown
                  </span>
                  <span className="text-[10.5px] font-bold text-black">
                    Feb 2026 – Mar 2026
                  </span>
                </div>
                <div className="text-[10.5px] text-neutral-800 mb-0.5 font-sans italic">
                  Self-Initiated Product Management Case Study
                </div>
                <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug">
                  <li>Analyzed the product and user flow to understand how it drives user acquisition and conversion.</li>
                  <li>Proposed product-level improvements to enhance discovery, offers, and user engagement.</li>
                  <li>Structured recommendations using observation, problem framing, hypothesis, proposed solution, and expected impact.</li>
                </ul>
              </div>

            </div>

            {/* 5. EDUCATION */}
            <div className="mb-2.5">
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black font-sans">
                EDUCATION
              </div>
              
              <div className="space-y-1.5 text-[10.5px] sm:text-[11px]">
                {/* The Apollo University */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-black">The Apollo University</div>
                    <div className="text-black font-sans">B.Tech in Computer Science & Engineering</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-black">Sept 2022 – Apr 2026</div>
                    <div className="font-bold text-black font-sans">CGPA: 7.17</div>
                  </div>
                </div>

                {/* Govt. Jr. College */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-black">Govt. Jr. College, Vadamalapet</div>
                    <div className="text-black font-sans">Intermediate</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-black">Jun 2020 – May 2022</div>
                    <div className="text-black font-sans">542/1000 (54.2%)</div>
                  </div>
                </div>

                {/* Camford English High School */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-black">Camford English High School, Chittoor</div>
                    <div className="text-black font-sans">SSC</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-black">Jun 2018 – Mar 2020</div>
                    <div className="text-black font-sans">416/600 (69.00%)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. LANGUAGES KNOWN */}
            <div className="mb-2.5">
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black font-sans">
                LANGUAGES KNOWN
              </div>
              <div className="text-[10.5px] sm:text-[11px] text-black">
                English • Telugu • Hindi • Tamil
              </div>
            </div>

            {/* 7. CLUBS & LEADERSHIP */}
            <div className="mb-2.5">
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black font-sans">
                CLUBS & LEADERSHIP
              </div>
              <div className="space-y-1.5 text-[10.5px] sm:text-[11px] text-black">
                <div>
                  <div className="font-bold text-black">
                    NSS (2022 – 2026) — Coordinator & Member
                  </div>
                  <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug mt-0.5">
                    <li>Led student groups in community outreach and environmental campaigns.</li>
                    <li>Facilitated collaboration between university administration and student volunteers.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-black">
                    Echo Club (2024 – 2025) — Member
                  </div>
                  <ul className="list-disc list-outside ml-3.5 text-[10px] sm:text-[10.5px] text-black space-y-0.5 leading-snug mt-0.5">
                    <li>Participated in sustainability initiatives and eco-friendly campus activities.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. CERTIFICATIONS */}
            <div>
              <div className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1 text-black font-sans">
                CERTIFICATIONS
              </div>
              <div className="space-y-0.5 text-[10px] sm:text-[10.5px] text-black">
                <div className="flex justify-between items-baseline">
                  <span>• Product Management Professional Certificate (LinkedIn Learning)</span>
                  <span className="font-bold text-black shrink-0 ml-2">May 27, 2026</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>• IBM Data Fundamentals</span>
                  <span className="font-bold text-black shrink-0 ml-2">Dec 2025</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>• Acquiring Data – AI Fundamentals</span>
                  <span className="font-bold text-black shrink-0 ml-2">Nov 2024</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>• Google Cloud Computing Foundations</span>
                  <span className="font-bold text-black shrink-0 ml-2">Dec 2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
