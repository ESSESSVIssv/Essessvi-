/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CLUBS } from '../constants';
import { Users, ShieldCheck, Heart } from 'lucide-react';

export default function Community() {
  const icons = [Users, ShieldCheck, Heart];

  return (
    <section className="min-h-screen bg-bg py-32 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-brand font-mono uppercase tracking-[0.4em] text-xs mb-8 block font-bold">
            Community & Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-gradient leading-[1.1]">
            ACTIVE <br />
            <span className="text-brand">INVOLVEMENT.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLUBS.map((club, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={club.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="premium-card p-10 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-8 group-hover:scale-110 transition-all duration-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-tight group-hover:text-brand transition-colors">
                  {club.role}
                </h3>
                <p className="text-brand font-mono text-[10px] uppercase tracking-widest font-bold mb-6">
                  {club.organization}
                </p>
                <div className="h-[1px] w-12 bg-brand/30 mb-6 group-hover:w-24 transition-all duration-500" />
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {club.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
