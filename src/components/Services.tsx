/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="services" className="bg-bg py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-light">
              Service Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white leading-[1.2]">
              INTELLIGENT <br />
              <span className="text-brand">OFFERINGS.</span>
            </h2>
          </div>
          
          <div className="pb-4">
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-[250px] leading-relaxed font-normal">
              Engineering high-impact solutions through technical edge & product logic.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div 
                  onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                  className={`group relative overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-500 border ${
                    isExpanded 
                      ? 'bg-white/[0.08] border-brand/40 shadow-[0_0_50px_rgba(255,122,0,0.1)]' 
                      : 'bg-white/[0.03] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isExpanded ? 'bg-brand text-[#F5F1E8] scale-110' : 'bg-white/5 text-brand'
                      }`}>
                        <service.icon size={24} />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-display font-semibold uppercase tracking-tight transition-colors ${
                        isExpanded ? 'text-brand' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <span className="hidden md:block font-mono text-[10px] text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity font-normal">
                        {isExpanded ? 'Collapse Protocol' : 'Explore Protocol'}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-gray-500 font-normal"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'circOut' }}
                      >
                        <div className="px-8 pb-10 border-t border-white/10 pt-10">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-8">
                              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                                {service.description}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                  'Scalable Logic Architectures',
                                  'User Behavioral Mapping',
                                  'AI Agent Integration',
                                  'Strategic Market Alignment'
                                ].map(item => (
                                  <div key={item} className="flex items-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                                    <CheckCircle2 size={12} className="text-brand" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="lg:col-span-4 flex items-end justify-end">
                              <a 
                                href="#contact"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const el = document.getElementById('contact');
                                  el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full md:w-auto px-8 py-5 bg-brand text-[#F5F1E8] font-display font-light text-[10px] uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,122,0,0.2)]"
                              >
                                Start Engagement <ArrowUpRight size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
