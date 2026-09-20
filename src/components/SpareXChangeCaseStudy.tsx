/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2, Layers, QrCode } from 'lucide-react';

export default function SpareXChangeCaseStudy() {
  return (
    <div className="w-full bg-bg py-20 md:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-text-main/70 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <div className="mb-14 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-sans uppercase tracking-widest text-brand font-bold">
              Product Concept & Prototype
            </span>
            <span className="text-text-main/40">·</span>
            <span className="text-xs font-sans text-text-main/60">
              Consumer Product · Marketplace · Product Discovery
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#B87333] mb-3">
            SpareXChange
          </h1>
          <p className="text-xl md:text-2xl font-display font-bold text-brand mb-6">
            Finding the right spare part shouldn't require searching everywhere.
          </p>

          <p className="text-base font-sans text-text-main/80 leading-relaxed max-w-3xl">
            I explored the problem of finding automobile spare parts when availability, condition, price, and trust are unclear. The product concept brings first-hand and second-hand parts into one marketplace and focuses on helping users discover available parts with more confidence.
          </p>
        </div>

        {/* Problem */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            The Problem
          </h2>
          <div className="space-y-4 text-sm md:text-base font-sans text-text-main/80 leading-relaxed">
            <p>
              When a vehicle breaks down, sourcing specific replacement parts—especially for older or discontinued models—is an exhausting offline ordeal. Car owners and independent garage mechanics are forced to visit multiple physical scrapyards, call informal part dealers, and negotiate blindly.
            </p>
            <p>
              Even when a part is found, two major uncertainties remain: <strong>compatibility</strong> (Will it actually fit my specific vehicle trim?) and <strong>condition</strong> (Is this second-hand part functional or defective?). Without standardized grading or buyer protection, transactions often end in disputes.
            </p>
          </div>
        </section>

        {/* Target Users */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Target Users
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-sans">
            <div className="p-5 bg-white border border-border">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-brand block mb-1">
                Primary Buyer Persona
              </span>
              <h3 className="font-display font-bold text-base text-[#B87333] mb-2">
                Vehicle Owners & Enthusiasts
              </h3>
              <p className="text-text-main/70 leading-relaxed">
                Individuals seeking reliable replacement parts without paying exorbitant dealership markups, needing clear fitment confirmation and verified condition photos.
              </p>
            </div>

            <div className="p-5 bg-white border border-border">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-brand block mb-1">
                Secondary Buyer & Supply Persona
              </span>
              <h3 className="font-display font-bold text-base text-[#B87333] mb-2">
                Independent Garage Mechanics & Dismantlers
              </h3>
              <p className="text-text-main/70 leading-relaxed">
                Mechanics sourcing components on tight deadlines, and verified recyclers looking for a transparent digital channel to list salvageable inventory.
              </p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Research & Discovery
          </h2>
          <div className="space-y-4 text-sm font-sans text-text-main/80 leading-relaxed">
            <p>
              To understand the root barriers, I spoke with local garage mechanics and vehicle owners who had recently tried sourcing non-OEM parts. The core finding was clear: the primary hurdle wasn't just price—it was <strong>risk anxiety</strong>.
            </p>
            <p>
              Buyers expressed consistent frustration with unreturnable parts, mismatched part numbers, and fear of getting scammed when paying upfront to unknown sellers.
            </p>
          </div>
        </section>

        {/* User Insights */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Key User Insights
          </h2>
          <div className="space-y-3 font-sans text-xs md:text-sm">
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Fitment Verification Matters More Than Pure Speed:</strong>
              <span className="text-text-main/70">A part arriving quickly is useless if the mounting bracket differs by 2 millimeters. Users wanted exact vehicle model, year, and chassis compatibility verification.</span>
            </div>
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Trust Requires Inspection Before Final Payout:</strong>
              <span className="text-text-main/70">Buyers were unwilling to transfer full payments before verifying that a second-hand alternator or sensor was in working order.</span>
            </div>
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Suppliers Avoid Clunky Enterprise Portals:</strong>
              <span className="text-text-main/70">Scrap yards and part dealers operate via mobile phones. Listing tools must require minimal typing with camera-first photo uploads.</span>
            </div>
          </div>
        </section>

        {/* User Journey */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            User Journey Map
          </h2>
          <div className="p-6 bg-white border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-sans">
              <div className="p-3 bg-bg border border-border/80">
                <span className="font-mono text-brand font-bold block mb-1">01. Discovery</span>
                <strong className="text-text-main block mb-1">Search by Vehicle</strong>
                <p className="text-text-main/70">Select Make, Model, Year & Component category with part-number matching.</p>
              </div>
              <div className="p-3 bg-bg border border-border/80">
                <span className="font-mono text-brand font-bold block mb-1">02. Comparison</span>
                <strong className="text-text-main block mb-1">Condition & Origin</strong>
                <p className="text-text-main/70">View OEM new vs. verified used options with transparent condition grading.</p>
              </div>
              <div className="p-3 bg-bg border border-border/80">
                <span className="font-mono text-brand font-bold block mb-1">03. Handshake</span>
                <strong className="text-text-main block mb-1">Escrow Hold</strong>
                <p className="text-text-main/70">Funds held securely; seller prepares part for courier or local pickup.</p>
              </div>
              <div className="p-3 bg-bg border border-border/80">
                <span className="font-mono text-brand font-bold block mb-1">04. Verification</span>
                <strong className="text-text-main block mb-1">OTP / QR Release</strong>
                <p className="text-text-main/70">Buyer inspects physical fitment and scans QR/OTP to release payout.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Observed Pain Points
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-sans">
            <div className="p-4 bg-white border border-border flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Zero Standardized Condition Rating</strong>
                <span className="text-text-main/70">Used parts categorized vaguely as "good condition" without wear details.</span>
              </div>
            </div>
            <div className="p-4 bg-white border border-border flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-main block">Frequent Return Disputes</strong>
                <span className="text-text-main/70">Disagreements over whether a part was damaged in transit or was already defective.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Opportunities */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Product Opportunities
          </h2>
          <div className="space-y-3 text-xs md:text-sm font-sans">
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Dual Inventory Sourcing:</strong>
              <span className="text-text-main/70">Aggregate both first-hand aftermarket components and certified second-hand parts in one unified search feed.</span>
            </div>
            <div className="p-4 bg-white border border-border">
              <strong className="text-text-main block mb-1">Two-Way Handshake Protection:</strong>
              <span className="text-text-main/70">Introduce an escrow hold mechanism that releases seller payout only after in-person inspection and QR verification.</span>
            </div>
          </div>
        </section>

        {/* Product Scope & Prioritization */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Initial Product Scope & Feature Prioritization
          </h2>
          <div className="space-y-4 text-sm font-sans text-text-main/80 leading-relaxed">
            <p>
              To ensure practical execution, I prioritized features that tackled the trust barrier first, deferring complex logistics and automated bidding to later stages:
            </p>
            <div className="p-5 bg-white border border-border space-y-3 text-xs md:text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-text-main block">Included in First Version:</strong>
                  <span className="text-text-main/70">Vehicle Make/Model/Trim search filtering, clear multi-angle image uploads, transparent pricing, and QR/OTP payment confirmation.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full border border-text-main/30 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✕</div>
                <div>
                  <strong className="text-text-main block">Deferred from Scope:</strong>
                  <span className="text-text-main/70">Cross-country courier logistics integration, dynamic auction bidding, and third-party warranty underwriting.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototype */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Prototype & Interaction Flow
          </h2>
          <div className="p-6 bg-white border border-border text-xs md:text-sm font-sans space-y-4">
            <p className="text-text-main/80 leading-relaxed">
              The prototype centered on giving buyers confidence before initiating payment:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-bg border border-border/80">
                <strong className="text-text-main block mb-1">1. Part Detail View</strong>
                <p className="text-text-main/70">Vehicle compatibility badge, detailed inspection photos, seller rating, and transparent price.</p>
              </div>
              <div className="p-4 bg-bg border border-border/80">
                <strong className="text-text-main block mb-1">2. Escrow Deposit</strong>
                <p className="text-text-main/70">Buyer authorizes payment hold; funds locked safely until delivery handshake.</p>
              </div>
              <div className="p-4 bg-bg border border-border/80">
                <strong className="text-text-main block mb-1">3. Handshake Release</strong>
                <p className="text-text-main/70">Buyer scans seller's QR code or enters OTP upon inspecting part, completing transaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Decisions */}
        <section className="mb-14">
          <h2 className="text-2xl font-display font-bold text-[#B87333] mb-4">
            Product Decisions & Trade-offs
          </h2>
          <div className="space-y-4 text-sm font-sans text-text-main/80 leading-relaxed">
            <div className="p-5 bg-white border border-border">
              <h3 className="font-display font-bold text-base text-[#B87333] mb-1">
                Handshake OTP vs. Standard E-Commerce Checkout
              </h3>
              <p>
                A traditional "buy now and wait" e-commerce checkout fails in used automobile parts because returns are costly and contentious. Choosing a localized handshake model with QR/OTP release aligned with user habits: inspect the part at the garage, verify fitment, and confirm payment instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-14 p-6 bg-brand/5 border-l-4 border-brand">
          <h2 className="text-xl font-display font-bold text-[#B87333] mb-3">
            What I Learned
          </h2>
          <div className="space-y-3 text-sm font-sans text-text-main/80 leading-relaxed">
            <p>
              Marketplace products succeed or fail based on <strong>trust mechanics</strong>. If buyers suspect that a platform will leave them stuck with a defective part, no amount of discount will convince them to convert.
            </p>
            <p>
              Designing for both sides requires empathy for the supplier as well—if part listing is too complicated, sellers revert to WhatsApp groups, draining platform inventory.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/work/agentroomai"
            className="text-xs font-sans font-bold uppercase tracking-wider text-text-main/60 hover:text-brand transition-colors"
          >
            ← Previous: AgentRoomAI
          </Link>
          <Link
            to="/research/farmer-token"
            className="text-xs font-sans font-bold uppercase tracking-wider text-brand hover:text-text-main inline-flex items-center gap-1.5 transition-colors"
          >
            Next: Farmer Token →
          </Link>
        </div>

      </div>
    </div>
  );
}
