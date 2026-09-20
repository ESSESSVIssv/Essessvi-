/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Mail,
  Linkedin,
  Github,
  Phone,
  FileText,
  ArrowRight
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Let's talk about products.
          </h1>
          <p className="text-base md:text-lg font-sans text-text-main/75 max-w-2xl leading-relaxed">
            I'm a product-focused CSE graduate looking for an APM role, Junior Product Manager position, or Product Management Internship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Direct Channels - Full Width without Form */}
          <div className="md:col-span-12 max-w-2xl">
            <h2 className="text-xs font-sans uppercase tracking-widest text-[#B87333] font-bold mb-5" style={{ color: '#B87333' }}>
              Direct Channels
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 bg-white border border-border flex items-start gap-3.5 hover:border-brand transition-colors block group shadow-xs"
              >
                <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-text-main/50 block mb-0.5">
                    Email
                  </span>
                  <span className="text-sm font-sans font-semibold text-text-main group-hover:text-brand transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919392964456"
                className="p-5 bg-white border border-border flex items-start gap-3.5 hover:border-brand transition-colors block group shadow-xs"
              >
                <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-text-main/50 block mb-0.5">
                    Phone
                  </span>
                  <span className="text-sm font-sans font-semibold text-text-main group-hover:text-brand transition-colors">
                    +91 9392964456
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-border flex items-start gap-3.5 hover:border-brand transition-colors block group shadow-xs"
              >
                <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-text-main/50 block mb-0.5">
                    LinkedIn
                  </span>
                  <span className="text-sm font-sans font-semibold text-text-main group-hover:text-brand transition-colors">
                    linkedin.com/in/essessvi-vadlamudi
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-border flex items-start gap-3.5 hover:border-brand transition-colors block group shadow-xs"
              >
                <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-text-main/50 block mb-0.5">
                    GitHub
                  </span>
                  <span className="text-sm font-sans font-semibold text-text-main group-hover:text-brand transition-colors">
                    github.com/essessvi
                  </span>
                </div>
              </a>
            </div>

            {/* Resume Callout */}
            <div className="mt-8 p-6 bg-white border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#B87333]" style={{ color: '#B87333' }}>
                    Looking for my resume?
                  </h3>
                  <p className="text-xs font-sans text-text-main/70">
                    Review my official single-page resume or save as PDF.
                  </p>
                </div>
              </div>
              <Link
                to="/resume"
                className="px-5 py-2.5 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-text-main transition-colors inline-flex items-center gap-1.5 shrink-0 self-start sm:self-auto shadow-xs"
              >
                View Resume <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
