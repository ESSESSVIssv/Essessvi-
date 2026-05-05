/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white border-b border-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-navy uppercase tracking-tighter whitespace-nowrap">
            I CAN HELP YOU WITH
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="text-4xl md:text-5xl font-bold text-slate-100 mb-8 font-display group-hover:text-blue-50 transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                Providing end-to-end expertise in {service.title.toLowerCase()}.
              </p>
              
              <div className="mt-8 overflow-hidden">
                <div className="w-full h-px bg-slate-100 group-hover:bg-navy transition-colors duration-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
