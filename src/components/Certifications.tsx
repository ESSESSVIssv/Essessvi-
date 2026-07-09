/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CERTIFICATIONS } from '../constants';
import { Award, Globe } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg py-32 border-t border-text-main/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-light">
            Validated Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-gradient leading-[0.85]">
            INDUSTRY <br />
            <span className="text-brand">CERTIFICATIONS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.title + idx}
              className="premium-card p-10 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Globe size={120} className="text-brand rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-10 group-hover:scale-110 transition-all duration-500">
                  <Award size={24} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-text-main mb-4 uppercase tracking-tight group-hover:text-brand transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-text-main/40 font-mono text-[11px] uppercase tracking-widest mb-12 font-normal">
                  Issued by {cert.issuer}
                </p>

                <div className="mt-auto pt-8 border-t border-text-main/10">
                   <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
