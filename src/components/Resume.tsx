import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS, CLUBS } from '../constants';
import { Download } from 'lucide-react';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="min-h-screen bg-bg py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex justify-end items-center mb-12">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-brand text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-text-main transition-colors"
        >
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-border shadow-sm p-8 md:p-16 print:p-0 print:border-none print:shadow-none">
        
        {/* Header */}
        <div className="text-center border-b-2 border-text-main pb-6 mb-6">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-2">{PERSONAL_INFO.name}</h2>
          <p className="text-lg md:text-xl font-medium mb-4">{PERSONAL_INFO.role}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-sans">
            <span>{PERSONAL_INFO.phone}</span>
            <span>|</span>
            <span>{PERSONAL_INFO.email}</span>
            <span>|</span>
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-sans mt-2">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn: {PERSONAL_INFO.linkedin}</a>
            <span>|</span>
            <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Portfolio: {PERSONAL_INFO.website}</a>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-6 border-b border-border pb-6">
          <h3 className="text-lg font-display font-bold uppercase tracking-widest mb-3 border-b-2 border-text-main inline-block">Profile</h3>
          <p className="text-sm font-sans leading-relaxed">{PERSONAL_INFO.bio}</p>
        </div>

        {/* Skills */}
        <div className="mb-6 border-b border-border pb-6">
          <h3 className="text-lg font-display font-bold uppercase tracking-widest mb-3 border-b-2 border-text-main inline-block">Skills</h3>
          <div className="flex flex-col gap-2 text-sm font-sans">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx}>
                <strong>{skillGroup.category}: </strong>
                {skillGroup.items.join(" | ")}
              </div>
            ))}
          </div>
        </div>

        {/* Experience / Projects */}
        <div className="mb-6 border-b border-border pb-6">
          <h3 className="text-lg font-display font-bold uppercase tracking-widest mb-4 border-b-2 border-text-main inline-block">Work Experience / Projects</h3>
          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-bold font-sans">{exp.company}</h4>
                  <span className="text-sm font-sans font-medium">{exp.period}</span>
                </div>
                <div className="text-sm font-sans font-medium italic mb-2">Role: {exp.title}</div>
                <ul className="list-disc pl-5 text-sm font-sans space-y-1">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-6 border-b border-border pb-6">
          <h3 className="text-lg font-display font-bold uppercase tracking-widest mb-4 border-b-2 border-text-main inline-block">Education</h3>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold font-sans">{edu.institution}</h4>
                  <div className="text-sm font-sans">{edu.degree}</div>
                  <div className="text-sm font-sans font-medium">{edu.description}</div>
                </div>
                <span className="text-sm font-sans font-medium">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6 border-b border-border pb-6">
          <h3 className="text-lg font-display font-bold uppercase tracking-widest mb-4 border-b-2 border-text-main inline-block">Certifications</h3>
          <ul className="list-disc pl-5 text-sm font-sans space-y-1">
            {CERTIFICATIONS.map((cert, idx) => (
              <li key={idx}>
                <span className="font-medium">{cert.title}</span> - {cert.issuer} ({cert.date})
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
