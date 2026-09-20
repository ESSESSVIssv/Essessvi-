/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import UserResearch from './UserResearch';
import { ArrowLeft } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <Link 
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-text-main/70 hover:text-brand transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> View All Work
        </Link>
      </div>

      <UserResearch />
    </div>
  );
}
