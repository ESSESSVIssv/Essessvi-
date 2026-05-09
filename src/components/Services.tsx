/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="bg-bg py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
            Solution Architecture
          </span>
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-gradient leading-[0.85]">
            STRATEGIC <br />
            <span className="text-brand">OFFERINGS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="premium-card p-10 group"
            >
              <div className="text-7xl font-display font-black text-white/5 mb-12 group-hover:text-brand/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-all duration-500">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-black text-white mb-4 uppercase tracking-tight leading-tight group-hover:text-brand transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-10">
                Architecting high-conversion strategies in {service.title.toLowerCase()} to scale disruptive products.
              </p>
              
              <div className="flex items-center gap-4 text-brand group-hover:gap-6 transition-all">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest">Protocol Details</span>
                <div className="h-[1px] flex-1 bg-brand/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
