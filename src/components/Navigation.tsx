/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-bg/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-brand flex items-center justify-center rounded-2xl font-display font-medium text-[#F5F1E8] text-xl group-hover:rotate-12 group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(255,122,0,0.5)]">
              {PERSONAL_INFO.firstName[0]}
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
              {PERSONAL_INFO.firstName}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={`relative px-5 py-2.5 rounded-2xl text-[10px] font-serif tracking-[0.2em] font-medium transition-all uppercase ${
                    isActive ? 'text-brand' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-2 right-2 h-[2px] bg-brand/40"
                    />
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <Link
              to="/connect"
              className="hidden sm:flex px-5 py-2 bg-brand text-[#F5F1E8] font-display font-light text-[9px] uppercase tracking-[0.15em] rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,122,0,0.2)] group items-center"
            >
              Let's Talk
              <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent origin-center" 
          style={{ scaleX }} 
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col p-8 lg:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-display font-bold text-2xl text-white uppercase tracking-tighter">
                Navigation
              </span>
              <button 
                className="p-4 bg-white/5 border border-white/10 rounded-3xl text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    navigate(link.href);
                  }}
                  className={`text-4xl font-serif font-medium uppercase tracking-tighter hover:text-brand transition-colors ${
                    pathname === link.href ? 'text-brand' : 'text-white/40'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-6">
                {/* Social links could go here */}
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-light font-normal">
                {PERSONAL_INFO.name} // 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
