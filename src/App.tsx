/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[calc(100vh-200px)]"
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore React Router's type definition lacks key, but AnimatePresence needs it on the direct child. */}
      <Routes location={location} key={location.pathname as string}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/vision" element={<PageWrapper><Vision /></PageWrapper>} />
        <Route path="/stack" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/journey" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/awards" element={<PageWrapper><Certifications /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        <Route path="/connect" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg flex flex-col">
        <Navigation />
        <main className="flex-1 mt-20 lg:mt-0">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
