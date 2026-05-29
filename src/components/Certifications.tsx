/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../constants';
import { Award, Globe } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg py-32 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
            Validated Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-gradient leading-[0.85]">
            INDUSTRY <br />
            <span className="text-brand">CERTIFICATIONS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="premium-card p-10 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Globe size={120} className="text-brand rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-10 group-hover:scale-110 transition-all duration-500">
                  <Award size={24} />
                </div>
                
                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-tight group-hover:text-brand transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-500 font-mono text-[11px] uppercase tracking-widest mb-12">
                  Issued by {cert.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                   <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">{cert.date}</span>
                   <span className="text-[10px] font-mono text-brand uppercase tracking-[0.3em] font-black group-hover:translate-x-2 transition-transform">Verify</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
