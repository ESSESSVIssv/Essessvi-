/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-navy uppercase tracking-tighter whitespace-nowrap">
            SELECTED PROJECTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] bg-slate-50 rounded-[2rem] overflow-hidden mb-8 relative border border-slate-100 shadow-sm">
                 <div className="absolute inset-0 flex items-center justify-center grayscale opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                    <project.icon size={120} />
                 </div>
                 <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    →
                 </div>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                 <div>
                    <h3 className="text-3xl font-bold text-navy uppercase tracking-tight mb-2">
                       {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">
                       {project.subtitle || "AI Solution"}
                    </p>
                    <p className="text-slate-500 leading-relaxed max-w-sm mb-6">
                       {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {project.tools.map(tool => (
                          <span key={tool} className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                             {tool}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
