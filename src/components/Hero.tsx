/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 md:px-16 bg-bg flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col pt-12 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-black leading-[0.85] tracking-tighter uppercase mb-10">
            ASPIRING<br />PRODUCT MANAGER
          </h1>
          
          <div className="mt-4 font-sans flex flex-col gap-6">
            <p className="text-sm md:text-base opacity-80 border-b border-text-main/10 pb-6 max-w-2xl">
              1 Company • 4 Projects • 5 Certifications • 4 Months Real Experience
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-2">
              <div className="flex flex-col">
                <div className="text-[10px] font-sans uppercase tracking-[0.15em] opacity-60 mb-2">
                  CURRENT STATUS
                </div>
                <p className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-text-main">
                  OPEN FOR <span className="text-brand">INTERNSHIPS</span>
                </p>
              </div>
              
              <button 
                onClick={() => navigate('/work')}
                className="self-start sm:self-end sm:mb-1 px-8 py-5 bg-brand text-bg font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-text-main transition-colors flex items-center gap-4"
              >
                VIEW PROJECTS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
