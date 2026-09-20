/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EXPERIENCE, CLUBS } from '../constants';
import { Briefcase, CheckCircle2, Users, Layers, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-28 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Eyebrow & Headline */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-brand font-sans uppercase tracking-widest text-xs font-bold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            Professional Background
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            EXPERIENCE & LEADERSHIP
          </h2>
          <p className="text-text-main/70 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            Hands-on experience identifying user friction, designing conversational workflows, leading project development, and coordinating multi-stakeholder initiatives.
          </p>
        </div>

        {/* Work & Project Experience Cards */}
        <div className="space-y-8 mb-20">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-border p-8 md:p-10 shadow-xs transition-all hover:border-brand/40"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg md:text-2xl font-display font-black text-text-main">
                      {exp.company}
                    </span>
                    <span className="px-3 py-0.5 bg-brand/10 text-brand text-xs font-sans font-bold uppercase tracking-wider rounded-full">
                      {exp.role}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-sans font-bold text-[#B87333]/90">
                    {exp.title}
                  </h3>
                </div>

                <div className="text-xs font-sans font-semibold text-text-main/50 uppercase tracking-widest">
                  {exp.period}
                </div>
              </div>

              {/* Summary Statement */}
              <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed mb-6 font-medium border-l-3 border-brand pl-4">
                {exp.summary}
              </p>

              {/* Key Bullet Points */}
              <div className="mb-8">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/50 mb-3">
                  Product Responsibilities & Impact
                </h4>
                <ul className="space-y-2.5">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-xs md:text-sm font-sans text-text-main/80 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Demonstrated Product Skills */}
              {exp.productSkills && (
                <div>
                  <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#B87333]/50 mb-2.5">
                    Demonstrated Product Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.productSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-sans bg-bg border border-border px-3 py-1 text-text-main/70 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Leadership & Extracurricular Section */}
        <div className="pt-8 border-t border-border">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#B87333]">
              Clubs & Campus Leadership
            </h3>
            <p className="text-xs font-sans text-text-main/60 uppercase tracking-wider mt-1">
              Stakeholder Management · Team Coordination · Public Engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLUBS.map((club, idx) => (
              <div key={idx} className="bg-white border border-border p-6 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-display font-bold text-lg text-[#B87333]">
                    {club.title}
                  </h4>
                  <span className="text-xs font-sans text-text-main/50">
                    {club.period}
                  </span>
                </div>
                
                <div className="text-xs font-sans font-bold text-brand uppercase tracking-wider mb-3">
                  {club.role}
                </div>

                <p className="text-xs font-sans text-text-main/70 leading-relaxed mb-4">
                  {club.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {club.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-xs font-sans text-text-main/80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1 shrink-0"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {club.tools.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-sans font-semibold text-text-main/60 bg-bg px-2.5 py-0.5 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
