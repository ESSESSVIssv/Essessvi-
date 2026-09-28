/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CERTIFICATIONS } from '../constants';
import { ArrowLeft, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Certifications() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-text-main/70 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Eyebrow & Headline */}
        <div className="mb-14">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            V. ESSESSVI • Product Manager | AI Product & Automation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Certifications & Learning
          </h1>
          <p className="text-text-main/70 font-sans max-w-3xl text-base md:text-lg leading-relaxed">
            Structured learning in product management frameworks, data fundamentals, and cloud concepts supporting practical product work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-border p-6 md:p-8 hover:border-brand/40 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2 text-brand mb-3">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-sans font-semibold text-text-main/60 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-[#B87333] mb-2 leading-tight">
                  {cert.title}
                </h3>
                {cert.note && (
                  <p className="text-xs md:text-sm font-sans text-text-main/70 leading-relaxed mb-4">
                    {cert.note}
                  </p>
                )}
              </div>
              <div className="pt-4 border-t border-border flex justify-between items-center text-xs font-sans text-text-main/50">
                <span className="font-semibold text-brand">Completed</span>
                <span className="font-mono">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
