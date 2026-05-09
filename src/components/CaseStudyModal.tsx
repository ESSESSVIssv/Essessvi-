/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="w-full max-w-5xl h-full bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <X size={20} />
          </button>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Hero Section */}
            <header className="relative py-24 px-8 md:px-16 border-b border-white/5 bg-gradient-to-br from-brand/5 to-transparent">
              <div className="max-w-4xl">
                <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] mb-6 block font-bold">
                  PM Case Study · 2024–2025
                </span>
                <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-none tracking-tighter mb-12 uppercase">
                  Spare<span className="text-brand">Xchange</span>
                </h1>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Role</span>
                    <span className="text-white font-bold text-sm tracking-tight">AI Developer & PM</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Domain</span>
                    <span className="text-white font-bold text-sm tracking-tight">Auto Marketplace</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Stack</span>
                    <span className="text-white font-bold text-sm tracking-tight">Google AI / Gemini</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Type</span>
                    <span className="text-white font-bold text-sm tracking-tight">Full Build</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="max-w-4xl mx-auto px-8 md:px-16 py-16 space-y-24">
              {/* Problem */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand font-mono text-xs font-bold">01</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-8">A Problem I Lived Before I Solved It</h2>
                <div className="bg-white/5 border-l-4 border-brand p-8 mb-8 italic text-xl text-gray-300">
                  "Finding genuine, fairly priced spare parts for my vehicle was frustrating — I never knew if I was getting the right part, at the right price, from a trustworthy seller."
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  The Indian automobile spare parts market is fragmented, unorganized, and trust-deficient. Buyers face three core pain points: fake or incompatible parts, price opacity, and unreliable delivery. Second-hand parts — which could save buyers 40–60% — have no structured marketplace at all.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {['Personal Pain Point', 'Unorganized Market', 'Trust Deficit', 'Price Opacity'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Users */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand font-mono text-xs font-bold">02</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-8">Two Users. One Platform.</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-brand font-mono text-2xl font-bold block mb-4">01</span>
                    <h3 className="text-xl font-display font-black text-white uppercase mb-2">Buyers</h3>
                    <p className="text-gray-500 text-sm italic">Vehicle owners & mechanics looking for parts.</p>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-brand font-mono text-2xl font-bold block mb-4">02</span>
                    <h3 className="text-xl font-display font-black text-white uppercase mb-2">Sellers</h3>
                    <p className="text-gray-500 text-sm italic">Garages and vendors listing spare parts.</p>
                  </div>
                </div>
              </section>

              {/* Key Decision */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand font-mono text-xs font-bold">03</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-8">The Split-Payment Solution</h2>
                <div className="p-8 bg-white/5 border border-brand/20 relative overflow-hidden rounded-2xl mb-8">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand"></div>
                  <span className="font-mono text-[10px] text-brand uppercase tracking-widest block mb-4 font-bold">Core Logic</span>
                  <h3 className="text-2xl font-display font-black text-white uppercase mb-4">50/50 Escrow-Style Model</h3>
                  <p className="text-gray-400">
                    Buyers pay 50% upfront at order placement. The remaining 50% is released only upon confirmed delivery — verified via OTP. This protects buyers from fraud and gives sellers confidence of partial payment before dispatch.
                  </p>
                </div>
                <div className="p-8 bg-white/5 border border-brand/20 relative overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand"></div>
                  <span className="font-mono text-[10px] text-brand uppercase tracking-widest block mb-4 font-bold">Verification</span>
                  <h3 className="text-2xl font-display font-black text-white uppercase mb-4">QR Code + OTP Auth</h3>
                  <p className="text-gray-400">
                    At delivery, a QR code is scanned and OTP entered by the buyer to release the final 50%. This creates an auditable, tamper-resistant confirmation moment.
                  </p>
                </div>
              </section>

              {/* Built */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand font-mono text-xs font-bold">04</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-8">The Complete Feature Set</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Auth', desc: 'Secure role-based access.' },
                    { title: 'Listings', desc: 'New & second-hand inventory.' },
                    { title: 'Checkout', desc: 'Full-cycle split payment cart.' },
                    { title: 'Tracking', desc: 'Real-time order status views.' },
                    { title: 'Payments', desc: 'QR + OTP delivery release.' },
                    { title: 'Admin', desc: 'Backend dashboard for scale.' }
                  ].map(f => (
                    <div key={f.title} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                      <h4 className="text-white font-bold text-sm uppercase mb-2 tabular-nums tracking-tighter">{f.title}</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed uppercase">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Outcomes */}
              <section className="bg-brand py-16 px-8 rounded-3xl text-black">
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-12">Built Solo. Impact Real.</h2>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <span className="text-5xl font-display font-black block leading-none mb-2">06</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest block">Features Shipped</span>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl font-display font-black block leading-none mb-2">50/50</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest block">Trust Logic</span>
                  </div>
                  <div className="text-center">
                    <span className="text-5xl font-display font-black block leading-none mb-2">0→1</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest block">solo build</span>
                  </div>
                </div>
              </section>

              {/* Learnings */}
              <section>
                 <div className="flex items-center gap-4 mb-8">
                  <span className="text-brand font-mono text-xs font-bold">06</span>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-8">Post-Mortem Analysis</h2>
                <div className="space-y-4">
                  {[
                    { l: 'L1', t: 'Talk to sellers earlier', d: 'Surfacing real vendor friction points like listing fatigue should happen before dev.' },
                    { l: 'L2', t: 'Seed strategy vs full launch', d: 'Onboarding 10 manual vendors initially would have reduced platform churn.' },
                    { l: 'L3', t: 'Metrics-driven builds', d: 'Setting success KPIs should happen before the first line of code.' }
                  ].map(item => (
                    <div key={item.l} className="flex gap-6 p-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                      <span className="text-brand font-mono font-bold">{item.l}</span>
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-tight mb-2">{item.t}</h4>
                        <p className="text-gray-500 text-sm">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer CTA */}
              <div className="text-center pt-8 border-t border-white/5">
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-8">Want to discuss this case study?</p>
                <a href="mailto:vessessvi2005@gmail.com" className="px-12 py-5 bg-brand text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all inline-block">
                  Initiate Correspondence
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
