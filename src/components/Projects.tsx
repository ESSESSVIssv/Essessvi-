/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Zap } from 'lucide-react';
import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'sparexchange' | 'whatsapp' | 'epidemic' | null>(null);
  return (
    <section id="projects" className="bg-bg py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
              Market Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-gradient leading-[0.85]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <div 
                className="premium-card aspect-[16/12] mb-8 group-hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                onClick={() => {
                  if (project.title.includes('SpareXchange')) setActiveProject('sparexchange');
                  if (project.title.includes('WhatsApp')) setActiveProject('whatsapp');
                  if (project.title.includes('Health Forecasting') || project.title.includes('Epidemic')) setActiveProject('epidemic');
                }}
              >
                {project.image ? (
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 brightness-50 group-hover:brightness-90" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0A0D14] flex items-center justify-center">
                    <Zap className="w-16 h-16 text-brand/10 group-hover:text-brand/30 transition-colors duration-700" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6 flex gap-2">
                   {project.tools.slice(0, 2).map((tool, tIdx) => (
                     <span key={tIdx} className="px-3 py-1.5 glass rounded-lg text-[8px] font-mono font-black uppercase tracking-widest text-white/80">
                       {tool}
                     </span>
                   ))}
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                   <div className="space-y-1">
                     <span className="text-brand font-mono text-[9px] uppercase tracking-[0.4em] font-bold">{project.subtitle}</span>
                     <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter">
                       {project.title.split(":")[0]}
                     </h3>
                   </div>
                   {(project.title.includes('SpareXchange') || project.title.includes('WhatsApp') || project.title.includes('Health Forecasting') || project.title.includes('Epidemic')) && (
                     <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                        <ArrowUpRight className="w-6 h-6" />
                     </div>
                   )}
                </div>
              </div>

              <div className="space-y-4 px-2">
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-[9px] font-mono tracking-[0.3em] uppercase font-black hover:text-brand transition-colors flex items-center gap-2 group/btn"
                    >
                      Visit Project <span className="h-[1px] w-4 bg-brand/40 group-hover/btn:w-8 transition-all duration-500" />
                    </a>
                  ) : null}
                  {(project.title.includes('SpareXchange') || project.title.includes('WhatsApp') || project.title.includes('Health Forecasting') || project.title.includes('Epidemic')) && (
                    <button 
                      onClick={() => {
                        if (project.title.includes('SpareXchange')) setActiveProject('sparexchange');
                        if (project.title.includes('WhatsApp')) setActiveProject('whatsapp');
                        if (project.title.includes('Health Forecasting') || project.title.includes('Epidemic')) setActiveProject('epidemic');
                      }}
                      className="text-gray-500 text-[9px] font-mono tracking-[0.3em] uppercase font-black hover:text-white transition-colors"
                    >
                      Breakdown / PDF Slides
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal isOpen={activeProject !== null} onClose={() => setActiveProject(null)} projectType={activeProject} />
    </section>
  );
}
