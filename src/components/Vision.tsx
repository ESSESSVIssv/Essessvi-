/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO, EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, Compass, Brain, Users, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Vision() {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-white py-24 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Eyebrow & Headline */}
        <div className="mb-12">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            About
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Product thinking rooted in user observation and engineering fundamentals.
          </h2>
          <p className="text-base md:text-lg font-sans text-text-main/80 max-w-3xl leading-relaxed">
            I am a product-focused CSE graduate who likes understanding why people struggle with products and how technology can solve those problems practically.
          </p>
        </div>

        {/* Narrative & Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-lg text-[#B87333] mb-3">
                Observing Everyday Friction
              </h3>
              <p className="mb-3">
                My interest in Product Management started from observing everyday friction:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm font-sans font-medium text-text-main/80">
                <li className="flex items-center gap-2 p-2.5 bg-bg border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                  <span>Long queues & idle waiting</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 bg-bg border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                  <span>Confusing, multi-step workflows</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 bg-bg border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                  <span>Complicated, cluttered interfaces</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 bg-bg border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                  <span>Repetitive manual operator tasks</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="font-display font-bold text-lg text-[#B87333] mb-3">
                Turning Observations into Execution
              </h3>
              <p className="mb-4">
                Through projects like <strong>Farmer Token</strong> (field user research), <strong>AgentRoomAI</strong> (conversational workflows), and <strong>SpareXChange</strong> (marketplace trust), I have focused on:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-sans font-semibold text-text-main">
                <span className="px-3 py-1.5 bg-bg border border-border">User Discovery</span>
                <span className="px-3 py-1.5 bg-bg border border-border">Workflow Mapping</span>
                <span className="px-3 py-1.5 bg-bg border border-border">Product Decisions</span>
                <span className="px-3 py-1.5 bg-bg border border-border">Practical Execution</span>
              </div>
            </div>

            {/* Current Objective Card */}
            <div className="p-6 bg-brand/5 border-l-4 border-brand mt-6">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand block mb-1">
                Opportunity Objective
              </span>
              <p className="text-sm md:text-base font-sans font-bold text-text-main">
                I am looking for an APM, Junior PM, or Product Management Internship role where I can contribute, learn from experienced teams, and build products that make a real difference.
              </p>
            </div>
          </div>

          {/* Asking the Right Questions (5 cols) */}
          <div className="lg:col-span-5 p-7 bg-bg border border-border space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-text-main/50 block mb-1">
              My Core Product Reflex
            </span>
            <h4 className="font-display font-bold text-base text-[#B87333] mb-4">
              Instead of just writing code, I find myself asking:
            </h4>

            <div className="space-y-3">
              <div className="p-3.5 bg-white border border-border flex items-start gap-3 text-xs md:text-sm font-sans">
                <HelpCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <strong className="text-text-main block">Who is this for?</strong>
                  <span className="text-text-main/70">Identifying the actual user persona and their immediate situational context.</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-border flex items-start gap-3 text-xs md:text-sm font-sans">
                <HelpCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <strong className="text-text-main block">What problem are we solving?</strong>
                  <span className="text-text-main/70">Distinguishing the core functional root cause from surface-level symptoms.</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-border flex items-start gap-3 text-xs md:text-sm font-sans">
                <HelpCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <strong className="text-text-main block">Why is the existing process broken?</strong>
                  <span className="text-text-main/70">Pinpointing where confusion, friction, or drop-off occurs in the user journey.</span>
                </div>
              </div>

              <div className="p-3.5 bg-white border border-border flex items-start gap-3 text-xs md:text-sm font-sans">
                <HelpCircle className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <strong className="text-text-main block">What is the simplest solution that actually works?</strong>
                  <span className="text-text-main/70">Designing lightweight, low-friction answers instead of over-engineered tools.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-border">
          
          {/* Education */}
          <div>
            <h3 className="text-lg font-display font-bold text-[#B87333] mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-brand" /> Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 bg-bg border border-border">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold font-sans text-sm text-text-main">
                      {edu.degree}
                    </span>
                    <span className="text-xs font-sans text-text-main/50">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-sans text-brand font-semibold mb-1">
                    {edu.institution} · {edu.score}
                  </div>
                  <p className="text-xs font-sans text-text-main/70">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-display font-bold text-[#B87333] mb-5 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand" /> Relevant Certifications
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 bg-bg border border-border flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-sans font-bold text-xs md:text-sm text-[#B87333]">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-sans text-brand block">
                      {cert.issuer}
                    </span>
                    {cert.note && (
                      <span className="text-[11px] font-sans text-text-main/60 block mt-0.5">
                        {cert.note}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-sans text-text-main/50 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white border border-border flex items-center justify-between">
              <span className="text-xs font-sans text-text-main/70">
                Want to review my complete resume?
              </span>
              <button
                onClick={() => navigate('/resume')}
                className="text-xs font-sans font-bold text-brand hover:text-text-main inline-flex items-center gap-1 cursor-pointer"
              >
                View Full Resume <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
