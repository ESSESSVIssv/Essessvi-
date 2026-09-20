/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle2, Search, FileText } from 'lucide-react';

export default function JobLenceCaseStudy() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-text-main/70 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-sans uppercase tracking-widest text-brand font-bold">
              Product Concept & Prototype
            </span>
            <span className="text-text-main/40">·</span>
            <span className="text-xs font-sans text-text-main/60">
              Job Discovery · Search Experience · Product Concept
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-3">
            JobLence
          </h1>
          <p className="text-xl md:text-2xl font-display font-bold text-brand mb-6">
            Applying to more jobs doesn't necessarily mean finding more relevant jobs.
          </p>

          <p className="text-base font-sans text-text-main/80 leading-relaxed max-w-3xl">
            I explored the problem of job seekers having to search through large numbers of openings without knowing which opportunities actually match their background. JobLence is a product concept that starts with the user's resume and explores how relevant opportunities could be surfaced more clearly.
          </p>
        </div>

        {/* Problem */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Problem
          </h2>
          <div className="space-y-4 text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
            <p>
              Traditional job boards present applicants with an overwhelming feed of thousands of listings. Users spend hours scrolling, only to find that half the postings have hidden requirements (e.g., "minimum 3 years of experience required" buried at the bottom of an entry-level listing) or vague responsibilities.
            </p>
            <p>
              This creates high applicant fatigue, leading job seekers to adopt a "spray-and-pray" tactic—submitting dozens of untargeted applications—which wastes candidate time and swamps hiring teams with mismatched resumes.
            </p>
          </div>
        </section>

        {/* User */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Target User
          </h2>
          <div className="p-6 bg-white border border-border">
            <h3 className="font-display font-bold text-base text-[#B87333] mb-2">
              Early-Career Candidates & Recent Graduates
            </h3>
            <p className="text-sm font-sans text-text-main/80 leading-relaxed">
              Job seekers who have foundational coursework, project experience, and technical skills, but lack deep industry network connections. They need transparent guidance on where their skills genuinely qualify them versus where realistic gaps exist.
            </p>
          </div>
        </section>

        {/* Existing Friction */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Existing Friction Points
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-sans">
            <div className="p-4 bg-white border border-border flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Information Overload & Generic Search</strong>
                <span className="text-text-main/70">Searching for "Product" or "Junior" returns hundreds of unrelated roles with confusing title inflation.</span>
              </div>
            </div>
            <div className="p-4 bg-white border border-border flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Hidden Qualification Gates</strong>
                <span className="text-text-main/70">Requirements revealed only after reading long blocks of corporate text, creating friction and wasted effort.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Opportunity */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Product Opportunity
          </h2>
          <div className="p-6 bg-white border border-border space-y-3 text-sm font-sans text-text-main/80 leading-relaxed">
            <p>
              Instead of forcing the user to manually compare their background against 50 different job descriptions, flip the mental model: <strong>start with the candidate's verified skills and surface listings that directly correspond to their demonstrated capabilities</strong>.
            </p>
            <p>
              Provide upfront transparency on skill alignment: showing where the candidate matches strongly and highlighting any specific missing tool or experience gap before they apply.
            </p>
          </div>
        </section>

        {/* Initial Product Scope */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Initial Product Scope
          </h2>
          <div className="p-6 bg-white border border-border space-y-3 text-xs md:text-sm font-sans">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Resume Skill Parser & Profiler:</strong>
                <span className="text-text-main/70">Extract structured skills, projects, and domain interests from a single uploaded resume document.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Requirement Match Transparency:</strong>
                <span className="text-text-main/70">Visual alignment breakdown displaying matched skills alongside identified gap areas for each role.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Experience Filter Honesty:</strong>
                <span className="text-text-main/70">Strict filtering that removes roles claiming to be "entry-level" but demanding multi-year industry tenure.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Flow */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Prototype Journey
          </h2>
          <div className="p-6 bg-white border border-border">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-sans font-semibold text-text-main">
              <span className="px-3 py-2 bg-bg border border-border">Resume</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Skills</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Job Requirements</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Match</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-bg border border-border">Skill Gaps</span>
              <span className="text-brand font-bold">→</span>
              <span className="px-3 py-2 bg-brand text-white">Application</span>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-14 p-6 bg-brand/5 border-l-4 border-brand">
          <h2 className="text-xl font-display font-bold text-[#B87333] mb-3">
            What I Learned
          </h2>
          <div className="space-y-3 text-sm font-sans text-text-main/80 leading-relaxed">
            <p>
              More content does not equal more value. In discovery products, users don't need infinite feeds; they need <strong>signal over noise</strong> and honest expectation management.
            </p>
            <p>
              Framing the problem around candidate clarity rather than recruiter volume led to a much more focused, human-centered product concept.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/work/sparexchange"
            className="text-xs font-sans font-bold uppercase tracking-wider text-text-main/60 hover:text-brand transition-colors"
          >
            ← Previous: SpareXChange
          </Link>
          <Link
            to="/research"
            className="text-xs font-sans font-bold uppercase tracking-wider text-brand hover:text-text-main inline-flex items-center gap-1.5 transition-colors"
          >
            Explore Research →
          </Link>
        </div>

      </div>
    </div>
  );
}
