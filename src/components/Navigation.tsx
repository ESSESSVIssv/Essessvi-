/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { Menu, X } from 'lucide-react';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-200 ${
          scrolled 
            ? 'py-4 bg-bg/95 backdrop-blur border-b border-border shadow-xs' 
            : 'py-6 bg-bg/80 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo - EXACTLY V. ESSESSVI in copper color */}
          <Link 
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="font-display font-black text-base md:text-lg tracking-tight text-[#B87333] uppercase group-hover:opacity-85 transition-opacity">
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
                  className={`font-sans text-xs tracking-wider uppercase font-semibold transition-colors py-1 ${
                    isActive 
                      ? 'text-brand font-bold border-b-2 border-brand' 
                      : 'text-text-main/70 hover:text-brand'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              className="p-2.5 bg-white border border-border text-text-main hover:bg-bg transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand origin-left" 
          style={{ scaleX }} 
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col p-6 sm:p-8 lg:hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="font-display font-black text-lg text-[#B87333] uppercase">
                V. ESSESSVI
              </span>
              <button 
                className="p-2.5 bg-white border border-border text-text-main cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 py-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-display font-bold uppercase tracking-tight transition-colors ${
                      isActive ? 'text-brand' : 'text-text-main hover:text-brand'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between text-xs font-sans text-text-main/60">
              <span>{PERSONAL_INFO.location}</span>
              <span className="font-semibold text-brand">Product Management</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
