/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Compass, Target, Layers, Rocket, CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../constants';

export default function ProductThinking() {
  return (
    <section id="process" className="bg-white py-28 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Eyebrow & Headline */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-brand font-sans uppercase tracking-widest text-xs font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            Working Methodology
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            PRODUCT THINKING: HOW I WORK
          </h2>
          <p className="text-text-main/70 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            I don't start with solutions, frameworks, or code. My approach is grounded in observing real user environments, identifying root friction points, and prioritizing the highest-leverage interventions.
          </p>
        </div>

        {/* 6-Step Practical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-start p-8 bg-bg border border-border hover:border-brand/40 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-widest">
                    Step {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-[#B87333] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm font-sans text-text-main/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Guiding Principles Banner */}
        <div className="mt-12 p-6 bg-brand/5 border border-brand/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand">
              Core Principle
            </span>
            <p className="text-sm font-sans text-text-main/80 font-medium">
              “Solve the real problem in the simplest possible way before scaling complexity.”
            </p>
          </div>
          <div className="text-xs font-sans text-text-main/60 md:text-right">
            Ground decisions in evidence · Test assumptions early · Communicate clearly
          </div>
        </div>

      </div>
    </section>
  );
}
