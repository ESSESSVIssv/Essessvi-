/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';
import { CERTIFICATIONS, PRODUCT_SKILLS, EDUCATION } from '../constants';

export default function AboutPage() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            Background & Story
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            About
          </h1>
        </div>

        {/* 1. About Me Narrative */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-6">
            Product thinking rooted in user observation and engineering fundamentals.
          </h2>

          <div className="space-y-4 text-base font-sans text-text-main/80 leading-relaxed">
            <p>
              I'm <span className="font-bold text-[#B87333]" style={{ color: '#B87333' }}>V. Essessvi</span>, a CSE graduate interested in building products that solve real user problems.
            </p>
            <p>
              My work spans field-based user research, AI-powered workflows, consumer product concepts, and product analysis. I enjoy understanding how people actually experience a problem, breaking that problem down, and turning the insights into practical product solutions.
            </p>
            <p>
              My technical background helps me understand what can be built, while my product work has taught me to focus first on why something should be built and who it is for.
            </p>
          </div>
        </section>

        {/* 2. Experience Section */}
        <section className="mb-16 border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-brand" />
            <h2 className="text-2xl font-display font-bold text-[#B87333]">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {/* AgentRoomAI Experience */}
            <div className="p-8 bg-white border border-border shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-xl font-display font-bold text-[#B87333]">
                  AgentRoomAI
                </h3>
                <span className="text-xs font-mono font-bold text-brand">
                  Dec 2025 – Apr 2026
                </span>
              </div>
              <div className="text-xs font-sans font-semibold uppercase tracking-wider text-text-main/60 mb-4">
                Intern AI Workflow Engineer
              </div>

              <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-4">
                Focused on customer problem identification, conversational workflow design, user experience, AI integration, edge-case identification, and workflow automation.
              </p>

              <div className="space-y-2 text-xs md:text-sm font-sans text-text-main/75">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Mapped conversational ordering journeys to identify customer friction and drop-off points.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Designed structured intent classification and confirmation logic to handle incomplete requests.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Identified and handled conversation edge cases to maintain context during topic switches.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>Iterated on prompt instructions and fallback triggers based on real message interaction patterns.</span>
                </div>
              </div>
            </div>

            {/* Campus Leadership */}
            <div className="p-8 bg-white border border-border shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-xl font-display font-bold text-[#B87333]">
                  Campus Leadership & Coordination
                </h3>
                <span className="text-xs font-mono font-bold text-text-main/60">
                  2022 – 2026
                </span>
              </div>
              <div className="text-xs font-sans font-semibold uppercase tracking-wider text-text-main/60 mb-4">
                The Apollo University
              </div>

              <div className="space-y-3 text-xs md:text-sm font-sans text-text-main/80">
                <div>
                  <strong className="text-text-main block mb-0.5">National Service Scheme (NSS) — Coordinator & Active Member</strong>
                  <p className="text-text-main/70">Organized social outreach initiatives, coordinated volunteer student teams, and managed stakeholder logistics for community blood donation and awareness camps.</p>
                </div>
                <div>
                  <strong className="text-text-main block mb-0.5">Echo Club — Active Member</strong>
                  <p className="text-text-main/70">Co-led cross-disciplinary university forums and organized student knowledge sharing events.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Education */}
        <section className="mb-16 border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-brand" />
            <h2 className="text-2xl font-display font-bold text-[#B87333]">
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="p-6 bg-white border border-border shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-base font-display font-bold text-[#B87333]">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono font-bold text-text-main/60">
                    {edu.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-sans font-semibold text-brand mb-2">
                  <span>{edu.degree}</span>
                  <span className="text-text-main/30">•</span>
                  <span className="text-text-main/80 font-bold">{edu.score}</span>
                </div>
                <p className="text-xs md:text-sm font-sans text-text-main/75 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Skills */}
        <section className="mb-16 border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-brand" />
            <h2 className="text-2xl font-display font-bold text-[#B87333]">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCT_SKILLS.map((group) => (
              <div key={group.category} className="p-6 bg-white border border-border shadow-xs">
                <h3 className="text-base font-display font-bold text-[#B87333] mb-4 pb-2 border-b border-border">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-bg border border-border text-xs font-sans font-semibold text-text-main"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Certifications */}
        <section className="border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-brand" />
            <h2 className="text-2xl font-display font-bold text-[#B87333]">
              Certifications
            </h2>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="p-6 bg-white border border-border shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-base font-display font-bold text-[#B87333]">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-brand">
                    {cert.date}
                  </span>
                </div>
                <div className="text-xs font-sans text-text-main/60 mb-2">
                  {cert.issuer}
                </div>
                <p className="text-xs md:text-sm font-sans text-text-main/75">
                  {cert.note}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
