/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS, CLUBS } from '../constants';
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
      margin: 0,
      filename: `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2.5, 
        useCORS: true,
        backgroundColor: '#050505',
        logging: false,
        onclone: (clonedDoc: Document) => {
          const sheet = clonedDoc.getElementById('resume-sheet');
          if (sheet) {
            sheet.style.padding = '15mm 20mm';
            sheet.style.width = '210mm';
            sheet.style.minHeight = '297mm';
            sheet.style.margin = '0';
            sheet.style.border = 'none';
          }

          const styles = clonedDoc.querySelectorAll('style, link[rel="stylesheet"]');
          styles.forEach(s => {
            if (s.tagName === 'STYLE') {
              s.innerHTML = s.innerHTML
                .replace(/oklch\([^)]+\)/g, '#FF7A00')
                .replace(/oklab\([^)]+\)/g, '#FFFFFF')
                .replace(/color-mix\([^)]+\)/g, '#888888');
            }
          });

          // Inject specific overrides for the PDF
          const style = clonedDoc.createElement('style');
          style.innerHTML = `
            #resume-sheet {
              background-color: #050505 !important;
              color: white !important;
              font-family: 'Inter', sans-serif !important;
              box-sizing: border-box !important;
            }
            .text-brand { color: #FF7A00 !important; }
            .text-white { color: #FFFFFF !important; }
            .text-gray-400 { color: #9CA3AF !important; }
            .text-gray-500 { color: #6B7280 !important; }
            .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1) !important; }
            .bg-white\\/5 { background-color: rgba(255, 255, 255, 0.05) !important; }
            .bg-brand { background-color: #FF7A00 !important; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            li { list-style: none; }
          `;
          clonedDoc.head.appendChild(style);
        }
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation Error:', error);
      if (confirm('PDF generation failed. Use Print dialog instead?')) {
        window.print();
      }
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 no-print bg-white/5 p-4 rounded-2xl border border-white/10">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-widest group"
          >
            <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSaveAsPDF}
              disabled={isExporting}
              className="flex items-center gap-2 px-8 py-3 bg-brand text-black rounded-xl hover:scale-105 transition-all text-[11px] font-black uppercase tracking-widest disabled:opacity-50 shadow-[0_0_20px_rgba(255,122,0,0.3)]"
            >
              {isExporting ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
              {isExporting ? 'Generating...' : 'Download PDF'}
            </button>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all text-[11px] font-bold uppercase tracking-widest"
            >
              <Printer size={16} />
              Print
            </button>
          </div>
        </div>

        {/* Professional A4 Sheet */}
        <div 
          id="resume-sheet"
          className="bg-[#050505] mx-auto print:bg-white print:text-black shadow-xl"
          style={{ width: '210mm', height: '297mm', padding: '15mm 20mm', boxSizing: 'border-box', overflow: 'hidden' }}
        >
          {/* Header */}
          <header className="border-b border-white/10 pb-4 mb-6 text-center print:border-black/20">
            <h1 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-1 print:text-black leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-brand font-display font-bold text-[10px] uppercase tracking-[0.4em] mb-3 leading-tight">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-none">
              <span>{PERSONAL_INFO.phone}</span>
              <span className="text-brand/50">•</span>
              <span>{PERSONAL_INFO.email}</span>
              <span className="text-brand/50">•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn</a>
              <span className="text-brand/50">•</span>
              <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Portfolio</a>
              <span className="text-brand/50">•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2 className="text-brand font-mono text-[9px] font-bold uppercase tracking-[0.4em] mb-1.5 print:text-black border-b border-white/5 pb-0.5">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed text-[11px] print:text-black">
              {PERSONAL_INFO.bio}
            </p>
          </section>

          {/* Skills */}
          <section className="mb-5">
            <h2 className="text-brand font-mono text-[9px] font-bold uppercase tracking-[0.4em] mb-1.5 print:text-black border-b border-white/5 pb-0.5">Core Competencies</h2>
            <div className="grid grid-cols-1 gap-1">
              {SKILLS.map((group, idx) => (
                <div key={idx} className="flex items-baseline gap-3">
                  <h3 className="text-white font-bold text-[9px] uppercase tracking-wider w-[130px] shrink-0 print:text-black">{group.category}:</h3>
                  <p className="text-gray-400 text-[10px] print:text-black leading-tight">
                    {group.category === "Languages Known" ? group.items.join(' | ') : group.items.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience / Projects */}
          <section className="mb-5">
            <h2 className="text-brand font-mono text-[9px] font-bold uppercase tracking-[0.4em] mb-2 print:text-black border-b border-white/5 pb-0.5">Key Projects & Experience</h2>
            <div className="space-y-3.5">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-[11.5px] font-black text-white uppercase tracking-tight print:text-black">
                      {exp.title} <span className="text-brand text-[8px] font-bold ml-1">@ {exp.company}</span>
                    </h3>
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                    <span>{exp.role}</span>
                  </div>
                  <ul className="space-y-0.5">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-gray-400 text-[10px] leading-relaxed flex gap-2 print:text-black">
                        <span className="text-brand font-black mt-1 text-[6.5px] shrink-0">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certs - More compact */}
          <div className="grid grid-cols-2 gap-8">
            <section>
              <h2 className="text-brand font-mono text-[9px] font-bold uppercase tracking-[0.4em] mb-3 print:text-black border-b border-white/5 pb-1">Education</h2>
              <div className="space-y-2">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="text-[10px] font-bold text-white uppercase print:text-black leading-tight">{edu.institution}</h3>
                    <p className="text-gray-400 text-[8.5px] leading-tight mb-0.5">{edu.degree}</p>
                    <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-brand font-mono text-[9px] font-bold uppercase tracking-[0.4em] mb-3 print:text-black border-b border-white/5 pb-1">Certifications</h2>
              <div className="space-y-1.5">
                {CERTIFICATIONS.slice(0, 5).map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <p className="text-[9px] font-bold text-white uppercase leading-tight print:text-black flex-1">{cert.title}</p>
                    <span className="text-[8px] font-mono text-gray-500 uppercase shrink-0">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print, nav, footer { display: none !important; }
          body { background: white !important; color: black !important; -webkit-print-color-adjust: exact !important; }
          #resume-sheet { padding: 0 !important; border: none !important; margin: 0 !important; width: 100% !important; background: white !important; }
          * { box-shadow: none !important; }
          @page { margin: 15mm; size: a4 portrait; }
        }
      `}</style>
    </div>
  );
}

