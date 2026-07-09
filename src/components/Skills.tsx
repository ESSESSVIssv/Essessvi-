/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';

export default function Skills() {
  const icons = [ShieldCheck, Cpu, Zap];

  return (
    <section id="skills" className="bg-bg py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-light">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-gradient leading-[0.85]">
            CORE <br />
            <span className="text-brand">CAPABILITIES.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILLS.map((cat, idx) => {
             const Icon = icons[idx % icons.length];
             return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative bg-[#F6F2EA] rounded-2xl border border-[#DDD5C8] p-10 group flex flex-col min-h-[350px] shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand/10 to-transparent opacity-50 pointer-events-none"></div>
                
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#FBF6F0] border border-brand/30 flex items-center justify-center text-brand mb-10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(184,115,51,0.15)]">
                  <Icon size={22} />
                </div>
                <div className="relative z-10 text-[10px] font-mono text-brand mb-4 uppercase tracking-[0.4em] font-light opacity-80">
                  {cat.category === "Product Management" ? "Market Logic" : cat.category === "Technical Stack" ? "Engineering Edge" : "Strategic Thinking"}
                </div>
                <div className="relative z-10 w-12 h-[1px] bg-brand/40 mb-8"></div>
                
                <h3 className="relative z-10 text-3xl md:text-4xl font-display font-bold text-text-main uppercase tracking-tighter mb-12 group-hover:text-brand transition-colors">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {cat.items.map(item => (
                    <span 
                       key={item} 
                       className="relative z-10 text-[10px] font-mono font-light uppercase tracking-widest px-5 py-2.5 bg-[#FBF6F0] text-text-main/80 rounded-xl border border-[#D9C7B2] hover:bg-brand hover:text-[#F5F1E8] hover:border-brand hover:-translate-y-[3px] hover:shadow-[0_4px_12px_rgba(184,115,51,0.2)] transition-all duration-300 font-normal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
