/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { EXPERIENCE, SKILLS } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-navy uppercase tracking-tighter whitespace-nowrap">
            EXPERIENCE & SKILLS
          </h2>
        </div>

        <div className="space-y-0">
          {/* Experience Rows */}
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-12 border-b border-slate-100 flex flex-col md:grid md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-2 text-sm font-bold text-slate-300 uppercase tracking-widest pt-2">
                {idx === 0 ? "2022-26" : "Current"}
              </div>
              
              <div className="md:col-span-5">
                <h3 className="text-3xl font-bold text-navy uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">{exp.company}</p>
              </div>

              <div className="md:col-span-5">
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Skill Category Rows */}
          {SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group py-12 border-b border-slate-100 flex flex-col md:grid md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-2 text-sm font-bold text-slate-300 uppercase tracking-widest pt-2">
                Expertise
              </div>
              
              <div className="md:col-span-5">
                <h3 className="text-3xl font-bold text-navy uppercase tracking-tight group-hover:text-amber-500 transition-colors">
                  {cat.category}
                </h3>
              </div>

              <div className="md:col-span-5 flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 bg-slate-50 text-slate-400 rounded-full border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
