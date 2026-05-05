/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO, NAV_LINKS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-navy mb-4">
              {PERSONAL_INFO.name}<span className="text-blue-600">.</span>
            </h3>
            <p className="text-slate-500 max-w-xs">{PERSONAL_INFO.role}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-500 hover:text-navy transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={`https://${PERSONAL_INFO.linkedin}`} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-navy hover:border-navy hover:bg-white transition-all shadow-sm"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-navy hover:border-navy hover:bg-white transition-all shadow-sm"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-medium border-t border-slate-50 pt-10">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
