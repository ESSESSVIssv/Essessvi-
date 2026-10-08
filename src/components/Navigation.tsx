/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-200 ${
          scrolled 
            ? 'py-3.5 sm:py-4 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-2xs' 
            : 'py-4 sm:py-6 bg-[#FAF9F6]/85 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo - EXACTLY V. ESSESSVI in copper color */}
          <Link 
            to="/"
            className="flex items-center gap-2 cursor-pointer group py-1"
          >
            <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#B87333] uppercase group-hover:opacity-85 transition-opacity">
              V. ESSESSVI
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(link.href);

              return (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={`font-sans text-xs tracking-wider uppercase font-bold transition-colors py-1.5 ${
                    isActive 
                      ? 'text-[#B87333] border-b-2 border-[#B87333]' 
                      : 'text-neutral-700 hover:text-[#B87333]'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 bg-white border border-neutral-200 text-neutral-900 hover:text-[#B87333] hover:border-[#B87333]/50 transition-colors shadow-2xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B87333] origin-left" 
          style={{ scaleX }} 
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col p-5 sm:p-8 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-black text-lg text-[#B87333] uppercase"
              >
                V. ESSESSVI
              </Link>
              <button 
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 bg-white border border-neutral-200 text-neutral-900 hover:text-[#B87333] transition-colors cursor-pointer shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center gap-4 py-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[48px] flex items-center justify-between text-2xl font-display font-black uppercase tracking-tight py-2 border-b border-neutral-100 transition-colors ${
                      isActive 
                        ? 'text-[#B87333] pl-2 border-l-4 border-l-[#B87333]' 
                        : 'text-neutral-800 hover:text-[#B87333]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#B87333] translate-x-1' : 'text-neutral-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans text-neutral-600">
              <span>{PERSONAL_INFO.location}, India</span>
              <span className="font-bold text-[#B87333]">Aspiring Product Manager</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
