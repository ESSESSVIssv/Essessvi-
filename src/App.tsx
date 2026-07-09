/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
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
    <div className="min-h-[calc(100vh-200px)]">
      {children}
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
      <Route path="/vision" element={<PageWrapper><Vision /></PageWrapper>} />
      <Route path="/stack" element={<PageWrapper><Skills /></PageWrapper>} />
      <Route path="/work" element={<PageWrapper><Projects /></PageWrapper>} />
      <Route path="/journey" element={<PageWrapper><Experience /></PageWrapper>} />
      <Route path="/awards" element={<PageWrapper><Certifications /></PageWrapper>} />
      <Route path="/connect" element={<PageWrapper><Contact /></PageWrapper>} />
    </Routes>
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
