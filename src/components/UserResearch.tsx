/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Clock, 
  Eye, 
  AlertTriangle, 
  Lightbulb, 
  ArrowUpRight,
  ShieldAlert,
  Users,
  CheckCircle2
} from 'lucide-react';

export default function UserResearch() {
  return (
    <section id="research" className="bg-white py-24 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow & Headline */}
        <div className="mb-12">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            Research
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Farmer Token — Field User Research
          </h2>
          <p className="text-text-main/70 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            An on-ground investigation into agricultural procurement workflows. I went directly to the market and stayed there to understand how the existing system works, observing the operational realities and speaking directly with farmers before designing any solution.
          </p>
        </div>

        {/* Position Signals */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border text-xs font-sans font-semibold text-text-main/80">
          <span className="px-3 py-1 bg-bg border border-border">Field Research</span>
          <span className="px-3 py-1 bg-bg border border-border">Contextual Observation</span>
          <span className="px-3 py-1 bg-bg border border-border">User Conversations</span>
          <span className="px-3 py-1 bg-bg border border-border">Workflow Understanding</span>
          <span className="px-3 py-1 bg-bg border border-border">Pain-Point Identification</span>
          <span className="px-3 py-1 bg-bg border border-border">Product Opportunity</span>
        </div>

        {/* Key Message Quote Card */}
        <div className="p-6 md:p-8 bg-brand/5 border-l-4 border-brand mb-16">
          <blockquote className="text-lg md:text-xl font-display font-bold text-text-main italic">
            “I went to where the problem actually happens, observed the existing workflow, and spoke directly with users before designing a solution.”
          </blockquote>
          <div className="mt-2 text-xs font-sans uppercase tracking-wider text-text-main/60 font-semibold">
            Contextual Field Study · Agricultural Procurement & Processing Centers
          </div>
        </div>

        {/* 9-Step Case Study Structure */}
        <div className="space-y-16">

          {/* 01 — Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">01</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Context</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Why the real physical environment mattered</p>
            </div>
            <div className="lg:col-span-8 text-sm md:text-base font-sans text-text-main/80 space-y-3 leading-relaxed">
              <p>
                During agricultural harvest intake cycles, procurement centers and processing yards encounter massive bottlenecks. Loaded tractors, trailers, and trucks line up outside factory gates, often causing road-blocking traffic and lengthy delays.
              </p>
              <p>
                To understand why these bottlenecks occurred, I realized desk-based research and assumptions were insufficient. The operational friction—heat, chaotic gate queues, verbal ticket calls, and paper ledgers—can only be understood by physically staying at the market and observing the entire cycle from intake to unload.
              </p>
            </div>
          </div>

          {/* 02 — Field Observation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">02</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Field Observation</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Observing market operations and token/queue management</p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm font-sans text-text-main/80 leading-relaxed">
                While on site, I observed how the market workflow operates and how farmers interact with the existing process:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-bg border border-border hover:border-brand/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-sm md:text-base text-[#B87333]" style={{ color: '#B87333', fontWeight: 700 }}>
                      Idle Queue Congestion
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-text-main/75 leading-relaxed">
                    Vehicles queued outside the gate with no visibility into queue progress. Drivers and farmers spent extended hours waiting under the sun with vehicles idling.
                  </p>
                </div>

                <div className="p-5 bg-bg border border-border hover:border-brand/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-sm md:text-base text-[#B87333]" style={{ color: '#B87333', fontWeight: 700 }}>
                      Manual Token Distribution
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-text-main/75 leading-relaxed">
                    A gatekeeper manually distributed physical paper tokens. Farmers frequently crowded around the gate booth to monitor when their number would be called out.
                  </p>
                </div>

                <div className="p-5 bg-bg border border-border hover:border-brand/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-sm md:text-base text-[#B87333]" style={{ color: '#B87333', fontWeight: 700 }}>
                      Weighbridge Bottlenecks
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-text-main/75 leading-relaxed">
                    Weigh-ins required paper recording in manual physical ledgers. When handwritten numbers were smudged or misread, vehicle entry stalled completely.
                  </p>
                </div>

                <div className="p-5 bg-bg border border-border hover:border-brand/50 transition-colors shadow-xs">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-sm md:text-base text-[#B87333]" style={{ color: '#B87333', fontWeight: 700 }}>
                      Unannounced Stoppages
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-text-main/75 leading-relaxed">
                    When intake boilers or sorting belts hit daily capacity limits, intake halted without warning, leaving remaining queued vehicles stranded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 03 — User Conversations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">03</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">User Conversations</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Direct discussions with farmers on the ground</p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm font-sans text-text-main/80 leading-relaxed">
                I spoke directly with farmers waiting in line to understand their actual experience, frustrations, expectations, and where they struggled with the existing process:
              </p>
              
              <div className="space-y-3 text-xs md:text-sm font-sans">
                <div className="p-4 bg-bg border-l-3 border-brand">
                  <p className="italic text-text-main/90 mb-2">
                    “We start before sunrise without knowing if the factory is even taking loads today. Once we reach the gate, we cannot turn back because the road is blocked by other trucks behind us.”
                  </p>
                  <span className="font-bold text-text-main text-xs uppercase tracking-wider block">
                    — Waiting Farmer
                  </span>
                </div>

                <div className="p-4 bg-bg border-l-3 border-brand">
                  <p className="italic text-text-main/90 mb-2">
                    “The paper token they give us gets dirty or lost in the crowd. If someone shouts a number and you don't hear it over the truck engines, you lose your spot in line.”
                  </p>
                  <span className="font-bold text-text-main text-xs uppercase tracking-wider block">
                    — Produce Transporter
                  </span>
                </div>

                <div className="p-4 bg-bg border-l-3 border-text-main/40">
                  <p className="italic text-text-main/90 mb-2">
                    “Deductions for grade classification are handwritten on paper slips. There is no clear breakdown of how the final net weight was computed.”
                  </p>
                  <span className="font-bold text-text-main text-xs uppercase tracking-wider block">
                    — Grower
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 04 — Existing Workflow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">04</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Existing Workflow</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Visualizing the step-by-step reality</p>
            </div>
            <div className="lg:col-span-8">
              <div className="p-6 bg-bg border border-border">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333] mb-6">
                  Current Workflow Breakdown
                </h4>
                
                <div className="space-y-3 text-xs font-sans">
                  <div className="p-4 bg-white border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-text-main block mb-1">Stage 1: Blind Departure</span>
                      <p className="text-text-main/70">Farmer harvests and heads to the yard based only on word-of-mouth without capacity verification.</p>
                    </div>
                    <span className="px-2.5 py-1 bg-bg text-text-main/60 border border-border text-[11px] font-semibold shrink-0">Friction: Zero Visibility</span>
                  </div>

                  <div className="p-4 bg-white border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-text-main block mb-1">Stage 2: Physical Gate Queue</span>
                      <p className="text-text-main/70">Vehicles arrive concurrently. Gatekeeper issues paper tokens; farmers wait without estimated call times.</p>
                    </div>
                    <span className="px-2.5 py-1 bg-bg text-text-main/60 border border-border text-[11px] font-semibold shrink-0">Friction: Long Idle Delays</span>
                  </div>

                  <div className="p-4 bg-white border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-text-main block mb-1">Stage 3: Weighbridge & Manual Ledger</span>
                      <p className="text-text-main/70">Produce is weighed and recorded manually in ledgers. Physical receipts handed over for payment processing.</p>
                    </div>
                    <span className="px-2.5 py-1 bg-bg text-text-main/60 border border-border text-[11px] font-semibold shrink-0">Friction: Data Disputes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 05 — Pain Points */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">05</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Pain Points</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Actual friction points discovered in the field</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                <div className="p-4 bg-white border border-border">
                  <strong className="text-text-main block mb-1 text-sm">Lack of Upstream Status</strong>
                  <p className="text-text-main/70">No mechanism to inform farmers whether the procurement yard is open or already at daily intake capacity before they depart.</p>
                </div>

                <div className="p-4 bg-white border border-border">
                  <strong className="text-text-main block mb-1 text-sm">Physical Queue Anxiety</strong>
                  <p className="text-text-main/70">Paper tokens require physical presence near the gatekeeper booth, preventing farmers from resting or attending to other tasks.</p>
                </div>

                <div className="p-4 bg-white border border-border">
                  <strong className="text-text-main block mb-1 text-sm">Opaque Quality Deductions</strong>
                  <p className="text-text-main/70">Grading slips lacked standardized transparency, resulting in recurring disputes between farmers and intake personnel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 06 — Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">06</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Insights</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Converting raw observations into product insights</p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="p-5 bg-white border border-border">
                <h4 className="font-display font-bold text-sm text-[#B87333] mb-1.5">
                  Insight 1: The major delay occurs before arrival, not at the scale
                </h4>
                <p className="text-xs md:text-sm font-sans text-text-main/70 leading-relaxed">
                  While speeding up weighbridge data entry saves seconds, the real waste occurs because all vehicles arrive at the exact same hour. Staggering arrival via scheduled slots eliminates the primary cause of queue congestion.
                </p>
              </div>

              <div className="p-5 bg-white border border-border">
                <h4 className="font-display font-bold text-sm text-[#B87333] mb-1.5">
                  Insight 2: Physical environment dictates UI simplicity
                </h4>
                <p className="text-xs md:text-sm font-sans text-text-main/70 leading-relaxed">
                  Phones are used outdoors under glaring sunlight by users with limited patience for complex forms. The product must work via a simple phone-number lookup and large, clear status indicators.
                </p>
              </div>
            </div>
          </div>

          {/* 07 — Product Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">07</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Product Opportunities</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Emerging opportunities for product design</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
                <div className="p-4 bg-bg border border-border">
                  <div className="font-bold text-text-main mb-1">Live Capacity Beacon</div>
                  <p className="text-text-main/70">Broadcast factory capacity status so growers check availability before loading vehicles.</p>
                </div>

                <div className="p-4 bg-bg border border-border">
                  <div className="font-bold text-text-main mb-1">Digital Token Allocation</div>
                  <p className="text-text-main/70">Issue digital tokens with estimated gate arrival windows, reducing gate clustering.</p>
                </div>

                <div className="p-4 bg-bg border border-border">
                  <div className="font-bold text-text-main mb-1">Itemized Digital Receipt</div>
                  <p className="text-text-main/70">Generate automated digital slips showing gross weight, tare weight, and grade breakdown.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 08 — Product Concept */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">08</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Product Concept</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">How the concept addresses the identified problems</p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="p-6 bg-bg border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-base font-display font-bold text-[#B87333]">
                      Farmer Token Prototype
                    </h4>
                    <p className="text-xs font-sans text-text-main/60">
                      Lightweight digital queue token allocation & administrative intake console.
                    </p>
                  </div>
                  <a
                    href="https://farmer-token.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors inline-flex items-center gap-1.5 shadow-xs shrink-0"
                  >
                    View Prototype <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-text-main block mb-1">For Farmers</span>
                    <p className="text-text-main/70">Single-step phone login, live factory capacity indicator, digital token generation, and real-time status tracker on mobile.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-border">
                    <span className="font-bold text-text-main block mb-1">For Yard Administrators</span>
                    <p className="text-text-main/70">Intake capacity manager, fast token scan-in, automated weight calculations, and verifiable digital receipts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 09 — Learnings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-border pt-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-brand mb-1">09</div>
              <h3 className="text-2xl font-display font-bold text-[#B87333]">Learnings</h3>
              <p className="text-xs font-sans text-text-main/50 mt-1">Reflections from conducting research in the real environment</p>
            </div>
            <div className="lg:col-span-8">
              <div className="p-6 bg-brand/5 border border-brand/20">
                <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed mb-3">
                  This study solidified my perspective on user research: <strong>the most critical constraints never reveal themselves in clean indoor meeting rooms</strong>.
                </p>
                <p className="text-xs md:text-sm font-sans text-text-main/70 leading-relaxed">
                  Being on site exposed physical constraints such as intermittent network access, glare on screens, and noise levels that prevent audio notifications. Product decisions must be grounded in how users actually live through their problems, not how we assume they interact from behind a computer.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
