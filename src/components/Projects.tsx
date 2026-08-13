/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-32 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24">
          <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-text-main mb-6 break-words hyphens-auto">
            PRODUCT CASE STUDIES
          </h2>
          <p className="text-text-main/70 font-sans max-w-2xl text-lg leading-relaxed">
            I approach building products by focusing on the user problem first. Here is a selection of my work demonstrating product thinking, AI integration, and end-to-end execution.
          </p>
        </div>

        <div className="space-y-32">
          {(PROJECTS as any[]).map((project, idx) => (
            <div key={idx} className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Visuals & Meta */}
              <div className="lg:col-span-5 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-border/30 border border-border flex items-center justify-center relative">
                  <project.icon className="w-24 h-24 text-brand/30" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold font-sans tracking-widest uppercase text-text-main">
                    {project.status}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 bg-white p-6 border border-border shadow-sm">
                  <div>
                    <div className="text-xs font-sans text-text-main/50 uppercase tracking-widest mb-1">Role</div>
                    <div className="font-sans font-medium text-text-main">{project.role}</div>
                  </div>
                  {project.link && project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-brand font-sans font-bold text-sm hover:text-text-main transition-colors mt-2"
                    >
                      View Live Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs font-sans bg-bg border border-border px-3 py-1 text-text-main/70 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Case Study Details */}
              <div className="lg:col-span-7 w-full flex flex-col">
                <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight text-text-main mb-2 break-words hyphens-auto">
                  {project.title}
                </h3>
                <h4 className="text-lg md:text-xl font-sans text-brand font-medium mb-6">
                  {project.subtitle}
                </h4>
                
                <p className="text-text-main/80 font-sans text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-border pt-8">
                  <div>
                    <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-text-main/50 mb-2">The Problem</h5>
                    <p className="text-sm font-sans text-text-main/80 leading-relaxed">{project.problem}</p>
                  </div>
                  {project.user && (
                    <div>
                      <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-text-main/50 mb-2">Target User</h5>
                      <p className="text-sm font-sans text-text-main/80 leading-relaxed">{project.user}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-6 bg-white p-8 border border-border shadow-sm">
                  {project.research && (
                    <div>
                      <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-brand mb-1">Discovery & Research</h5>
                      <p className="text-sm font-sans text-text-main/80 leading-relaxed">{project.research}</p>
                    </div>
                  )}
                  
                  {project.insight && (
                    <div>
                      <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-brand mb-1">Key Insight</h5>
                      <p className="text-sm font-sans text-text-main/80 leading-relaxed">{project.insight}</p>
                    </div>
                  )}

                  {project.product_decision && (
                    <div>
                      <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-brand mb-1">Product Decision</h5>
                      <p className="text-sm font-sans text-text-main/80 leading-relaxed">{project.product_decision}</p>
                    </div>
                  )}

                  <div>
                    <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-brand mb-1">The Solution</h5>
                    <p className="text-sm font-sans text-text-main/80 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-8 border-l-4 border-brand pl-6">
                  <h5 className="text-sm font-sans font-bold uppercase tracking-widest text-text-main mb-2">Impact & Results</h5>
                  <p className="text-base font-sans font-medium text-text-main leading-relaxed">{project.impact}</p>
                </div>

                {(project.learnings || project.next_steps) && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    {project.learnings && (
                      <div>
                        <h5 className="text-xs font-sans font-bold uppercase tracking-widest text-text-main/50 mb-1">Key Learnings</h5>
                        <p className="font-sans text-text-main/70">{project.learnings}</p>
                      </div>
                    )}
                    {project.next_steps && (
                      <div>
                        <h5 className="text-xs font-sans font-bold uppercase tracking-widest text-text-main/50 mb-1">Next Steps</h5>
                        <p className="font-sans text-text-main/70">{project.next_steps}</p>
                      </div>
                    )}
                  </div>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
