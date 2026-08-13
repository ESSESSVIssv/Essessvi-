/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO } from '../constants';

export default function Vision() {
  return (
    <section id="about" className="bg-bg py-32 border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="w-full">
          <div>
            <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
              Background & Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter mb-6 text-text-main leading-tight break-words hyphens-auto">
              I'M {PERSONAL_INFO.firstName} — A PRODUCT BUILDER <br />
              SOLVING PROBLEMS WITH <span className="text-brand">PRODUCT THINKING</span> <br />
              AND AI.
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-text-main/80 font-sans leading-relaxed mt-12 w-full">
              <p>
                I combine product thinking with hands-on execution, taking ideas from problem discovery to deployment. I engineered an AI-powered WhatsApp automation system that reduced manual work by 70%. I built SpareXChange, an automobile spare parts marketplace inspired by real user challenges, where I worked on user research, feature planning, user flows, and product design. I also developed an epidemic forecasting engine using WHO data that achieved 90% prediction accuracy.
              </p>
              
              <p>
                My role across these projects spans problem identification, user research, user journey mapping, feature prioritization, product strategy, AI workflow design, and technical implementation. I enjoy building products that solve real problems, create measurable impact, and deliver value to users.
              </p>
              <div className="mt-8 p-6 bg-white border border-border shadow-sm">
                <p className="text-brand font-bold text-lg mb-2">
                  Currently seeking full-time Product Management opportunities.
                </p>
                <p className="text-sm font-sans text-text-main/60">
                  Based in {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
