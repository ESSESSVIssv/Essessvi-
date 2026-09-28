/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PRODUCT_SKILLS } from '../constants';
import { CheckCircle2, Compass, Cpu, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-text-main/70 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Eyebrow & Headline */}
        <div className="mb-12">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            V. ESSESSVI • Product Manager | AI Product & Automation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Skills & Competencies
          </h1>
          <p className="text-text-main/70 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            Product management foundation centered on discovering user needs and framing problems, complemented by hands-on AI and technical integration skills.
          </p>
        </div>

        {/* 2-Column Clean Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_SKILLS.map((group, idx) => {
            const isProduct = group.category === 'Product';

            return (
              <div 
                key={idx} 
                className="p-8 bg-white border border-border shadow-xs"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    {isProduct ? <Compass className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand block">
                      {isProduct ? 'Primary Domain' : 'Technical Enablers'}
                    </span>
                    <h3 className="text-xl font-display font-bold text-[#B87333]">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center gap-2.5 p-2.5 bg-bg border border-border/80 text-xs md:text-sm font-sans text-text-main/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
