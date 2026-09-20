/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Compass, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Search,
  Filter,
  Users,
  Lightbulb,
  SplitSquareVertical,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function SelectedWork() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<'agentroom' | 'sparexchange' | 'joblence' | null>('agentroom');

  const scrollToResearch = () => {
    const el = document.getElementById('research');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="bg-bg py-24 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Selected Work
          </h2>
          <p className="text-text-main/70 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            A selection of products and projects where I explored real problems, user needs, product decisions, and technology.
          </p>
        </div>

        {/* 4 Projects Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 01: AgentRoomAI */}
          <div 
            onClick={() => setSelectedCaseStudy('agentroom')}
            className={`p-7 border transition-all cursor-pointer bg-white ${
              selectedCaseStudy === 'agentroom' 
                ? 'border-brand ring-1 ring-brand shadow-sm' 
                : 'border-border hover:border-text-main/40'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                01 — Case Study
              </span>
              <span className="text-[11px] font-sans px-2.5 py-0.5 bg-bg border border-border text-text-main/70 font-medium">
                Intern AI Workflow Engineer
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-black text-[#B87333] mb-1.5">
              AgentRoomAI
            </h3>
            
            <p className="text-xs font-sans font-semibold text-brand mb-3 uppercase tracking-wider">
              AI / Conversational Experience / Workflow Automation
            </p>

            <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-6">
              An AI-powered WhatsApp ordering experience designed to simplify customer interactions and reduce repetitive manual handling.
            </p>

            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
              <span className="text-text-main/60">
                Key skills: <strong className="text-text-main font-semibold">Conversational UX · Intent Modeling · Edge Cases</strong>
              </span>
              <button className="text-brand font-bold inline-flex items-center gap-1 group">
                Read Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 02: SpareXChange */}
          <div 
            onClick={() => setSelectedCaseStudy('sparexchange')}
            className={`p-7 border transition-all cursor-pointer bg-white ${
              selectedCaseStudy === 'sparexchange' 
                ? 'border-brand ring-1 ring-brand shadow-sm' 
                : 'border-border hover:border-text-main/40'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                02 — Case Study
              </span>
              <span className="text-[11px] font-sans px-2.5 py-0.5 bg-bg border border-border text-text-main/70 font-medium">
                Product Lead & Prototype
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-black text-[#B87333] mb-1.5">
              SpareXChange
            </h3>
            
            <p className="text-xs font-sans font-semibold text-brand mb-3 uppercase tracking-wider">
              Consumer Product / Marketplace / Trust Experience
            </p>

            <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-6">
              A peer-to-peer automotive spare-parts marketplace concept designed around buyer-seller trust, discovery, and verified condition handoffs.
            </p>

            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
              <span className="text-text-main/60">
                Key skills: <strong className="text-text-main font-semibold">Marketplace Discovery · User Journeys · MVP Prioritization</strong>
              </span>
              <button className="text-brand font-bold inline-flex items-center gap-1 group">
                Read Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 03: Farmer Token */}
          <div 
            onClick={scrollToResearch}
            className="p-7 border border-border bg-white hover:border-brand/60 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                03 — Field User Research
              </span>
              <span className="text-[11px] font-sans px-2.5 py-0.5 bg-brand/10 text-brand font-semibold rounded-full">
                Primary Field Inquiries
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-black text-[#B87333] mb-1.5">
              Farmer Token
            </h3>
            
            <p className="text-xs font-sans font-semibold text-brand mb-3 uppercase tracking-wider">
              Field Research / Contextual Observation / Workflow Discovery
            </p>

            <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-6">
              On-ground contextual research and user conversations at agricultural market yards, turning observation of physical queue friction into a digital token concept.
            </p>

            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
              <span className="text-text-main/60">
                Key skills: <strong className="text-text-main font-semibold">Field Observation · User Inquiries · Workflow Mapping</strong>
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToResearch();
                }} 
                className="text-brand font-bold inline-flex items-center gap-1 group"
              >
                Go to Research Section <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 04: JobLence */}
          <div 
            onClick={() => setSelectedCaseStudy('joblence')}
            className={`p-7 border transition-all cursor-pointer bg-white ${
              selectedCaseStudy === 'joblence' 
                ? 'border-brand ring-1 ring-brand shadow-sm' 
                : 'border-border hover:border-text-main/40'
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                04 — Concept Case Study
              </span>
              <span className="text-[11px] font-sans px-2.5 py-0.5 bg-bg border border-border text-text-main/70 font-medium">
                Product Concept & Prototype
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-black text-[#B87333] mb-1.5">
              JobLence
            </h3>
            
            <p className="text-xs font-sans font-semibold text-brand mb-3 uppercase tracking-wider">
              Product Concept / Job Discovery / Search Friction
            </p>

            <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-6">
              A job discovery product concept designed to reduce search friction, irrelevant listings, and information overload for early-career applicants.
            </p>

            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
              <span className="text-text-main/60">
                Key skills: <strong className="text-text-main font-semibold">Search Relevance · Filtering · MVP Scoping</strong>
              </span>
              <button className="text-brand font-bold inline-flex items-center gap-1 group">
                Read Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* EXPANDED DETAILED CASE STUDIES ACCORDING TO USER'S EXACT SPECIFICATIONS */}

        {/* 1. AGENTROOMAI DETAILED CASE STUDY */}
        {selectedCaseStudy === 'agentroom' && (
          <div className="bg-white border border-border p-8 md:p-12 shadow-xs transition-all mb-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1 block">
                  AI Product Case Study
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-[#B87333]">
                  AgentRoomAI: Conversational Ordering Experience
                </h3>
                <p className="text-text-main/70 font-sans text-sm mt-1">
                  Role: Intern AI Workflow Engineer · Focus: Customer friction, dialog flow, and error recovery
                </p>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  WhatsApp Business API
                </span>
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  OpenAI
                </span>
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  n8n Workflows
                </span>
              </div>
            </div>

            {/* Story Flow:
                Problem → Existing Customer Experience → User/Customer Friction → Conversation Flow → Product Decisions → AI Solution → Edge Cases → Implementation → Learning */}
            <div className="space-y-12">
              
              {/* Problem */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  01. The Problem
                </h4>
                <h5 className="text-xl font-display font-bold text-[#B87333] mb-3">
                  Ordering via messaging apps breaks down when messages are ambiguous and manual
                </h5>
                <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
                  Customers increasingly prefer placing direct orders through messaging platforms like WhatsApp rather than downloading a standalone mobile app or navigating complex browser checkout carts. However, businesses handling these orders manually struggled with delayed responses, messy conversation threads, and miscommunication between customers and staff.
                </p>
              </div>

              {/* Existing Customer Experience */}
              <div className="p-6 bg-bg border border-border">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/60 mb-2">
                  02. Existing Customer Experience
                </h4>
                <div className="space-y-3 text-xs md:text-sm font-sans text-text-main/80">
                  <p>
                    In the previous unautomated experience, a customer sent an unstructured message like <em>"Hey, I need 2 coffees and a sandwich"</em>. If the staff was busy, the message sat unread for 20 minutes.
                  </p>
                  <p>
                    When staff finally replied, they had to ask 3 separate follow-up questions: <em>"What kind of coffee? Hot or cold? Delivery address?"</em> The conversation stretched across hours, leading customers to abandon their order or order elsewhere.
                  </p>
                </div>
              </div>

              {/* User/Customer Friction */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  03. User & Customer Friction Identified
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-border">
                    <div className="font-display font-bold text-sm text-text-main mb-1.5">
                      Incomplete Orders
                    </div>
                    <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                      Customers rarely provided all mandatory parameters (quantity, variant, delivery location) in a single message.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-border">
                    <div className="font-display font-bold text-sm text-text-main mb-1.5">
                      Unclear Customer Messages
                    </div>
                    <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                      Casual phrasing, slang, typos, and multi-line item requests confused rule-based keyword bots.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-border">
                    <div className="font-display font-bold text-sm text-text-main mb-1.5">
                      Confirmation Issues
                    </div>
                    <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                      Customers weren't sure if their request was accepted, leading to anxiety and duplicate orders.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-border">
                    <div className="font-display font-bold text-sm text-text-main mb-1.5">
                      Repetitive Support Requests
                    </div>
                    <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                      Basic inquiries ("What's on the menu?", "What are your hours?") clogged the queue for customers ready to pay.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-border">
                    <div className="font-display font-bold text-sm text-text-main mb-1.5">
                      Manual Operator Fatigue
                    </div>
                    <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                      Human staff spent 70% of their day copying and pasting the same introductory menus and pricing details.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-border">
                    <div className="font-display font-bold text-sm text-text-main mb-1.5">
                      Drop-off at Handoff
                    </div>
                    <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                      If the conversational agent failed to understand once, customers frequently stopped responding entirely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversation Flow */}
              <div className="p-6 bg-bg border border-border">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/60 mb-3">
                  04. Conversation Flow Design
                </h4>
                <p className="text-xs md:text-sm font-sans text-text-main/80 mb-4 leading-relaxed">
                  Instead of forcing the user into a rigid form or an open-ended chatbot that rambles, I designed a progressive dialog flow:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-sans">
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">1. Greet & Identify</span>
                    <p className="text-text-main/70">Acknowledge customer immediately and classify intent: New Order, Inquiry, or Order Status.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">2. Extract Entities</span>
                    <p className="text-text-main/70">Parse items and quantities. Identify missing fields (e.g. missing spice level or address).</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">3. Targeted Follow-up</span>
                    <p className="text-text-main/70">Prompt <em>only</em> for the missing parameter with quick-reply buttons or plain suggestions.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">4. Structured Confirmation</span>
                    <p className="text-text-main/70">Send a clean summary receipt with an explicit "Confirm / Edit" prompt before dispatch.</p>
                  </div>
                </div>
              </div>

              {/* Product Decisions */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  05. Key Product Decisions
                </h4>
                <div className="space-y-3 text-xs md:text-sm font-sans text-text-main/80">
                  <div className="p-4 bg-white border border-border flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-text-main">Decision 1: Never leave confirmation open to interpretation.</strong>
                      <p className="text-text-main/70 mt-0.5">The AI cannot assume an order is finalized just because all items were mentioned. It must generate an itemized invoice card and require a clear one-tap user confirmation.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-border flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-text-main">Decision 2: Constrain AI responses to short, scannable WhatsApp snippets.</strong>
                      <p className="text-text-main/70 mt-0.5">LLMs tend to give polite but paragraph-length replies. I enforced strict prompt rules restricting outputs to bulleted summaries under 50 words to avoid cognitive overload on mobile screens.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-border flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-text-main">Decision 3: Seamless fallback to human operator.</strong>
                      <p className="text-text-main/70 mt-0.5">If the customer expresses frustration or the model confidence falls below a threshold twice, the conversation instantly escalates to a human with the parsed summary attached.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Solution & Edge Cases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-bg border border-border">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                    06. The AI Solution
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed mb-3">
                    Used an LLM primarily for natural language entity extraction (parsing typos, regional dish synonyms, and messy lists into clean JSON) combined with a deterministic rule engine for pricing, stock validation, and confirmation state machines.
                  </p>
                  <p className="text-xs font-sans text-text-main/70">
                    This hybrid approach ensured the interface felt natural and forgiving to chat with, while business logic remained strictly accurate and auditable.
                  </p>
                </div>

                <div className="p-6 bg-bg border border-border">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                    07. Edge Cases Addressed
                  </h4>
                  <ul className="space-y-2 text-xs font-sans text-text-main/80">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                      <span><strong>Mid-order context switching:</strong> Customer asks "Do you have vegan options?" in the middle of choosing items without resetting the cart.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                      <span><strong>Partial modifications:</strong> Customer saying "Make one of them cold instead" correctly updates only the referenced item.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                      <span><strong>Rapid duplicate messages:</strong> Handled debounce logic to prevent triggering multiple simultaneous AI workflows.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Implementation & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/60 mb-2">
                    08. Technical Implementation
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed">
                    Orchestrated workflows using <strong>n8n</strong> connected to the <strong>WhatsApp Business API</strong> and <strong>OpenAI</strong> models. Maintained order state and customer sessions through webhooks and lightweight database storage.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                    09. Key Product Learnings
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed">
                    Great AI products are not defined by prompt cleverness; they are defined by understanding user friction, structuring the conversation flow, gracefully handling when things go wrong, and knowing exactly when deterministic rules are safer than generative AI.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. SPAREXCHANGE DETAILED CASE STUDY */}
        {selectedCaseStudy === 'sparexchange' && (
          <div className="bg-white border border-border p-8 md:p-12 shadow-xs transition-all mb-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1 block">
                  Consumer Marketplace Case Study
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-[#B87333]">
                  SpareXChange: Automotive Parts Marketplace Concept
                </h3>
                <p className="text-text-main/70 font-sans text-sm mt-1">
                  Role: Product Lead & Prototype · Focus: Consumer problem, marketplace trust, and MVP prioritization
                </p>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  Two-Sided Marketplace
                </span>
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  Escrow Trust Flow
                </span>
              </div>
            </div>

            {/* Structure:
                Problem → Target Users → Research → User Insights → User Journey → Pain Points → Product Opportunities → MVP → Feature Prioritization → Prototype → Product Decisions → Learnings */}
            <div className="space-y-12">
              
              {/* Problem */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  01. The Problem
                </h4>
                <h5 className="text-xl font-display font-bold text-[#B87333] mb-3">
                  Sourcing genuine used automobile spare parts is fragmented, unverified, and high-risk
                </h5>
                <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
                  When vehicle owners need replacement parts (headlight assemblies, mirrors, alternators, interior trims), authorized dealership parts are prohibitively expensive or have 4–6 week lead times. Meanwhile, local scrap yards and independent mechanics sit on viable parts but have zero digital discovery. Buyers fear receiving counterfeit or non-working parts with no refund recourse.
                </p>
              </div>

              {/* Target Users */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-bg border border-border">
                  <span className="text-xs font-sans font-bold text-brand uppercase tracking-wider block mb-1">User Segment 1</span>
                  <h6 className="font-display font-bold text-base text-[#B87333] mb-2">Car Owners & DIY Enthusiasts</h6>
                  <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                    Cost-conscious vehicle owners seeking affordable replacement parts. Their primary anxiety is compatibility ("Will this fit my specific car model year?") and functional condition.
                  </p>
                </div>

                <div className="p-5 bg-bg border border-border">
                  <span className="text-xs font-sans font-bold text-brand uppercase tracking-wider block mb-1">User Segment 2</span>
                  <h6 className="font-display font-bold text-base text-[#B87333] mb-2">Independent Dismantlers & Local Garages</h6>
                  <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                    Sellers who have inventory sitting on shelves but lack digital storefronts. Their pain is cataloging friction, handling non-serious buyers, and payment collection.
                  </p>
                </div>
              </div>

              {/* Research & User Insights */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  02. Research & Insights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                  <div className="p-4 bg-white border border-border">
                    <strong className="text-text-main block mb-1 text-sm">Trust is the Bottleneck</strong>
                    <p className="text-text-main/70">Buyers will not pay upfront for a used mechanical part without inspecting it or knowing funds can be held safely until fitment is verified.</p>
                  </div>
                  <div className="p-4 bg-white border border-border">
                    <strong className="text-text-main block mb-1 text-sm">Part Matching Complexity</strong>
                    <p className="text-text-main/70">Part names are ambiguous. Sourcing requires exact vehicle make, model, sub-model, and manufacturing year.</p>
                  </div>
                  <div className="p-4 bg-white border border-border">
                    <strong className="text-text-main block mb-1 text-sm">Listing Friction for Sellers</strong>
                    <p className="text-text-main/70">Sellers will abandon a platform that requires filling out 20 detailed specifications per item. Photo upload must be fast.</p>
                  </div>
                </div>
              </div>

              {/* User Journey & Pain Points */}
              <div className="p-6 bg-bg border border-border">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/60 mb-3">
                  03. End-to-End User Journey & Pain Points
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-sans">
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">1. Discovery</span>
                    <p className="text-text-main/70"><strong>Friction:</strong> Keyword search yields hundreds of incompatible parts.</p>
                    <p className="text-text-main/90 mt-1 font-medium"><strong>Solution:</strong> Strict Vehicle Filter (Make, Model, Year) upfront.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">2. Verification</span>
                    <p className="text-text-main/70"><strong>Friction:</strong> Low confidence in seller claims about part wear.</p>
                    <p className="text-text-main/90 mt-1 font-medium"><strong>Solution:</strong> Required standardized condition tags (OEM/Aftermarket, Grade A/B).</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">3. Transaction</span>
                    <p className="text-text-main/70"><strong>Friction:</strong> Fear of online fraud during private person-to-person meetups.</p>
                    <p className="text-text-main/90 mt-1 font-medium"><strong>Solution:</strong> QR-based escrow payment held until physical OTP verification.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-brand block mb-1">4. Resolution</span>
                    <p className="text-text-main/70"><strong>Friction:</strong> Part does not fit upon installation.</p>
                    <p className="text-text-main/90 mt-1 font-medium"><strong>Solution:</strong> Clear return window tied to initial fitment confirmation.</p>
                  </div>
                </div>
              </div>

              {/* MVP & Feature Prioritization */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  04. MVP Definition & Feature Prioritization
                </h4>
                <p className="text-xs md:text-sm font-sans text-text-main/80 mb-4 leading-relaxed">
                  To avoid feature bloat, I evaluated potential capabilities on a Value vs. Complexity matrix:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-4 bg-white border border-border border-l-4 border-l-brand">
                    <strong className="text-text-main block mb-1">In-Scope for MVP (High Value, Essential for Trust)</strong>
                    <ul className="space-y-1.5 text-text-main/70">
                      <li>• Vehicle-specific compatibility filtering</li>
                      <li>• Clean photo-based part listings with condition tiers</li>
                      <li>• Secure QR handoff with OTP escrow confirmation</li>
                      <li>• In-app seller chat for direct fitment clarification</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-border border-l-4 border-l-text-main/30">
                    <strong className="text-text-main block mb-1">Deferred Post-MVP (High Complexity / Premature Optimization)</strong>
                    <ul className="space-y-1.5 text-text-main/70">
                      <li>• Automated computer-vision VIN barcode scanning</li>
                      <li>• Integrated third-party national courier shipping logistics</li>
                      <li>• Algorithmic dynamic price suggestions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Decisions & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                    05. Core Product Decision
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed">
                    Prioritized <strong>transaction safety over transaction speed</strong>. Instead of direct wallet-to-wallet transfers, requiring an OTP exchange at the point of physical handover eliminated the number one friction point: fear of buying damaged goods.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/60 mb-2">
                    06. Key Learnings
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed">
                    In marketplace products, supply and demand are only half the battle. If trust does not exist at the point of transaction, no amount of catalog listings will convert users into repeat buyers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. JOBLENCE DETAILED CASE STUDY */}
        {selectedCaseStudy === 'joblence' && (
          <div className="bg-white border border-border p-8 md:p-12 shadow-xs transition-all mb-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1 block">
                  Product Discovery Concept Case Study
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-[#B87333]">
                  JobLence: Job Discovery & Fit Relevance Concept
                </h3>
                <p className="text-text-main/70 font-sans text-sm mt-1">
                  Role: Product Concept & Prototype · Focus: Search friction, relevance filtering, and early-career user needs
                </p>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  Discovery UX
                </span>
                <span className="px-3 py-1 bg-bg border border-border text-text-main/70 text-xs font-sans font-medium">
                  Filtering Logic
                </span>
              </div>
            </div>

            {/* Structure:
                Problem → User → Existing Friction → Product Opportunity → MVP → Prototype → Learnings */}
            <div className="space-y-12">
              
              {/* Problem */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  01. The Problem
                </h4>
                <h5 className="text-xl font-display font-bold text-[#B87333] mb-3">
                  Job searching for early-career applicants is filled with irrelevant listings and opaque criteria
                </h5>
                <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
                  Traditional job boards prioritize keyword matches and sponsored recruiter posts over true candidate-job fit. Candidates with 0–2 years of experience spend hours scrolling through listings labeled "Entry-Level" that secretly require 4+ years of specialized stack experience, causing search fatigue and spray-and-pray application behavior.
                </p>
              </div>

              {/* Target User */}
              <div className="p-6 bg-bg border border-border">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/60 mb-2">
                  02. Target User
                </h4>
                <div className="text-xs md:text-sm font-sans text-text-main/80 space-y-2 leading-relaxed">
                  <p>
                    <strong>Recent graduates & early-career professionals</strong> searching for junior PM, developer, or analyst roles.
                  </p>
                  <p>
                    They are motivated but overwhelmed by jargon-heavy job descriptions, ghost postings, and zero feedback on why their profile did or didn't align with a listing before they spent 45 minutes applying.
                  </p>
                </div>
              </div>

              {/* Existing Friction */}
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  03. Existing Friction Points
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                  <div className="p-4 bg-white border border-border">
                    <strong className="text-text-main block mb-1 text-sm">Title Inflation & Deceptive Tags</strong>
                    <p className="text-text-main/70">Listings marked "Junior" demanding 5 years of production experience inside the fine print.</p>
                  </div>
                  <div className="p-4 bg-white border border-border">
                    <strong className="text-text-main block mb-1 text-sm">Information Overload</strong>
                    <p className="text-text-main/70">Wall-of-text job descriptions hiding the 3 actually essential requirements under generic boilerplate.</p>
                  </div>
                  <div className="p-4 bg-white border border-border">
                    <strong className="text-text-main block mb-1 text-sm">The "Resume Black Hole"</strong>
                    <p className="text-text-main/70">Applicants submit dozens of resumes blindly without knowing if their background meets the core expectations.</p>
                  </div>
                </div>
              </div>

              {/* Product Opportunity */}
              <div className="p-6 bg-brand/5 border border-brand/20">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  04. Product Opportunity
                </h4>
                <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-3">
                  Shift the discovery model from <strong>keyword search to transparent qualification breakdown</strong>.
                </p>
                <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                  Instead of forcing the user to read 1,000 words per posting, surface upfront: <em>(1) Hard requirements vs. Nice-to-haves, (2) Years of experience reality check, and (3) Alignment score against candidate inputs.</em>
                </p>
              </div>

              {/* MVP & Prototype */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-bg border border-border">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333] mb-2">
                    05. MVP Scope
                  </h4>
                  <ul className="space-y-2 text-xs font-sans text-text-main/80">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1 shrink-0"></span>
                      <span><strong>Scannable Role Cards:</strong> Clean cards displaying essential competencies, salary range, and true experience tier.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1 shrink-0"></span>
                      <span><strong>Honest Experience Filter:</strong> Strict filtering that parses the body text, filtering out disguised senior roles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1 shrink-0"></span>
                      <span><strong>Skill Checklist Check:</strong> Candidate clicks checkmarks for their core skills and sees an instant compatibility indicator.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-bg border border-border">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333] mb-2">
                    06. Prototype Feedback & Verification
                  </h4>
                  <p className="text-xs font-sans text-text-main/70 leading-relaxed mb-3">
                    Created an interactive prototype demonstrating the clean card architecture and upfront requirement breakdowns.
                  </p>
                  <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                    Testing with peers confirmed that seeing hard blockers upfront saved significant time and prevented applicant burnout.
                  </p>
                </div>
              </div>

              {/* Learnings */}
              <div className="border-t border-border pt-8">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-2">
                  07. Key Learnings
                </h4>
                <p className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed">
                  Discovery products often fail because they optimize for quantity of listings rather than relevance. When users are stressed, simplifying choice architecture and respecting their time creates far stronger retention than endless scrolling.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
