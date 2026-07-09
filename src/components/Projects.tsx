/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS } from '../constants';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<'sparexchange' | 'whatsapp' | 'epidemic' | null>(null);

  return (
    <section id="projects" className="bg-[#F6F2EA] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-light">
              Product Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-text-main leading-[0.85]">
              PRODUCT <br />
              <span className="text-brand">PORTFOLIO.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          
          {PROJECTS.map((project, idx) => (
            <div
              key={project.title}
              className="relative group bg-[#F6F2EA] border border-[#DDD5C8] rounded-2xl p-10 md:p-14 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-brand/40 hover:-translate-y-2 transition-all duration-500 flex flex-col lg:flex-row gap-12"
            >
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-brand">
                <ArrowUpRight className="w-10 h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </div>

              {/* Content Side */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="font-mono text-3xl font-light text-brand/40">0{idx + 1}</span>
                    {idx === 0 && (
                      <span className="px-4 py-1.5 rounded-full border border-brand text-brand font-mono text-[9px] uppercase tracking-widest font-bold bg-brand/5">
                        Featured Project
                      </span>
                    )}
                    {project.status && (
                      <span className="px-4 py-1.5 rounded-full border border-[#DDD5C8] text-text-main/60 font-mono text-[9px] uppercase tracking-widest bg-[#FBF6F0]">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-text-main uppercase tracking-tighter leading-tight mb-4">
                    {project.title}
                  </h3>
                  <div className="w-20 h-[1px] bg-brand/50 mb-8"></div>

                  <p className="font-mono text-brand text-xs uppercase tracking-widest mb-6">
                    {project.subtitle}
                  </p>
                  
                  <div className="space-y-6 text-sm text-text-main/80 font-normal leading-relaxed mb-10 max-w-2xl">
                    <p>{project.description}</p>
                    {project.problem && (
                      <div>
                        <span className="font-bold text-text-main mr-2">Problem:</span>
                        <span>{project.problem}</span>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <span className="font-bold text-text-main mr-2">Solution:</span>
                        <span>{project.solution}</span>
                      </div>
                    )}
                    {project.impact && (
                      <div>
                        <span className="font-bold text-brand mr-2">Impact:</span>
                        <span className="text-text-main">{project.impact}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-4 py-2 bg-[#FBF6F0] border border-[#D9C7B2] rounded-xl text-[10px] font-mono uppercase tracking-widest text-text-main/70">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[#DDD5C8]">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-text-main/50">
                      Role: <span className="text-text-main">{project.role || 'Product Lead'}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {(project.title.includes('SpareXchange') || project.title.includes('WhatsApp') || project.title.includes('Health Forecasting') || project.title.includes('Epidemic')) && (
                        <button 
                          onClick={() => {
                            if (project.title.includes('SpareXchange')) setActiveProject('sparexchange');
                            if (project.title.includes('WhatsApp')) setActiveProject('whatsapp');
                            if (project.title.includes('Health Forecasting') || project.title.includes('Epidemic')) setActiveProject('epidemic');
                          }}
                          className="px-6 py-3 bg-[#111111] text-[#F6F2EA] font-sans font-medium text-[11px] uppercase tracking-widest hover:bg-brand transition-colors rounded-lg flex items-center gap-2"
                        >
                          View Case Study
                        </button>
                      )}
                      
                      {project.link && project.link !== "#" && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-[#FBF6F0] border border-[#D9C7B2] text-text-main font-sans font-medium text-[11px] uppercase tracking-widest hover:border-brand hover:text-brand transition-colors rounded-lg flex items-center gap-2"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      <CaseStudyModal isOpen={activeProject !== null} onClose={() => setActiveProject(null)} projectType={activeProject} />
    </section>
  );
}
