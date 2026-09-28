/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WorkPage() {
  const projects = [
    {
      id: "agentroomai",
      number: "01",
      title: "AgentRoomAI",
      subtitle: "Making WhatsApp ordering easier to handle",
      category: "AI Product · Conversational Experience · Workflow Automation",
      badge: "Internship Project",
      problem: "Customers don't always place orders in a clean or predictable format, leading to incomplete orders, delayed confirmations, and heavy manual handling.",
      myContribution: "Customer problem identification, conversation flow design, customer intent, confirmation logic, and edge-case handling.",
      focusAreas: [
        "Customer problem identification",
        "Conversation flow design",
        "Customer intent classification",
        "Confirmation logic & state tracking",
        "Edge cases & ambiguous inputs",
        "Workflow automation & prompt iteration"
      ],
      link: "/work/agentroomai"
    },
    {
      id: "sparexchange",
      number: "02",
      title: "SpareXChange",
      subtitle: "Finding automobile spare parts without fragmented search",
      category: "Consumer Product · Marketplace · Product Discovery",
      badge: "Self-Initiated Product Project",
      problem: "Finding automobile spare parts is fragmented by unclear availability, condition uncertainty, and a lack of buyer-seller trust.",
      myContribution: "Market exploration, user journey mapping, initial product scope definition, and OTP/QR verified payment prototype.",
      focusAreas: [
        "Spare-part discovery & fitment validation",
        "Dual-sided availability mapping",
        "Marketplace trust & verification mechanisms",
        "Transaction experience & payment escrow handoff",
        "Initial product scoping & prioritization",
        "Interactive prototype testing"
      ],
      link: "/work/sparexchange"
    },
    {
      id: "farmer-token",
      number: "03",
      title: "Farmer Token",
      subtitle: "On-ground field research before designing product solutions",
      category: "Field Research · Product Discovery · Workflow Design",
      badge: "Field User Research & Concept",
      problem: "Farmers endure long, unpredictable queues and manual paperwork at procurement centers without visibility into intake status.",
      myContribution: "On-ground field research at market yards, observation of the queue workflow, direct farmer conversations, and token concept.",
      focusAreas: [
        "Contextual field observation at procurement centers",
        "Direct farmer conversations & pain-point discovery",
        "End-to-end journey mapping from sunrise queue to weighbridge",
        "Root cause analysis of intake bottlenecks",
        "Product concept for low-friction mobile queue tokens"
      ],
      link: "/research/farmer-token"
    },
    {
      id: "joblence",
      number: "04",
      title: "JobLence",
      subtitle: "Surfacing relevant opportunities based on applicant background",
      category: "Job Discovery · Search Experience · Product Concept",
      badge: "Self-Initiated Product Project",
      problem: "Early-career applicants face information overload and lack of clarity on whether their background actually matches job requirements.",
      myContribution: "Discovery friction analysis, resume-based match mapping, and transparent qualification filtering prototype.",
      focusAreas: [
        "Job-search friction & information overload analysis",
        "Search relevance scoping for early-career candidates",
        "Resume-to-requirement match flow mapping",
        "Initial product scope definition",
        "Interactive candidate search prototype"
      ],
      link: "/work/joblence"
    }
  ];

  return (
    <div className="w-full bg-bg py-12 sm:py-20 md:py-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-10 sm:mb-16">
          <div className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-bold mb-2">
            V. ESSESSVI • Product Manager | AI Product & Automation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4 uppercase">
            Selected Work
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-sans text-text-main/75 max-w-2xl leading-relaxed">
            A selection of products and projects where I explored user problems, product decisions, workflows, and technology.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="p-5 sm:p-8 md:p-10 bg-white border border-border shadow-xs hover:border-brand/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border/80 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-mono font-bold text-brand">
                      {project.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#B87333]">
                      {project.title}
                    </h2>
                    <span className="px-2 py-0.5 bg-bg border border-border text-[11px] font-sans font-semibold text-text-main/70">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-sans font-bold text-brand mb-1">
                    {project.subtitle}
                  </p>
                  <span className="text-xs font-sans text-text-main/60 block">
                    {project.category}
                  </span>
                </div>

                <Link
                  to={project.link}
                  className="w-full md:w-auto justify-center px-5 py-3 md:py-2.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors inline-flex items-center gap-2 shrink-0 self-start md:self-auto cursor-pointer shadow-xs"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Problem & Contribution */}
              <div className="space-y-4 mb-6 text-sm font-sans">
                <div className="p-4 bg-bg border border-border">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-text-main/60 block mb-1">
                    Problem:
                  </span>
                  <p className="text-text-main/85 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 bg-brand/5 border border-brand/20">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-brand block mb-1">
                    My Contribution:
                  </span>
                  <p className="text-text-main/85 leading-relaxed">
                    {project.myContribution}
                  </p>
                </div>
              </div>

              {/* Detailed Focus Areas */}
              <div>
                <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-text-main/50 mb-3">
                  Focus Areas & Product Execution:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-sans text-text-main/80">
                  {project.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-bg border border-border/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
