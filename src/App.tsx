/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import AgentRoomAICaseStudy from './components/AgentRoomAICaseStudy';
import SpareXChangeCaseStudy from './components/SpareXChangeCaseStudy';
import JobLenceCaseStudy from './components/JobLenceCaseStudy';
import ResearchPage from './components/ResearchPage';
import ProductTeardowns from './components/ProductTeardowns';
import AboutPage from './components/AboutPage';
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg flex flex-col selection:bg-brand selection:text-white">
        <Navigation />
        <main className="flex-1 mt-16 md:mt-20">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Work & Dedicated Case Studies */}
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/agentroomai" element={<AgentRoomAICaseStudy />} />
            <Route path="/work/sparexchange" element={<SpareXChangeCaseStudy />} />
            <Route path="/work/joblence" element={<JobLenceCaseStudy />} />

            {/* Research */}
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/research/farmer-token" element={<ResearchPage />} />

            {/* Teardowns */}
            <Route path="/teardowns" element={<ProductTeardowns />} />
            <Route path="/teardowns/cashkaro" element={<ProductTeardowns />} />

            {/* About, Resume, Contact */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirects for clean routing */}
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/experience" element={<Navigate to="/about" replace />} />
            <Route path="/skills" element={<Navigate to="/about" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
