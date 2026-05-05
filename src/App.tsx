/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Workstation from './components/Workstation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Vision />
        <Projects />
        <Experience />
        <Workstation />
        <div id="contact-wrapper" className="bg-[#FAFAFA]">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
