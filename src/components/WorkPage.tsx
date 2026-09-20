/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MessageSquare, ShoppingBag, Briefcase } from 'lucide-react';

export default function WorkPage() {
  const projects = [
    {
      id: "agentroomai",
      number: "01",
      title: "AgentRoomAI",
      subtitle: "Making WhatsApp ordering easier to handle",
      category: "AI Product · Conversational Experience · Workflow Automation",
      badge: "Internship Project",
      description: "Customers don't always place orders in a clean or predictable format. I worked on a conversational workflow designed to understand customer messages, identify order details, handle incomplete information, and move the conversation toward confirmation.",
      contributions: [
        "Customer problem identification",
        "Conversation flow design",
        "Customer intent classification",
        "Confirmation logic & state tracking",
        "Edge cases & ambiguous inputs",
        "AI response handling",
        "Workflow automation",
        "Iteration based on customer behavior"
      ],
      link: "/work/agentroomai"
    },
    {
      id: "sparexchange",
      number: "02",
      title: "SpareXChange",
      subtitle: "Finding the right spare part shouldn't require searching everywhere.",
      category: "Consumer Product · Marketplace · Product Discovery",
      badge: "Product Concept & Prototype",
      description: "I explored the problem of finding automobile spare parts when availability, condition, price, and trust are unclear. The product concept brings first-hand and second-hand parts into one marketplace and focuses on helping users discover available parts with more confidence.",
      contributions: [
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
      subtitle: "I went to the market before designing the product.",
      category: "Field Research · Product Discovery · Workflow Design",
      badge: "Field User Research & Concept",
      description: "The idea started with a workflow problem, but I didn't want to design the solution from assumptions. I went to the market, observed how the process worked, and spoke directly with farmers about their experience.",
      contributions: [
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
      subtitle: "Applying to more jobs doesn't necessarily mean finding more relevant jobs.",
      category: "Job Discovery · Search Experience · Product Concept",
      badge: "Product Concept & Prototype",
      description: "I explored the problem of job seekers having to search through large numbers of openings without knowing which opportunities actually match their background. JobLence is a product concept that starts with the user's resume and explores how relevant opportunities could be surfaced more clearly.",
      contributions: [
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
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-16">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            Selected Work
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Work
          </h1>
          <p className="text-base md:text-lg font-sans text-text-main/75 max-w-2xl leading-relaxed">
            Product work across AI experiences, consumer products, marketplace concepts, and job discovery.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="p-8 md:p-10 bg-white border border-border shadow-xs hover:border-brand/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border/80 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-brand">
                      {project.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-[#B87333]">
                      {project.title}
                    </h2>
                    <span className="px-2.5 py-0.5 bg-bg border border-border text-[11px] font-sans font-semibold text-text-main/70">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-base font-sans font-bold text-brand mb-1">
                    {project.subtitle}
                  </p>
                  <span className="text-xs font-sans text-text-main/60">
                    {project.category}
                  </span>
                </div>

                <Link
                  to={project.link}
                  className="px-5 py-2.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors inline-flex items-center gap-2 shrink-0 self-start cursor-pointer shadow-xs"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Contributions */}
              <div>
                <h3 className="text-xs font-sans font-bold uppercase tracking-wider text-[#B87333]/50 mb-3">
                  My Contribution & Focus Areas:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-sans text-text-main/80">
                  {project.contributions.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-bg border border-border/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                      <span>{c}</span>
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
