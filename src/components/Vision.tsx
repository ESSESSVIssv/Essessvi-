/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

export default function Vision() {
  const stats = [
    { label: "Completed projects", value: "05+" },
    { label: "Certifications", value: "10+" },
    { label: "Problem solvings", value: "∞" }
  ];

  return (
    <section id="vision" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-navy uppercase tracking-tighter mb-12">
              TURNING MY <br /> VISION
            </h2>
            <div className="max-w-md">
               <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  {PERSONAL_INFO.bio}
               </p>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12">
               {stats.map((stat, idx) => (
                 <div key={idx}>
                   <div className="text-5xl font-bold text-navy mb-2">{stat.value}</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {stat.label}
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="aspect-[4/5] md:aspect-[3/2] w-full rounded-[3rem] overflow-hidden shadow-2xl relative group bg-slate-100">
                <img 
                   src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
                   alt="Workspace" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                
                {/* Floating Elements like the mock */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 hidden md:block"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full border border-white/20 hidden md:block"></div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
