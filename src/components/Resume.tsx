/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS } from '../constants';
import { Download, Mail, Phone, MapPin, Linkedin, Globe, ExternalLink, Printer, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
// @ts-ignore - html2pdf.js doesn't have official types
import html2pdf from 'html2pdf.js';

export default function Resume() {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleSaveAsPDF = async () => {
    const element = document.getElementById('resume-sheet');
    if (!element) return;

    setIsExporting(true);

    const opt = {
      margin: 10,
      filename: `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        backgroundColor: '#050505',
        logging: false 
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation Error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-bg min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 no-print">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all text-[10px] font-mono uppercase tracking-widest"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to Portfolio
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={handleSaveAsPDF}
              disabled={isExporting}
              className="flex items-center gap-2 px-6 py-3 bg-brand text-black rounded-xl hover:scale-105 active:scale-95 transition-all text-[10px] font-mono uppercase tracking-widest font-black disabled:opacity-50 disabled:scale-100"
            >
              {isExporting ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Download size={14} />
              )}
              {isExporting ? 'Generating...' : 'Save as PDF'}
            </button>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all text-[10px] font-mono uppercase tracking-widest"
            >
              <Printer size={14} />
              Print
            </button>
          </div>
        </div>

        {/* Resume Sheet */}
        <motion.div 
          id="resume-sheet"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl print:bg-white print:text-black print:rounded-none print:p-0 print:shadow-none print:border-none"
        >
          {/* Header */}
          <header className="border-b border-white/10 pb-12 mb-12 print:border-black/10">
            <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-6 print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-brand font-display font-bold text-xl uppercase tracking-widest mb-8">
              {PERSONAL_INFO.role}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500 print:text-black">
                  <Mail size={16} className="text-brand" />
                  <span className="text-sm font-mono">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 print:text-black">
                  <Phone size={16} className="text-brand" />
                  <span className="text-sm font-mono">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 print:text-black">
                  <MapPin size={16} className="text-brand" />
                  <span className="text-sm font-mono">{PERSONAL_INFO.location}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-500 print:text-black">
                  <Linkedin size={16} className="text-brand" />
                  <span className="text-sm font-mono">LinkedIn Profile</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 print:text-black">
                  <Globe size={16} className="text-brand" />
                  <span className="text-sm font-mono">Digital Portfolio</span>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Summary */}
              <section>
                <h2 className="text-brand font-mono text-xs font-black uppercase tracking-[0.4em] mb-6 print:text-black">Summary</h2>
                <p className="text-gray-400 leading-relaxed print:text-black text-sm">
                  {PERSONAL_INFO.bio}
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-brand font-mono text-xs font-black uppercase tracking-[0.4em] mb-8 print:text-black">Experience</h2>
                <div className="space-y-10">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-white/10 print:border-black/10">
                      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-lg font-display font-black text-white uppercase print:text-black">{exp.title}</h3>
                        <span className="text-[10px] font-mono text-gray-500 uppercase">{exp.period}</span>
                      </div>
                      <p className="text-brand font-bold text-xs mb-4 uppercase tracking-wider">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-gray-400 text-xs leading-relaxed flex gap-3 print:text-black">
                            <span className="text-brand mt-1.5 w-1 h-1 rounded-full bg-brand shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-12">
              {/* Education */}
              <section>
                <h2 className="text-brand font-mono text-xs font-black uppercase tracking-[0.4em] mb-8 print:text-black">Education</h2>
                <div className="space-y-6">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-display font-black text-white uppercase mb-1 print:text-black">{edu.institution}</h3>
                      <p className="text-gray-500 text-[10px] italic mb-1">{edu.degree}</p>
                      <span className="text-[9px] font-mono text-gray-500 uppercase">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="text-brand font-mono text-xs font-black uppercase tracking-[0.4em] mb-8 print:text-black">Skills</h2>
                <div className="space-y-6">
                  {SKILLS.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h3 className="text-white font-bold text-[9px] uppercase tracking-widest mb-3 print:text-black">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-500 text-[9px] font-mono uppercase tracking-wider print:border-black/20 print:text-black">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-brand font-mono text-xs font-black uppercase tracking-[0.4em] mb-8 print:text-black">Certifications</h2>
                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx}>
                      <p className="text-white font-bold text-[10px] mb-1 print:text-black">{cert.title}</p>
                      <p className="text-gray-500 text-[9px] font-mono uppercase tracking-widest">{cert.issuer}</p>
                      <p className="text-gray-500 text-[8px] font-mono uppercase tracking-widest">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media print {
          .no-print, nav, footer { display: none !important; }
          body { background: white !important; color: black !important; }
          .bg-bg { background: white !important; min-height: 0 !important; padding: 0 !important; margin: 0 !important; }
          .max-w-4xl { max-width: 100% !important; margin: 0 !important; }
          .rounded-3xl { border-radius: 0 !important; border: none !important; }
          .shadow-2xl { box-shadow: none !important; }
          @page { 
            margin: 1.5cm;
            size: auto;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
}
