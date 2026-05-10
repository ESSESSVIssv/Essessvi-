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
              I'M ESSESSVI — A CSE FINAL YEAR STUDENT FROM <span className="text-brand">CHITTOOR</span> WHO BUILDS REAL AI SYSTEMS.
            </h2>
            
            <div className="space-y-10 text-base md:text-xl text-gray-400 font-medium leading-relaxed">
              <p className="tracking-tight">
                I engineered WhatsApp automation at AgentRoomAI that reduced manual work by 70%, built a full automobile marketplace from user journey to live transactions, and developed an epidemic forecasting engine with 90% accuracy using WHO data. I don't just learn tools — I deploy them. Currently open for internships and full time opportunities.
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
