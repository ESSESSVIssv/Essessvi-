import re

with open('src/components/Certifications.tsx', 'r') as f:
    content = f.read()

new_certs = """/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CERTIFICATIONS } from '../constants';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg py-32 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24">
          <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
            Continuous Learning
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-text-main mb-6">
            CERTIFICATIONS & AWARDS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-border p-8 hover:border-brand/40 transition-colors flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-display font-bold text-text-main mb-3 leading-tight group-hover:text-brand transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-sans text-text-main/60 font-medium">
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand">
                  Verified
                </span>
                <span className="text-xs font-sans font-medium text-text-main/40">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

with open('src/components/Certifications.tsx', 'w') as f:
    f.write(new_certs)
