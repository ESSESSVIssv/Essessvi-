/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-[85vh] pt-32 pb-20 px-6 md:px-12 bg-bg flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col pt-12 w-full">
          <h2 className="text-sm md:text-base font-sans font-bold uppercase tracking-widest text-brand mb-4">
            PRODUCT PORTFOLIO
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight text-text-main mb-6 break-words hyphens-auto">
            I'M ESSESSVI — <span className="text-brand">AN AI PRODUCT BUILDER WHO BUILDS USEFUL PRODUCTS AND BRINGS THEM TO LIFE.</span>
          </h1>
          
          <p className="text-base md:text-xl font-sans text-text-main/70 w-full leading-relaxed mb-10">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => navigate('/resume')}
              className="px-6 py-4 bg-brand text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-text-main transition-colors flex items-center gap-2"
            >
              View Resume <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="px-6 py-4 bg-transparent border-2 border-text-main text-text-main font-sans font-bold text-xs uppercase tracking-widest hover:bg-text-main hover:text-white transition-colors flex items-center gap-2"
            >
              View Projects
            </button>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-transparent text-text-main font-sans font-bold text-xs uppercase tracking-widest hover:text-brand transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
