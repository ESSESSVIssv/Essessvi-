/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CLUBS } from '../constants';
import { Users, UserCircle } from 'lucide-react';

export default function Clubs() {
  return (
    <section id="clubs" className="bg-[#0B0F19] py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="text-[#FF7A00] font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
            Community
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F9FAFB] uppercase tracking-tighter">
            PROVEN <span className="text-[#FF7A00]">COMMUNITY</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CLUBS.map((club, idx) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-[#FF7A00]/[0.02] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FFB347] flex items-center justify-center text-white shadow-lg shadow-[#FF7A00]/20">
                    <Users size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F9FAFB] mb-1 group-hover:text-[#FF7A00] transition-colors">
                      {club.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#9CA3AF] font-medium">
                      <UserCircle size={16} className="text-[#FF7A00]" />
                      <span>{club.role}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-2 rounded-full border border-white/10 text-[#F9FAFB] text-sm font-bold bg-white/5 whitespace-nowrap">
                  {club.period}
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Users size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
