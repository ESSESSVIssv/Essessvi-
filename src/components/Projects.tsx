/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
              Market Solutions
            </span>
            <h2 className="text-5xl md:text-9xl font-display font-black uppercase tracking-tighter text-gradient leading-[0.85]">
              FEATURED <br />
              <span className="text-brand">PROJECTS.</span>
            </h2>
          </motion.div>
          <div className="max-w-xs space-y-4">
             <div className="w-12 h-1 bg-brand/30" />
             <p className="text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-widest italic">
               Developing MVPs with high automation and validated product-market fit.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <div className="premium-card aspect-[16/11] mb-10 group-hover:-translate-y-4 transition-all duration-700">
                {project.image ? (
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 brightness-50 group-hover:brightness-90" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0A0D14] flex items-center justify-center">
                    <Zap className="w-24 h-24 text-brand/10 group-hover:text-brand/30 transition-colors duration-700" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-8 left-8 flex gap-2">
                   {project.tools.slice(0, 2).map((tool, tIdx) => (
                     <span key={tIdx} className="px-4 py-2 glass rounded-xl text-[9px] font-mono font-black uppercase tracking-widest text-white/80">
                       {tool}
                     </span>
                   ))}
                </div>

                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div className="space-y-1">
                     <span className="text-brand font-mono text-[10px] uppercase tracking-[0.4em] font-bold">{project.subtitle}</span>
                     <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter">
                       {project.title.split(":")[0]}
                     </h3>
                   </div>
                   <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                      <ArrowUpRight className="w-8 h-8" />
                   </div>
                </div>
              </div>

              <div className="space-y-6 px-4">
                <p className="text-gray-400 text-lg leading-relaxed line-clamp-3 font-medium">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <button className="text-white text-[10px] font-mono tracking-[0.3em] uppercase font-black hover:text-brand transition-colors flex items-center gap-3 group/btn">
                    Explore Workflow <span className="h-[1px] w-8 bg-brand/40 group-hover/btn:w-16 transition-all duration-500" />
                  </button>
                  <button className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase font-black hover:text-white transition-colors">
                    Product Breakdown
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
