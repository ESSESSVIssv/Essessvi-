import re

with open('src/components/Experience.tsx', 'r') as f:
    content = f.read()

new_experience = """/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EXPERIENCE, CLUBS } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-32 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24">
          <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
            Work History
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-text-main mb-6">
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        <div className="space-y-0 border-t border-border">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="group py-16 border-b border-border flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative transition-all hover:bg-white"
            >
              <div className="lg:col-span-3">
                <div className="font-sans font-bold text-text-main text-lg mb-1">
                  {exp.company}
                </div>
                <div className="text-sm font-sans font-medium text-text-main/50 mb-2">
                  {exp.period}
                </div>
                <span className="text-xs font-sans bg-border/50 px-2 py-1 uppercase tracking-widest text-text-main/70">
                  {exp.role}
                </span>
              </div>
              
              <div className="lg:col-span-9">
                <h3 className="text-2xl font-display font-bold text-text-main mb-4 group-hover:text-brand transition-colors">
                  {exp.title}
                </h3>
                
                <p className="text-text-main/80 text-base font-sans leading-relaxed mb-6 font-medium border-l-4 border-brand pl-4">
                  {exp.description}
                </p>
                
                {exp.points && (
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                        <span className="text-text-main/70 text-sm font-sans leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tools && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span key={tool} className="text-[10px] font-sans font-bold uppercase tracking-widest text-text-main/60 bg-border/30 border border-border px-3 py-1.5 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 mb-16">
          <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
            Extracurricular
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-text-main mb-6">
            CLUBS & LEADERSHIP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLUBS.map((club, idx) => (
            <div key={idx} className="bg-white border border-border p-8">
              <h3 className="text-xl font-display font-bold text-text-main mb-2">
                {club.title}
              </h3>
              <div className="text-sm font-sans font-medium text-brand mb-1">
                {club.role}
              </div>
              <div className="text-xs font-sans text-text-main/50 mb-6">
                {club.period}
              </div>
              <p className="text-sm font-sans text-text-main/70 leading-relaxed mb-6">
                {club.description}
              </p>
              <ul className="space-y-2 mb-6">
                {club.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-text-main/30 mt-2 flex-shrink-0"></div>
                    <span className="text-xs font-sans text-text-main/60">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {club.tools.map((tool) => (
                  <span key={tool} className="text-[10px] font-sans text-text-main/60 bg-bg border border-border px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

with open('src/components/Experience.tsx', 'w') as f:
    f.write(new_experience)
