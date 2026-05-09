/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'py-4' : 'py-10'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-brand flex items-center justify-center rounded-2xl font-display font-black text-black text-xl group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(255,122,0,0.5)]">
            V
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-white uppercase hidden sm:block">
            {PERSONAL_INFO.firstName}
          </span>
        </motion.div>

        <div className="flex items-center gap-1 p-1.5 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2.5 rounded-2xl text-[10px] font-mono tracking-[0.2em] font-black text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex px-8 py-3 bg-white text-black font-display font-black text-xs uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Contact me
        </a>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand origin-left" 
        style={{ scaleX }} 
      />
    </motion.nav>
  );
}
