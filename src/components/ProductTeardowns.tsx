/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { 
  AlertCircle, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ProductTeardowns() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="text-xs font-sans uppercase tracking-widest text-brand font-bold mb-2">
            Independent Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-4">
            Product Teardowns
          </h1>
          <p className="text-base md:text-lg font-sans text-text-main/75 max-w-2xl leading-relaxed">
            Product observations based on publicly visible user experiences. These are independent analyses, not internal company research.
          </p>
        </div>

        {/* CashKaro Teardown Article */}
        <article className="bg-white border border-border p-8 md:p-12 shadow-xs">
          
          {/* Teardown Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-brand text-white font-sans font-bold text-xs uppercase tracking-wider">
              Independent Product Teardown
            </span>
            <span className="text-text-main/40">·</span>
            <span className="text-xs font-sans text-text-main/60">
              E-Commerce Rewards · Cashback & Coupon Discovery
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-[#B87333] mb-2">
            CashKaro
          </h2>
          <p className="text-xl md:text-2xl font-display font-bold text-brand mb-6">
            Making savings easier to understand
          </p>

          {/* Independent Research Notice */}
          <div className="p-4 bg-bg border border-border/80 text-xs font-sans text-text-main/70 flex items-start gap-2.5 mb-10">
            <Info className="w-4 h-4 text-brand shrink-0 mt-0.5" />
            <span>
              <strong>Independent Observation Notice:</strong> This analysis is an independent product observation based on the publicly available consumer web and mobile experience. It is not affiliated with or based on internal company data.
            </span>
          </div>

          <div className="space-y-12">

            {/* 01. Product Context */}
            <section>
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                01 — Product Context
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-3">
                How CashKaro Operates in the Market
              </h4>
              <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
                CashKaro is India's leading cashback and coupon platform, functioning as an affiliate discovery intermediary. When shoppers click through CashKaro to partner merchants (such as Amazon, Flipkart, Myntra, or Nykaa), the merchant pays an affiliate commission, which CashKaro shares back with the user as real cashback transferable to their bank account.
              </p>
            </section>

            {/* 02. The User */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                02 — Target User in Focus
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-3">
                The First-Time / New User
              </h4>
              <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed mb-3">
                The first-time visitor arrives through an advertisement, influencer link, or peer referral, typically searching for savings on an upcoming purchase.
              </p>
              <div className="p-4 bg-bg border border-border text-xs md:text-sm font-sans text-text-main/75">
                <strong>Primary Mental Model:</strong> "I want to save money on this specific product right now. Is this genuine, how much will I actually save, and is it worth taking extra redirect steps?"
              </div>
            </section>

            {/* 03. Observation from Public Experience */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                03 — Public Observation
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-3">
                What the Public Experience Shows
              </h4>
              <p className="text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
                When arriving on the homepage or merchant landing page, users are greeted with high-energy promotional banners ("Up to 15% Rewards", "Grab Deal", "Flat ₹150 Cashback"). However, the exact mechanics of how cashback is tracked, when it becomes real cash, and what exact steps are required are distributed across multiple sub-pages and disclaimers.
              </p>
            </section>

            {/* 04. Friction Points Identified */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                04 — Friction Points
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-4">
                Where First-Time Users Encounter Hesitation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-sans">
                <div className="p-4 bg-bg border border-border">
                  <div className="flex items-center gap-2 font-display font-bold text-text-main mb-1.5">
                    <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                    Abstract Percentage Confusion
                  </div>
                  <p className="text-text-main/70 leading-relaxed">
                    Labels like "Up to 8.5% Rewards" leave users guessing the exact monetary savings on a specific cart item before committing to the outbound redirect.
                  </p>
                </div>

                <div className="p-4 bg-bg border border-border">
                  <div className="flex items-center gap-2 font-display font-bold text-text-main mb-1.5">
                    <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                    Tracking Anxiety
                  </div>
                  <p className="text-text-main/70 leading-relaxed">
                    First-time shoppers are anxious about leaving CashKaro and entering Amazon: "Did the link register? How do I know I'll actually receive the money?"
                  </p>
                </div>

                <div className="p-4 bg-bg border border-border">
                  <div className="flex items-center gap-2 font-display font-bold text-text-main mb-1.5">
                    <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                    Pending vs. Confirmed Disparity
                  </div>
                  <p className="text-text-main/70 leading-relaxed">
                    Cashback takes time to clear return windows (often 60–90 days). New users who expect immediate wallet balance feel let down without upfront expectation setting.
                  </p>
                </div>

                <div className="p-4 bg-bg border border-border">
                  <div className="flex items-center gap-2 font-display font-bold text-text-main mb-1.5">
                    <AlertCircle className="w-4 h-4 text-brand shrink-0" />
                    Category Exclusion Uncertainty
                  </div>
                  <p className="text-text-main/70 leading-relaxed">
                    Different product categories on merchants have varying cashback rates (e.g., Electronics vs Apparel). Finding the exact rate requires digging into fine print.
                  </p>
                </div>
              </div>
            </section>

            {/* 05. Publicly Observable Evidence */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                05 — Evidence
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-3">
                Publicly Observable Signals
              </h4>
              <div className="space-y-3 text-xs md:text-sm font-sans text-text-main/80">
                <div className="p-3.5 bg-bg border border-border">
                  <strong>Banner Terminology:</strong> Terms like "Cashback" and "Rewards" are used across adjacent cards without explicit contrast on whether they can be transferred to a bank account or only redeemed as gift cards.
                </div>
                <div className="p-3.5 bg-bg border border-border">
                  <strong>Redirect Interstitial:</strong> The "Taking you to Merchant" intermediate screen acts purely as a loading interstitial rather than reinforcing exact steps or tracking confirmation.
                </div>
              </div>
            </section>

            {/* 06. Hypothesis */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                06 — Hypothesis
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-3">
                The Core Product Hypothesis
              </h4>
              <div className="p-5 bg-brand/5 border-l-4 border-brand text-sm md:text-base font-sans text-text-main/85 leading-relaxed">
                If CashKaro surfaces the <strong>effective final price (Original Price − Calculated Cashback = Net Price)</strong> directly on curated popular products and provides a transparent 3-step timeline before redirect, first-time user trust and outbound conversion velocity will increase.
              </div>
            </section>

            {/* 07. Product Opportunity */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                07 — Product Opportunity
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-3">
                Transforming Abstract Rewards into Concrete Tangible Value
              </h4>
              <p className="text-sm font-sans text-text-main/80 leading-relaxed mb-4">
                Shift from being an overwhelming directory of thousands of coupon codes to a high-confidence savings guide that makes value instantly tangible for hesitant first-time shoppers.
              </p>
            </section>

            {/* 08. Recommendations */}
            <section className="border-t border-border/70 pt-8">
              <h3 className="text-xs font-mono font-bold text-brand uppercase tracking-wider mb-2">
                08 — Recommendation
              </h3>
              <h4 className="text-xl font-display font-bold text-[#B87333] mb-4">
                Practical Product Adjustments
              </h4>
              <div className="space-y-4 text-xs md:text-sm font-sans">
                <div className="p-4 bg-white border border-border shadow-xs">
                  <strong className="text-text-main block mb-1 text-sm">1. Effective Price Display on High-Demand Deals:</strong>
                  <p className="text-text-main/70 leading-relaxed">
                    Instead of displaying "Up to 10% Cashback on Shoes", show concrete examples: "Retail Price: ₹3,000 → CashKaro Cashback: ₹300 → Effective Cost: ₹2,700". This bridges the gap between abstract percentages and real money.
                  </p>
                </div>

                <div className="p-4 bg-white border border-border shadow-xs">
                  <strong className="text-text-main block mb-1 text-sm">2. Value-Reinforcing Interstitial Screen:</strong>
                  <p className="text-text-main/70 leading-relaxed">
                    Upgrade the 3-second redirect screen from a generic loader into a reassurance card: "We are tracking this visit. Complete checkout normally on Amazon. Your ₹300 cashback will appear in Pending within 48 hours."
                  </p>
                </div>

                <div className="p-4 bg-white border border-border shadow-xs">
                  <strong className="text-text-main block mb-1 text-sm">3. Visual Lifecycle Timeline for New Accounts:</strong>
                  <p className="text-text-main/70 leading-relaxed">
                    Provide a simple 3-stage visual tracker in the user profile: (1) Order Tracked (48 hrs) → (2) Return Window Closes (Merchant Verification) → (3) Transfer to Bank Available.
                  </p>
                </div>
              </div>
            </section>

          </div>

        </article>

      </div>
    </div>
  );
}
