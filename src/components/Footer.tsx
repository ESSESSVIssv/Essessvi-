/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white py-14 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link to="/" className="group inline-block mb-1.5">
            <span 
              className="font-display font-black text-lg tracking-tight text-[#B87333] uppercase group-hover:opacity-85 transition-opacity"
              style={{ color: '#B87333' }}
            >
              V. ESSESSVI
            </span>
          </Link>
          <p className="text-xs font-sans text-text-main/60">
            Product-focused CSE graduate · {PERSONAL_INFO.location}
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs font-sans uppercase tracking-wider font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-text-main/70 hover:text-brand transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="text-xs font-sans text-text-main/50">
          © {new Date().getFullYear()} V. Essessvi
        </div>
      </div>
    </footer>
  );
}
