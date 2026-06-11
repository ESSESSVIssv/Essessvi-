/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Vision() {
  const meta = [
    { label: "Featured Projects", value: "04" },
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
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-12 text-gradient leading-[1.1]">
              I'M ESSESSVI — A FINAL-YEAR CSE STUDENT WHO BUILDS <span className="text-brand">PRODUCTS</span> AND BRINGS THEM TO LIFE.
            </h2>
            
            <div className="space-y-8 text-base md:text-lg text-gray-400 font-medium leading-relaxed tracking-wide">
              <p>
                I combine product thinking with hands-on execution, taking ideas from problem discovery to deployment. At AgentRoomAI, I engineered WhatsApp automation that reduced manual work by 70%. I built SpareXchange, an automobile spare parts marketplace inspired by real user challenges, where I worked on user research, feature planning, user flows, and product design. I also developed an epidemic forecasting engine using WHO data that achieved 90% prediction accuracy.
              </p>
              <p>
                Recently, I built <span className="text-white font-bold">JobLence</span>, an AI-powered job application assistant that analyzes resumes, matches candidates with relevant job opportunities, and streamlines the application process through automation. The project was driven by the challenge of making job discovery and applications more efficient for candidates.
              </p>
              <p>
                My role across these projects spans problem identification, user research, user journey mapping, feature prioritization, product strategy, AI workflow design, and technical implementation. I enjoy building products that solve real problems, create measurable impact, and deliver value to users.
              </p>
              <p className="text-brand font-bold border-l-2 border-brand/50 pl-4 italic">
                Currently seeking Product Management internships and full-time opportunities.
              </p>
              <p className="text-white/80 font-mono text-xs uppercase tracking-widest border-l-2 border-white/20 pl-4">
                Open to Prompt Engineering, AI Workflow Automation, and Technical Product roles.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/5 pt-16">
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
