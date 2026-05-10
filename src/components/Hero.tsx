/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Github, Linkedin, FileText, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 overflow-hidden bg-bg">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-2xl glass mb-12 shadow-[0_0_30px_rgba(255,122,0,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-green-500 font-bold">Open for Internships</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] tracking-tighter text-gradient mb-12 uppercase text-center"
          >
            AI AUTOMATION <br />
            <span className="text-brand">ENGINEER</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="text-lg md:text-2xl font-medium mb-8 tracking-tight uppercase text-center">
              <span className="text-white block mb-3">{PERSONAL_INFO.name}</span>
              <span className="text-brand block leading-tight">AI Workflow Engineer • n8n • APIs • Prompt Engineering</span>
            </div>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium mb-6 text-center">
              I turn ideas into real AI systems — from building a full automobile marketplace to deploying WhatsApp AI bots that run in production.
            </p>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest text-center font-mono">
              1 Company • 3 Projects • 4 Certifications • 4 Months Real Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            <button 
              onClick={() => navigate('/work')}
              className="px-10 py-5 bg-brand text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,122,0,0.3)]"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => navigate('/resume')}
              className="px-10 py-5 glass hover:bg-white/[0.05] text-white font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all border-white/10 flex items-center gap-3 group"
            >
              Resume <FileText className="w-4 h-4 group-hover:text-brand transition-colors" />
            </button>
          </motion.div>

          <div className="flex items-center gap-8 mt-16">
            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-gray-500 hover:text-brand transition-colors">
              <Phone size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1.5px] h-14 bg-gradient-to-b from-brand to-transparent"
        />
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-40 font-bold">Scroll to Explore</span>
      </div>
    </section>
  );
}
