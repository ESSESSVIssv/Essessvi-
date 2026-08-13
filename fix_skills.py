import re

with open('src/components/Skills.tsx', 'r') as f:
    content = f.read()

new_skills = """/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <span className="text-brand font-sans uppercase tracking-widest text-xs mb-4 block font-bold">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-text-main mb-6">
            PRODUCT & TECHNICAL SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xl font-display font-bold uppercase tracking-widest text-brand mb-8 pb-4 border-b border-border">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    <span className="font-sans font-medium text-text-main/80">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

with open('src/components/Skills.tsx', 'w') as f:
    f.write(new_skills)
