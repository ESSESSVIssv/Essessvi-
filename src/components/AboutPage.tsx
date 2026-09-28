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
  Users,
  MapPin,
  Mail,
  Linkedin
} from 'lucide-react';
import { CERTIFICATIONS, PRODUCT_SKILLS, EDUCATION, PERSONAL_INFO } from '../constants';
import profilePic from '../assets/profile.png';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF9F6] py-16 md:py-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-12 pb-8 border-b border-neutral-200">
          <div className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-black mb-2">
            V. ESSESSVI • Product Manager | AI Product & Automation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4 uppercase">
            About Me
          </h1>
          <p className="text-sm md:text-base font-sans text-neutral-600 max-w-2xl leading-relaxed">
            Product thinking rooted in user observation, conversational systems, and engineering fundamentals.
          </p>
        </div>

        {/* 1. About Me Narrative with Profile Picture */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-2xl font-display font-black text-[#B87333] mb-4 uppercase">
              Who I Am & How I Build
            </h2>

            <div className="space-y-4 text-base font-sans text-neutral-800 leading-relaxed">
              <p>
                I am a product-focused Computer Science and Engineering graduate from <strong className="font-bold text-neutral-950">The Apollo University</strong> (2022–2026). My passion lies in understanding where everyday users experience friction and translating those real-world pain points into intuitive, high-utility product experiences.
              </p>
              <p>
                Rather than starting with lines of code or complex feature lists, I ground my work in <strong className="font-bold text-neutral-950">field-based user observations</strong>, <strong className="font-bold text-neutral-950">direct interviews</strong>, and <strong className="font-bold text-neutral-950">workflow mapping</strong>. Whether conducting in-person research with mango farmers at local markets, building an automobile spare-parts marketplace concept (SpareXChange), or designing AI conversational order flows at AgentRoomAI, I focus on the problem before deciding what gets built.
              </p>
              <p>
                I combine a strong technical foundation in algorithms and software engineering with product discovery, user empathy, and rapid prototyping. I am currently seeking an <strong className="font-bold text-[#B87333]">Associate Product Manager (APM)</strong> role, <strong className="font-bold text-[#B87333]">Junior Product Manager</strong> position, or <strong className="font-bold text-[#B87333]">Product Management Internship</strong>.
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="bg-white border border-neutral-200 p-3 shadow-xs">
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-3">
                <img 
                  src={profilePic} 
                  alt="V. Essessvi" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-1 text-xs font-sans space-y-1">
                <div className="font-bold text-[#B87333] text-sm uppercase">V. Essessvi</div>
                <div className="text-neutral-600 font-medium">The Apollo University '26</div>
                <div className="text-neutral-500 flex items-center gap-1 pt-1">
                  <MapPin className="w-3 h-3 text-[#B87333]" /> Chittoor, India
                </div>
              </div>
            </div>
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
