import React from 'react';

export const sparexchangeSlides = [
  {
    id: 1,
    title: "Cover & Overview",
    category: "Overview",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto space-y-6">
        <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] font-extrabold px-3 py-1 bg-brand/10 rounded-full inline-block mx-auto mb-8">
          Product Management Case Study
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-bg uppercase tracking-tighter leading-tight mb-8 text-center">
          Spare<span className="text-brand">XChange</span>
        </h1>
        <div className="h-1 w-24 bg-brand/50 mx-auto rounded-full mb-12" />
        
        <div className="bg-white/5 border-l-4 border-brand p-8 text-lg md:text-xl text-gray-300 leading-relaxed font-normal mb-12 rounded-r-xl">
          A dedicated marketplace for new and used vehicle spare parts connecting buyers, garages, and verified sellers across the ecosystem.
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase mb-8">Two Users. One Platform.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-white/5 border border-text-main/20 rounded-2xl">
            <span className="text-brand font-mono text-2xl font-bold block mb-4">01</span>
            <h3 className="text-xl font-display font-medium text-bg uppercase mb-2">Buyers</h3>
            <p className="text-bg/40 text-sm italic font-normal">Vehicle owners & mechanics looking for parts.</p>
          </div>
          <div className="p-8 bg-white/5 border border-text-main/20 rounded-2xl">
            <span className="text-brand font-mono text-2xl font-bold block mb-4">02</span>
            <h3 className="text-xl font-display font-medium text-bg uppercase mb-2">Sellers</h3>
            <p className="text-bg/40 text-sm italic font-normal">Garages and vendors listing spare parts.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Split-Payment Solution",
    category: "Product Logic",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-brand font-mono text-xs font-light">03</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase mb-8">The Split-Payment Solution</h2>
        
        <div className="p-8 bg-white/5 border border-brand/20 relative overflow-hidden rounded-2xl mb-8">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand"></div>
          <span className="font-mono text-[10px] text-brand uppercase tracking-widest block mb-4 font-light">Core Logic</span>
          <h3 className="text-2xl font-display font-bold text-bg uppercase mb-4">50/50 Escrow-Style Model</h3>
          <p className="text-bg/60 font-normal text-base md:text-lg leading-relaxed">
            Buyers pay 50% upfront at order placement. The remaining 50% is released only upon confirmed delivery — verified via OTP. This protects buyers from fraud and gives sellers confidence of partial payment before dispatch.
          </p>
        </div>
        
        <div className="p-8 bg-white/5 border border-brand/20 relative overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand"></div>
          <span className="font-mono text-[10px] text-brand uppercase tracking-widest block mb-4 font-light">Verification</span>
          <h3 className="text-2xl font-display font-bold text-bg uppercase mb-4">QR Code + OTP Auth</h3>
          <p className="text-bg/60 font-normal text-base md:text-lg leading-relaxed">
            At delivery, a QR code is scanned and OTP entered by the buyer to release the final 50%. This creates an auditable, tamper-resistant confirmation moment.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Feature Set & Outcomes",
    category: "Execution",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-brand font-mono text-xs font-light">04</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase mb-8">The Complete Feature Set</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Auth', desc: 'Secure role-based access.' },
            { title: 'Listings', desc: 'New & second-hand inventory.' },
            { title: 'Checkout', desc: 'Full-cycle split payment cart.' },
            { title: 'Tracking', desc: 'Real-time order status views.' },
            { title: 'Payments', desc: 'QR + OTP delivery release.' },
            { title: 'Admin', desc: 'Backend dashboard for scale.' }
          ].map(f => (
            <div key={f.title} className="p-6 bg-white/5 border border-text-main/20 rounded-xl">
              <h4 className="text-bg text-sm uppercase mb-2 tabular-nums tracking-tighter font-normal">{f.title}</h4>
              <p className="text-bg/40 text-[10px] leading-relaxed uppercase font-normal">{f.desc}</p>
            </div>
          ))}
        </div>

        <section className="bg-brand py-12 md:py-16 px-8 rounded-3xl text-bg mb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 text-center">Built Solo. Impact Real.</h2>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-display font-bold block leading-none mb-2">06</span>
              <span className="text-[9px] md:text-[10px] font-mono font-light uppercase tracking-widest block">Features Shipped</span>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-display font-bold block leading-none mb-2">50/50</span>
              <span className="text-[9px] md:text-[10px] font-mono font-light uppercase tracking-widest block">Trust Logic</span>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-display font-bold block leading-none mb-2">0→1</span>
              <span className="text-[9px] md:text-[10px] font-mono font-light uppercase tracking-widest block">solo build</span>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 4,
    title: "Learnings & Contact",
    category: "Conclusion",
    render: ({ navigate, onClose }: any) => (
      <div className="flex flex-col justify-center min-h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-brand font-mono text-xs font-light">06</span>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-bg uppercase mb-8">Post-Mortem Analysis</h2>
        <div className="space-y-4 mb-12">
          {[
            { l: 'L1', t: 'Talk to sellers earlier', d: 'Surfacing real vendor friction points like listing fatigue should happen before dev.' },
            { l: 'L2', t: 'Seed strategy vs full launch', d: 'Onboarding 10 manual vendors initially would have reduced platform churn.' },
            { l: 'L3', t: 'Metrics-driven builds', d: 'Setting success KPIs should happen before the first line of code.' }
          ].map(item => (
            <div key={item.l} className="flex gap-4 md:gap-6 p-6 md:p-8 border-b border-text-main/10 last:border-0 hover:bg-white/5 transition-colors group">
              <span className="text-brand font-mono font-medium text-lg">{item.l}</span>
              <div>
                <h4 className="text-bg font-medium uppercase tracking-tight mb-2 text-sm md:text-base">{item.t}</h4>
                <p className="text-bg/60 text-sm font-normal">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 border-t border-text-main/10 mt-auto">
          <p className="text-bg/40 font-mono text-xs uppercase tracking-widest mb-8">Want to discuss this case study?</p>
          <button 
            onClick={() => {
              onClose();
              navigate('/connect');
            }}
            className="px-12 py-5 bg-brand text-bg font-display font-light text-xs md:text-sm uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all inline-block"
          >
            Let's Connect
          </button>
        </div>
      </div>
    )
  }
];
