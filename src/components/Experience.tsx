/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { EXPERIENCE, CLUBS } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-32 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
            Work History
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-gradient leading-[0.85]">
            PROFESSIONAL <br />
            <span className="text-brand">EXPERIENCE.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {(EXPERIENCE as any[]).map((exp, idx) => (
            <motion.div
              key={exp.title || exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-20 border-b border-white/5 flex flex-col md:grid md:grid-cols-12 gap-12 items-start relative transition-all hover:bg-white/[0.01]"
            >
              <div className="md:col-span-3">
                <div className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-[0.3em] bg-white/5 px-5 py-2.5 rounded-2xl inline-block border border-white/5 group-hover:border-brand/40 group-hover:text-white transition-all">
                  {exp.company}
                </div>
              </div>
              
              <div className="md:col-span-5">
                <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-6 group-hover:text-brand transition-all leading-[0.9]">
                  {exp.title}
                </h3>
                <p className="text-xs font-mono font-black text-gray-600 uppercase tracking-[0.2em] mb-12">
                  {exp.role}
                </p>
                
                {exp.tools && (
                  <div className="flex flex-wrap gap-3">
                    {exp.tools.map((tool: string) => (
                      <span key={tool} className="text-[9px] font-mono font-black uppercase tracking-widest text-brand bg-brand/5 border border-brand/20 px-3 py-1.5 rounded-xl">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-4">
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium italic border-l-2 border-brand/20 pl-6">
                  {exp.description}
                </p>
                
                {exp.points && (
                  <ul className="space-y-6">
                    {exp.points.map((point: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(255,122,0,1)]"></div>
                        <span className="text-gray-500 text-sm leading-relaxed font-medium">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Leadership & Activities */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <div className="mb-12">
             <span className="text-[#FF7A00] font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
               Leadership
             </span>
             <h3 className="text-3xl md:text-5xl font-bold text-[#F9FAFB] uppercase tracking-tighter">
               CLUBS & <span className="text-[#FF7A00]">ACTIVITIES</span>
             </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CLUBS.map((club, idx) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-[#FF7A00]/[0.02] transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-[#F9FAFB]">{club.name}</h4>
                </div>
                <p className="text-[#9CA3AF] text-sm font-bold uppercase tracking-widest">{club.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
