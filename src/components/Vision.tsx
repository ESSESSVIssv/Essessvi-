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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
              Background & Vision
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12 text-gradient leading-[0.9]">
              STRATEGY <br />
              <span className="text-brand">DRIVES VALUE.</span>
            </h2>
            
            <div className="space-y-10 text-xl md:text-3xl text-gray-400 font-medium leading-relaxed max-w-4xl">
              <p className="text-white font-bold italic border-l-4 border-brand pl-8">
                "I solve complex friction points by integrating AI logic with human-centric product strategy."
              </p>
              <p className="tracking-tight">
                As a Computer Science & Engineering student at <span className="text-white font-bold">The Apollo University (2022-2026)</span>, I specialize in the intersection of business intelligence and technical execution.
              </p>
              <p className="text-gray-500 text-lg md:text-2xl font-bold leading-snug">
                I believe high-impact products originate from bridging market gaps—understanding unmet needs and building the MVPs that address them.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 grid grid-cols-1 gap-6"
          >
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="premium-card p-10 group">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 text-brand group-hover:scale-110 transition-all duration-500 ring-1 ring-brand/20">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-black text-white mb-2 uppercase tracking-tight">{service.title}</h3>
                <div className="w-8 h-[1px] bg-brand/30 group-hover:w-16 transition-all duration-500"></div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-32 grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/5 pt-16">
          {meta.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-brand font-mono text-[10px] uppercase tracking-[0.3em] mb-4 font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </div>
              <div className="text-4xl md:text-7xl font-display font-black text-white uppercase tabular-nums">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
