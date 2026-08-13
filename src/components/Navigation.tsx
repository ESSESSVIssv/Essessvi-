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
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-bg border-b-2 border-border shadow-none' 
            : 'py-8 border-b-2 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-brand flex items-center justify-center rounded-2xl font-display font-medium text-bg text-xl group-hover:rotate-12 group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(184,115,51,0.5)]">
              {PERSONAL_INFO.firstName[0]}
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-text-main uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 hidden sm:block">
              {PERSONAL_INFO.firstName}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={`relative font-sans text-xs tracking-[0.15em] transition-colors duration-300 ease-in-out uppercase font-semibold ${
                    isActive ? 'text-brand' : 'text-[#111111] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:flex px-8 py-4 bg-brand text-white font-sans font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-text-main transition-colors items-center"
            >
              Let's Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-3 bg-text-main text-white border-2 border-text-main transition-colors hover:bg-bg hover:text-text-main"
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
              <span className="font-display font-bold text-2xl text-text-main uppercase tracking-tighter">
                Navigation
              </span>
              <button 
                className="p-4 bg-text-main text-white border-2 border-text-main"
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
                  className={`text-4xl font-display font-bold uppercase tracking-tighter hover:text-brand transition-colors ${
                    pathname === link.href ? 'text-brand' : 'text-text-main'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-12 border-t-2 border-text-main flex items-center justify-between">
              <div className="flex gap-6">
                {/* Social links could go here */}
              </div>
              <span className="text-[10px] font-sans text-text-main uppercase tracking-widest font-bold">
                {PERSONAL_INFO.name} // 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
