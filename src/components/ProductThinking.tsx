/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, PenTool, CheckCircle, Rocket, RefreshCw } from 'lucide-react';

const STEPS = [
  {
    title: "Understand",
    description: "Identify the core problem and map out the target user's needs.",
    icon: Search
  },
  {
    title: "Define",
    description: "Scope the MVP and establish clear, measurable product goals.",
    icon: PenTool
  },
  {
    title: "Prioritize",
    description: "Focus on high-impact features that solve immediate friction points.",
    icon: CheckCircle
  },
  {
    title: "Build",
    description: "Develop prototypes and validate solutions through rapid execution.",
    icon: Rocket
  },
  {
    title: "Iterate",
    description: "Gather feedback, analyze results, and continuously refine the product.",
    icon: RefreshCw
  }
];

export default function ProductThinking() {
  return (
    <section id="process" className="bg-bg pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="mb-24 w-full">
          <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
            Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-text-main mb-6 break-words hyphens-auto">
            PRODUCT THINKING
          </h2>
          <p className="text-text-main/70 font-sans text-lg leading-relaxed">
            My approach to solving problems relies on a structured, user-centric process. I bridge the gap between business objectives and technical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start text-left p-6 bg-white border border-border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-main mb-3">{step.title}</h3>
              <p className="text-sm font-sans text-text-main/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
