/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Vision() {
  const meta = [
    { label: "Featured Projects", value: "03" },
    { label: "Core Credentials", value: "04" },
    { label: "AI Agent Deployed", value: "01" }
  ];

  return (
    <section id="vision" className="bg-bg py-32 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
              Background & Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-12 text-white leading-[1.2]">
              I’m a Computer Science & Engineering student at <span className="text-brand">The Apollo University</span> with an interest in Product Management and AI.
            </h2>
            
            <div className="space-y-10 text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              <p className="tracking-tight">
                I like working on projects that combine technology, user experience, and problem-solving to build practical and useful products.
              </p>
              <p className="text-gray-500 text-base md:text-lg font-bold leading-snug">
                I believe high-impact products originate from bridging market gaps—understanding unmet needs and building a basic working version of the idea.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/5 pt-16">
          {meta.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-brand font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </div>
              <div className="text-4xl md:text-6xl font-display font-black text-white uppercase tabular-nums">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
