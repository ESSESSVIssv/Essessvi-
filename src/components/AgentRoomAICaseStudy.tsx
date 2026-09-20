/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare, AlertCircle, CheckCircle2, Cpu, Sparkles, HelpCircle } from 'lucide-react';

export default function AgentRoomAICaseStudy() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-text-main/70 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Case Study Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-sans uppercase tracking-widest text-brand font-bold">
              Project Case Study
            </span>
            <span className="text-text-main/40">·</span>
            <span className="text-xs font-sans text-text-main/60">
              AI Product · Conversational Experience · Workflow Automation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-3">
            AgentRoomAI
          </h1>
          <p className="text-xl md:text-2xl font-display font-bold text-brand mb-6">
            Making WhatsApp ordering easier to handle
          </p>

          <p className="text-base font-sans text-text-main/80 leading-relaxed max-w-3xl">
            Customers don't always place orders in a clean or predictable format. I worked on a conversational workflow designed to understand customer messages, identify order details, handle incomplete information, and move the conversation toward confirmation.
          </p>
        </div>

        {/* Section 01 — Problem */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            01 — Problem
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            The Customer & Order Handling Problem
          </h2>
          <div className="space-y-4 text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
            <p>
              When customers place orders over WhatsApp, they rarely send complete, structured text. Instead, they send fragmented messages like "need 2 large teas and some samosas deliver soon", followed by separate messages with addresses, sudden additions, or vague timing requirements.
            </p>
            <p>
              For operators, this creates constant cognitive strain. Human staff had to repeatedly re-read message histories, manually ask for missing delivery addresses, calculate item totals, and manually log orders into backend spreadsheets while dealing with ongoing message delays.
            </p>
          </div>
        </section>

        {/* Section 02 — Existing Experience */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            02 — Existing Experience
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            How a Typical Interaction Unfolded
          </h2>
          <div className="p-6 bg-white border border-border space-y-3 font-sans text-xs md:text-sm">
            <div className="p-3 bg-bg border border-border/80">
              <strong className="text-text-main block mb-0.5">1. Unstructured Inbound:</strong>
              <span className="text-text-main/70">Customer sends a freeform request missing quantity, variant, or delivery location.</span>
            </div>
            <div className="p-3 bg-bg border border-border/80">
              <strong className="text-text-main block mb-0.5">2. Manual Clarification Delay:</strong>
              <span className="text-text-main/70">Operator is busy with other chats, so the customer waits several minutes just for a basic follow-up question.</span>
            </div>
            <div className="p-3 bg-bg border border-border/80">
              <strong className="text-text-main block mb-0.5">3. Multi-turn Back-and-Forth:</strong>
              <span className="text-text-main/70">3 to 5 back-and-forth messages are required just to clarify basic line items.</span>
            </div>
            <div className="p-3 bg-bg border border-border/80">
              <strong className="text-text-main block mb-0.5">4. Confirmation Ambiguity:</strong>
              <span className="text-text-main/70">Customer is unsure if the kitchen actually started preparation or if the message was missed.</span>
            </div>
          </div>
        </section>

        {/* Section 03 — Customer Friction */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            03 — Customer Friction
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Key Breakdown Points Identified
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-border">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-text-main mb-1.5">
                <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                Incomplete Orders
              </div>
              <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                Missing variants (sugar level, size, spice preference) causing order confusion and delayed prep.
              </p>
            </div>

            <div className="p-5 bg-white border border-border">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-text-main mb-1.5">
                <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                Unclear Customer Messages
              </div>
              <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                Slang, abbreviations, and sentence fragments that standard rule-based chatbots failed to comprehend.
              </p>
            </div>

            <div className="p-5 bg-white border border-border">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-text-main mb-1.5">
                <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                Confirmation Issues
              </div>
              <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                No explicit line-item recap, leading customers to repeatedly send "Is my order accepted?" messages.
              </p>
            </div>

            <div className="p-5 bg-white border border-border">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-text-main mb-1.5">
                <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                Manual Operator Overload
              </div>
              <p className="text-xs font-sans text-text-main/70 leading-relaxed">
                Operators retyping details into backend sheets created transcription errors and response bottlenecks during peak hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 04 — Conversation Flow */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            04 — Conversation Flow
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            The Redesigned Conversational Journey
          </h2>
          <div className="p-6 bg-white border border-border font-sans text-xs md:text-sm space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                1
              </div>
              <div>
                <strong className="text-text-main block">Inbound Intent & Entity Capture:</strong>
                <span className="text-text-main/70">Parse item names, quantities, and user context directly from conversational freeform text.</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                2
              </div>
              <div>
                <strong className="text-text-main block">Targeted Slot Clarification:</strong>
                <span className="text-text-main/70">Ask ONLY for the missing attributes (e.g., "Would you like regular or masala chai?") without restarting the whole prompt.</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                3
              </div>
              <div>
                <strong className="text-text-main block">Structured Summary & Confirmation Gate:</strong>
                <span className="text-text-main/70">Generate an itemized summary with total cost, prompting explicit one-tap confirmation ("Yes, confirm" / "Edit").</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                4
              </div>
              <div>
                <strong className="text-text-main block">Order Dispatch & Live State:</strong>
                <span className="text-text-main/70">Automatically log order into backend inventory and send tracking acknowledgement to customer.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05 — Product Thinking */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            05 — Product Thinking
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Key Decisions & Trade-offs
          </h2>
          <div className="space-y-4 text-sm font-sans text-text-main/80 leading-relaxed">
            <div className="p-5 bg-white border border-border">
              <h3 className="font-display font-bold text-base text-[#B87333] mb-1.5">
                Balancing Flexibility vs. Structure
              </h3>
              <p>
                Pure rule-based chatbots feel rigid and frustrating, while completely unconstrained LLM chat leads to hallucinations and endless chatter. I designed a hybrid approach: freeform natural language understanding on input, but deterministic, structured confirmation cards before any order is finalized.
              </p>
            </div>

            <div className="p-5 bg-white border border-border">
              <h3 className="font-display font-bold text-base text-[#B87333] mb-1.5">
                Progressive Disclosure for Missing Slots
              </h3>
              <p>
                Instead of bombarding the customer with a 4-question form, the conversation asks for missing slots incrementally based on priority (Item Details → Delivery Address → Payment Method).
              </p>
            </div>
          </div>
        </section>

        {/* Section 06 — AI Solution */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            06 — AI Solution
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            How AI Supports the Experience
          </h2>
          <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed mb-4">
            AI was utilized specifically where deterministic rules struggle: understanding natural language variance, extracting items and quantities from mixed sentences, and maintaining context across partial corrections.
          </p>
          <div className="p-5 bg-bg border border-border text-xs md:text-sm font-sans space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>Extracts structured JSON entities from informal WhatsApp phrasing.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>Handles sudden item adjustments mid-conversation without wiping previous selections.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>Feeds clean data into deterministic validation logic for prices and stock checks.</span>
            </div>
          </div>
        </section>

        {/* Section 07 — Workflow */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            07 — Workflow
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            The Simplified Automated Workflow
          </h2>
          <div className="p-6 bg-white border border-border text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-sans font-semibold text-text-main">
              <span className="px-3 py-2 bg-bg border border-border">WhatsApp Message</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Intent & Entity Parser</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Slot Validation</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Recap Card</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-brand text-white">Order Confirmed</span>
            </div>
          </div>
        </section>

        {/* Section 08 — Edge Cases */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            08 — Edge Cases
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Accounting for Unpredictable Interactions
          </h2>
          <div className="space-y-3 text-xs md:text-sm font-sans">
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Topic Switches Mid-Order:</strong>
              <span className="text-text-main/70">Customer asks "What time do you close?" while in the middle of choosing items. The system answers the inquiry while preserving current order state.</span>
            </div>
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Item Out of Stock:</strong>
              <span className="text-text-main/70">Rather than failing silently, the bot notifies the user immediately and suggests closest available alternatives.</span>
            </div>
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Rapid Duplicate Messages:</strong>
              <span className="text-text-main/70">Debouncing input events to prevent triggering parallel conflicting AI runs.</span>
            </div>
          </div>
        </section>

        {/* Section 09 — Implementation */}
        <section className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            09 — Implementation
          </div>
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Supporting Technology
          </h2>
          <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-4">
            Technology was chosen to serve the product experience, ensuring low latency and reliable state transitions:
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-sans font-semibold text-text-main">
            <span className="px-3 py-1.5 bg-white border border-border">WhatsApp Business API</span>
            <span className="px-3 py-1.5 bg-white border border-border">n8n Workflow Engine</span>
            <span className="px-3 py-1.5 bg-white border border-border">OpenAI Models</span>
            <span className="px-3 py-1.5 bg-white border border-border">REST Webhooks</span>
          </div>
        </section>

        {/* Section 10 — Learning */}
        <section className="mb-14 p-6 bg-brand/5 border-l-4 border-brand">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
            10 — Learning
          </div>
          <h2 className="text-xl font-display font-bold text-[#B87333] mb-3">
            What I Learned
          </h2>
          <div className="space-y-3 text-sm font-sans text-text-main/80 leading-relaxed">
            <p>
              In conversational AI products, UX is not visual layout—it is conversation pacing, clarity, and error recovery. If a customer is confused by a prompt, they don't click a help button; they simply abandon the chat.
            </p>
            <p>
              Product thinking must define the boundaries: deciding when AI should be autonomous, when deterministic rules must take over, and when human operators need to be seamlessly looped in.
            </p>
          </div>
        </section>

        {/* Next Case Study Navigation */}
        <div className="pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/work"
            className="text-xs font-sans font-bold uppercase tracking-wider text-text-main/60 hover:text-brand transition-colors"
          >
            ← All Work
          </Link>
          <Link
            to="/work/sparexchange"
            className="text-xs font-sans font-bold uppercase tracking-wider text-brand hover:text-text-main inline-flex items-center gap-1.5 transition-colors"
          >
            Next: SpareXChange →
          </Link>
        </div>

      </div>
    </div>
  );
}
