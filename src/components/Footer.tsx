/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-bg py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-display font-black text-white tracking-tighter uppercase mb-2">
            {PERSONAL_INFO.name}
          </h2>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
            AI Product Builder | Product Management Enthusiast
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4 items-center">
             <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
             <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                Located in {PERSONAL_INFO.location}
             </p>
          </div>
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em] font-bold">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
