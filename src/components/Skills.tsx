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
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-gradient leading-[0.85]">
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
                className="premium-card p-8 group flex flex-col min-h-[350px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-all duration-500">
                  <Icon size={20} />
                </div>

                <div className="text-[10px] font-mono text-brand mb-4 uppercase tracking-[0.4em] font-black opacity-60 group-hover:opacity-100 transition-opacity">
                  {cat.category === "Product Management" ? "Market Logic" : cat.category === "Technical Stack" ? "Engineering Edge" : "Strategic Thinking"}
                </div>
                
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-12 group-hover:text-brand transition-colors">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {cat.items.map(item => (
                    <span 
                      key={item} 
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-2 bg-white/[0.03] text-gray-400 rounded-lg border border-white/5 hover:border-brand/40 hover:text-white transition-all"
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
