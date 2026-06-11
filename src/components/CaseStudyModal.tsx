/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Database, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  Sliders, 
  Network, 
  Cpu, 
  Award, 
  User, 
  MapPin, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectType: 'sparexchange' | 'whatsapp' | 'epidemic' | null;
}

export default function CaseStudyModal({ isOpen, onClose, projectType }: CaseStudyModalProps) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentSlide(0); // Reset to first slide when opened
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, projectType]);

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || (projectType !== 'whatsapp' && projectType !== 'epidemic')) return;
      const maxSlide = projectType === 'whatsapp' ? 12 : 17;
      if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(maxSlide, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, projectType]);

  if (!isOpen) return null;

  // Slide definitions for WhatsApp PDF
  const whatsappSlides = [
    {
      id: 1,
      title: "Cover Page",
      category: "Thesis presentation",
      render: () => (
        <div className="flex flex-col justify-between h-full py-12 px-6 md:px-12 text-center relative overflow-hidden">
          {/* Decorative background logo */}
          <div className="absolute right-4 top-4 opacity-10 font-mono text-[9px] uppercase tracking-widest text-right">
            The Apollo University <br /> School of Technology
          </div>
          
          <div className="my-auto space-y-8">
            <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] font-extrabold px-3 py-1 bg-brand/10 rounded-full inline-block">
              Major Project Presentation
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
              AI-Based WhatsApp Agent <br />
              <span className="text-brand">for Automated Communication & Support</span>
            </h1>
            <div className="h-1 w-24 bg-brand/50 mx-auto rounded-full" />
            <p className="text-gray-400 text-sm max-w-2xl mx-auto font-medium">
              School of Technology — Department of Computer Science & Engineering
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-left max-w-4xl mx-auto w-full pt-8 border-t border-white/5 font-mono text-xs text-gray-400">
            <div>
              <span className="text-brand font-bold uppercase tracking-wider block mb-2">Authored By</span>
              <p className="text-white font-bold">V. Essessvi</p>
              <p className="text-[10px] text-gray-500">Reg: 122210602103 | B.Tech CSE</p>
              <p className="text-[10px] text-gray-500">The Apollo University</p>
            </div>
            <div className="text-right">
              <span className="text-brand font-bold uppercase tracking-wider block mb-2">Guided By</span>
              <p className="text-white font-bold">Anandhi G</p>
              <p className="text-[10px] text-gray-500">Department of CSE</p>
              <p className="text-[10px] text-gray-500">School of Technology, TAU</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Abstract",
      category: "overview",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 2 / 13 — Executive Summary</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">What has been Engineered?</h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              <p>
                An AI-driven automated conversational system designed specifically around the WhatsApp Ecosystem. It bridges business support requirements with high-accuracy Natural Language Processing.
              </p>
              <p>
                The core engine interprets user intents dynamically, processes them through predefined support paths, triggers custom workflows, and provides an elegant automated handoff protocols for unresolved queries to reach human agents.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="font-mono text-brand text-2xl font-black block">70%</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Reduction in manual workload</span>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="font-mono text-brand text-2xl font-black block">24/7/365</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Instant availability framework</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Introduction",
      category: "context",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 3 / 13 — Foundations</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">System Demarcations & Importance</h2>
          
          <div className="mb-8 grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-wider">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-gray-500 block">Project Domain</span>
              <span className="text-white font-bold">Intelligent Communication Systems</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-gray-500 block">Sub-Domain</span>
              <span className="text-brand font-bold">AI Chatbots & Natural Language Processing</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-400 font-medium leading-relaxed">
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-white">Customer Expectations:</strong> Modern users demand hyper-fast response windows which manual processes cannot duplicate scales.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-white">Repetitive Query Bottlenecks:</strong> Customer service lists are saturated with FAQs (orders, status, standard answers) creating huge backlogs.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-white">NLP Solutioning:</strong> Intelligent tokenization and intent pairing trigger high-accuracy instant workflows in real time.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Literature Review",
      category: "research",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 lg:px-16 w-full max-w-5xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 4 / 13 — Academic Context</span>
          <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-6">Literature Review & Gaps</h2>
          
          <div className="overflow-x-auto custom-scrollbar border border-white/10 rounded-2xl bg-white/5">
            <table className="w-full text-left font-mono text-[10px] uppercase border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-gray-400">
                  <th className="p-3 font-black">Author & Year</th>
                  <th className="p-3 font-black">Core Paper Title</th>
                  <th className="p-3 font-black">Methodologies</th>
                  <th className="p-3 font-black">Gaps & Failures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="p-3 text-white font-bold">OpenAI et al., 2024</td>
                  <td className="p-3 font-medium">Large Language Models for Conversational AI</td>
                  <td className="p-3">Transformer-based LLMs</td>
                  <td className="p-3 text-brand">High computation & API costs</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">Google Research, 2023</td>
                  <td className="p-3 font-medium">Conversational AI with NLP</td>
                  <td className="p-3">NLP + Deep Learning</td>
                  <td className="p-3 text-brand">Limited emotional & context intelligence</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">IBM Watson, 2022</td>
                  <td className="p-3 font-medium">AI Chatbots in Customer Support</td>
                  <td className="p-3">NLP + Intent Classification</td>
                  <td className="p-3 text-brand">Heavy domain-specialized training data required</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">Microsoft Research, 2021</td>
                  <td className="p-3 font-medium">Task-Oriented Chatbots</td>
                  <td className="p-3">Rule-based + ML models</td>
                  <td className="p-3 text-brand">Conversational rigidity & lack of flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Problem Statement",
      category: "discovery",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 5 / 13 — The Need</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">The Core Friction Points</h2>
          
          <div className="grid md:grid-cols-3 gap-6 font-medium text-sm">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <span className="text-brand font-mono text-xs font-bold uppercase tracking-widest">01 / Volume Churn</span>
              <p className="text-gray-400">Organisations cope with massive daily messaging query loads on WhatsApp that crush human triage capability.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <span className="text-brand font-mono text-xs font-bold uppercase tracking-widest">02 / 24/7 Availability Void</span>
              <p className="text-gray-400">Support windows close overnight, leaving prospects waiting, decreasing customer retention & conversion rates.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <span className="text-brand font-mono text-xs font-bold uppercase tracking-widest">03 / Human resource fatigue</span>
              <p className="text-gray-400">Answering identical shipping, price, and business description questions repetitively wastes vast amounts of human hours.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Objectives",
      category: "goals",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-3xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 6 / 13 — Project Objectives</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Engineered Success Benchmarks</h2>
          
          <div className="space-y-4 text-gray-400 text-sm font-medium">
            {[
              "Automate customer inquiries with minimal latency through WhatsApp APIs.",
              "Construct highly accurate natural language parsers that map intents cleanly.",
              "Support flexible transaction workflows matching payment or e-commerce actions dynamically.",
              "Establish structural escalation triggers ensuring continuous flow back to live support if resolving thresholds fail."
            ].map((text, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 items-center">
                <span className="font-mono text-brand text-xs font-bold pr-2 border-r border-brand/20">0{index + 1}</span>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Manual Support Challenges",
      category: "problem analysis",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 7 / 13 — Challenge Identification</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Systemic Failures of Manual Support</h2>
          
          <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
            <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-2xl">
              <h3 className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">Sequential One-by-One Delays</h3>
              <p className="text-gray-400 text-sm font-medium">
                Human agents can answer only single chats at once. High queues during peak market hours translate directly into negative reviews and churned customers.
              </p>
            </div>
            <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-2xl">
              <h3 className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">High Operational Fatigue</h3>
              <p className="text-gray-400 text-sm font-medium">
                Vast administrative budgets are spent scaling teams to copy-paste identical FAQ answers on standard products, leading to high labor churn.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Conversational Workflows",
      category: "design & logic",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 8 / 13 — The Proposed Solution</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">A Smart Proposed Workflow</h2>
          
          <div className="grid md:grid-cols-5 gap-6 text-xs text-gray-400 font-mono uppercase">
            <div className="p-4 bg-white/5 border border-brand/20 rounded-xl text-center space-y-2">
              <span className="text-brand font-bold block">1. Message Entry</span>
              <p className="text-[9px] text-gray-500">Auto-triggers webhook on target message arrival.</p>
            </div>
            <div className="p-4 bg-white/5 border border-brand/20 rounded-xl text-center space-y-2">
              <span className="text-white font-bold block">2. NLP Intent Parsing</span>
              <p className="text-[9px] text-gray-500">Evaluates parameters and resolves entity keywords.</p>
            </div>
            <div className="p-4 bg-white/5 border border-brand/20 rounded-xl text-center space-y-2">
              <span className="text-white font-bold block">3. State Check</span>
              <p className="text-[9px] text-gray-500">Maps user metadata to support custom workflow.</p>
            </div>
            <div className="p-4 bg-white/5 border border-brand/20 rounded-xl text-center space-y-2">
              <span className="text-brand font-bold block">4. Action Execution</span>
              <p className="text-[9px] text-gray-500">Resolves database items or runs API callouts.</p>
            </div>
            <div className="p-4 bg-white/5 border border-brand/20 rounded-xl text-center space-y-2">
              <span className="text-brand font-bold block">5. Flow Routing</span>
              <p className="text-[9px] text-gray-500">Updates CRM or hands off to human if unresolved.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "System Architecture",
      category: "architecture diagram",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto relative">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 9 / 13 — System Map</span>
          <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-6">Technical Architecture Layout</h2>
          
          <div className="p-6 bg-[#0c0d12] border border-white/5 rounded-2xl space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider text-center">
              <div className="w-full md:w-1/4 p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-brand font-bold block mb-1">Users Interface</span>
                <span className="text-[8px] text-gray-500">WhatsApp Clients</span>
              </div>
              <div className="text-gray-500 hidden md:block">➔</div>
              <div className="w-full md:w-2/4 p-4 bg-white/10 rounded-lg border border-brand/20 space-y-2">
                <span className="text-white font-bold block">AI Chatbot API Gateway / n8n Pipelines</span>
                <div className="flex justify-around text-[7px] text-gray-400 gap-2">
                  <span className="bg-black/50 px-2 py-1 rounded">NLP Processing</span>
                  <span className="bg-black/50 px-2 py-1 rounded">Rule Engine</span>
                  <span className="bg-black/50 px-2 py-1 rounded">Escrow Database</span>
                </div>
              </div>
              <div className="text-gray-500 hidden md:block">➔</div>
              <div className="w-full md:w-1/4 p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-brand font-bold block mb-1">Customer / Agent Response</span>
                <span className="text-[8px] text-gray-500">Direct Delivery</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            <div className="flex justify-center items-center gap-4 text-center font-mono text-[9px] uppercase tracking-widest">
              <div className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl text-red-400 font-bold">
                Escalation Channel ➔ Dedicated Human Operators
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Escalation & Methodology",
      category: "methodology",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 10 / 13 — Machine Learning</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-6">Model Architecture & Classifiers</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center text-sm">
            <div className="space-y-4">
              <h3 className="text-white font-bold uppercase font-display tracking-tight text-xl">Execution Pipeline</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-400 font-medium">
                <li>Acquires raw historic support queries.</li>
                <li>Cleans, normalizes, and tokenizes strings.</li>
                <li>Extracts features via automated NLP.</li>
                <li>Trains ensemble ML classifiers for mapping.</li>
                <li>Routes anomalous queries to the human panel.</li>
              </ol>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-brand font-mono text-xs font-bold uppercase tracking-wider">Models Evaluated</h3>
              <div className="grid grid-cols-2 gap-2 text-center font-mono text-[9px] uppercase text-gray-300">
                <span className="p-2 bg-white/5 rounded border border-white/5">Logistic Regression</span>
                <span className="p-2 bg-white/5 rounded border border-white/5">Random Forest</span>
                <span className="p-2 bg-white/5 rounded border border-white/5">Gradient Boosting</span>
                <span className="p-2 bg-brand text-black font-black rounded">Rule-Based Decision Trees</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Technologies Used",
      category: "stack",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 11 / 13 — Engineering Stack</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Integrated Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-brand uppercase font-black block mb-4 tracking-widest">Programming Languages</span>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Python (Core Engine logic)</li>
                <li>✔ TypeScript / Node (Server integration)</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-white uppercase font-black block mb-4 tracking-widest">Tools & Frameworks</span>
              <ul className="space-y-2 text-gray-300">
                <li>✔ WhatsApp Business API / Twilio</li>
                <li>✔ NLTK & spaCy (NLP Modeling)</li>
                <li>✔ TensorFlow & Scikit-learn (ML Tools)</li>
                <li>✔ n8n (Intelligent Workflows)</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-brand uppercase font-black block mb-4 tracking-widest">Analytics Infrastructure</span>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Pandas & NumPy (Data parsing)</li>
                <li>✔ Matplotlib & Seaborn (Outcomes graphs)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "References",
      category: "citations",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold">Slide 12 / 13 — Bibliography</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Scholarly References Citations</h2>
          
          <ul className="space-y-4 font-mono text-[10px] md:text-xs text-gray-400 leading-normal uppercase">
            <li>
              <span className="text-brand font-bold">[1]</span> A. Sharma, "WhatsApp Chatbots for Customer Service", <span className="text-white font-semibold">IJIRSET</span>, 2024.
            </li>
            <li>
              <span className="text-brand font-bold">[2]</span> Binus University, "NLP-Based Customer Service Bots", <span className="text-white font-semibold">Academic Review</span>, 2022.
            </li>
            <li>
              <span className="text-brand font-bold">[3]</span> R. Patel, "Natural Language Processing in Chatbots", <span className="text-white font-semibold">IJRASET</span>, 2023.
            </li>
            <li>
              <span className="text-brand font-bold">[4]</span> ScienceDirect, "AI Chatbots & User Satisfaction Index", <span className="text-white font-semibold">ScienceDirect Reports</span>, 2023.
            </li>
            <li>
              <span className="text-brand font-bold">[5]</span> IJIRSET, "WhatsApp Bot Implementation for Customer Interaction workflows", <span className="text-white font-semibold">IJIRSET Journal</span>, 2024.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 13,
      title: "Conclusion",
      category: "closing",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 text-center max-w-3xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] block mb-6 font-bold">Slide 13 / 13 — Closing</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-brand uppercase tracking-tighter leading-none mb-6">Thank You!</h2>
          <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12">
            Presenting V.Essessvi's academic and marketplace integration major project.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => {
                onClose();
                navigate('/connect');
              }}
              className="px-10 py-5 bg-white text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Discuss System Outlines
            </button>
          </div>
        </div>
      )
    }
  ];

  const epidemicSlides = [
    {
      id: 1,
      title: "Cover Page",
      category: "Thesis presentation",
      render: () => (
        <div className="flex flex-col justify-between h-full py-12 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute right-4 top-4 opacity-10 font-mono text-[9px] uppercase tracking-widest text-right">
            The Apollo University <br /> School of Technology
          </div>
          
          <div className="my-auto space-y-8">
            <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] font-extrabold px-3 py-1 bg-brand/10 rounded-full inline-block">
              Research Project Presentation
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-3.5xl xl:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
              Predicting Epidemics <br />
              <span className="text-brand">Data-Driven Health Forecasting System</span>
            </h1>
            <div className="h-1 w-24 bg-brand/50 mx-auto rounded-full" />
            <p className="text-gray-400 text-sm max-w-2xl mx-auto font-medium">
              School of Technology — Department of Computer Science & Engineering
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-left max-w-4xl mx-auto w-full pt-8 border-t border-white/5 font-mono text-xs text-gray-400">
            <div>
              <span className="text-brand font-bold uppercase tracking-wider block mb-2">Team Members</span>
              <p className="text-white font-bold text-[10px] md:text-xs leading-relaxed">V. Essessvi, M. Chandrakanth Reddy, C. Monish Reddy, Arkad Vijay Kumar, Macharam Yasaswini, K Srinadh</p>
              <p className="text-[10px] text-gray-500 font-medium">Department of Computer Science & Engineering, TAU</p>
            </div>
            <div className="text-right font-mono">
              <span className="text-brand font-bold uppercase tracking-wider block mb-2">Supervisor</span>
              <p className="text-white font-bold text-xs">Dr. K. Sudheer</p>
              <p className="text-[10px] text-gray-500 font-medium">Associate Professor, Department of CSE</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Abstract",
      category: "project overview",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 2 / 18 — Executive Abstract</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Executive Thesis Abstract</h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4 text-gray-400 text-sm md:text-base leading-relaxed font-semibold">
              <p>
                Epidemics pose a significant threat to global public health, making accurate forecasting essential for effective prevention and control.
              </p>
              <p>
                This project focuses on predicting epidemic trends using the <span className="text-brand">ARIMA</span> (AutoRegressive Integrated Moving Average) model, a widely used time-series forecasting technique.
              </p>
              <p>
                Historical epidemic data is collected and preprocessed to ensure consistency and stationarity before model implementation. Performance is evaluated using Mean Absolute Error (<span className="text-white">MAE</span>) and Root Mean Square Error (<span className="text-white">RMSE</span>).
              </p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="font-mono text-brand text-2xl font-black block">90%+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block mt-1">Short-term accuracy</span>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="font-mono text-brand text-2xl font-black block">ARIMA</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold block mt-1">Mathematical Trend Forecast</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Introduction",
      category: "foundations",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 3 / 18 — Introduction</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-8">Epidemic Forecasting Value</h2>
          
          <div className="mb-6 grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-wider">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-gray-500 block mb-1">Project Domain</span>
              <span className="text-white font-bold">Data Analytics & Predictive Systems</span>
            </div>
            <div className="p-4 bg-[#0F141F] rounded-xl border border-brand/20">
              <span className="text-gray-500 block mb-1">Core Architecture</span>
              <span className="text-brand font-bold">ARIMA Time-Series Math</span>
            </div>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-gray-400 font-semibold leading-relaxed">
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-white">Rapid Epidemic Spread:</strong> Disease outbreaks disrupt global health networks, imposing huge burdens on clinical care, lives, and economic stability.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-white">Planning Tools:</strong> Data-driven prediction alerts healthcare organizations to plan bed counts, materials, and vaccination campaigns preemptively.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
              <p><strong className="text-white">Mathematical Simplicity:</strong> Utilizing statsmodels and mathematical ARIMA parameter controls maps reliable short-term trends cleanly.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Literature Review",
      category: "scientific review",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 lg:px-16 w-full max-w-5xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 4 / 18 — Comparative Models</span>
          <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-6">Literature Review of Systems</h2>
          
          <div className="overflow-x-auto custom-scrollbar border border-white/10 rounded-2xl bg-[#0a0a0d]">
            <table className="w-full text-left font-mono text-[9px] uppercase border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-gray-400">
                  <th className="p-3 font-black">Model</th>
                  <th className="p-3 font-black">Type</th>
                  <th className="p-3 font-black">Advantages</th>
                  <th className="p-3 font-black">Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="p-3 text-white font-bold">ARIMA</td>
                  <td className="p-3">Statistical</td>
                  <td className="p-3 text-green-400">Simple, easy to interpret, great for linear data.</td>
                  <td className="p-3 text-red-400">Cannot handle nonlinear patterns</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">SARIMA</td>
                  <td className="p-3">Statistical</td>
                  <td className="p-3 text-green-400">Handles seasonal variations effectively.</td>
                  <td className="p-3 text-red-400">Complex parameter tuning</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">SVM</td>
                  <td className="p-3">ML</td>
                  <td className="p-3 text-green-400">Works well on smaller, stable datasets.</td>
                  <td className="p-3 text-red-400">Not ideal for dynamic forecasting</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">Random Forest</td>
                  <td className="p-3">ML</td>
                  <td className="p-3 text-green-400">High accuracy, handles large complex datasets.</td>
                  <td className="p-3 text-red-400">Computationally expensive</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">LSTM</td>
                  <td className="p-3">Deep Learning</td>
                  <td className="p-3 text-green-400">Captures complex nonlinear patterns.</td>
                  <td className="p-3 text-red-400">Requires large training dataset & times</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-bold">Prophet</td>
                  <td className="p-3">Additive</td>
                  <td className="p-3 text-green-400">Handles holidays and trends automatically.</td>
                  <td className="p-3 text-red-400">Limited flexible parameter bounds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Problem Statement",
      category: "problem definitions",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 5 / 18 — Mathematical Need</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Deficiencies of Existing Systems</h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm font-semibold">
            <div className="p-6 bg-red-950/15 border border-red-500/10 rounded-2xl space-y-4">
              <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-widest">Problem Definition</span>
              <p className="text-gray-300">Outbreak predictive strategy is highly complex due to the dynamic, volatile, and uncertain nature of disease infection curves.</p>
            </div>
            <div className="p-6 bg-red-950/15 border border-red-500/10 rounded-2xl space-y-4">
              <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-widest">Existing Drawbacks</span>
              <p className="text-gray-300">Traditional models suffer from inconsistent datasets, sudden spikes, and complete lack of nonlinear parsing.</p>
            </div>
            <div className="p-6 bg-green-950/15 border border-green-500/10 rounded-2xl space-y-4">
              <span className="text-brand font-mono text-xs font-bold uppercase tracking-widest">Proposed Response</span>
              <p className="text-gray-300">An optimized ARIMA-based time-series layout that establishes high-accuracy data quality checks to yield solid projections.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Objective",
      category: "tactical objectives",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-3xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 6 / 18 — Project Thesis Objectives</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-8">System Engineering Objectives</h2>
          
          <div className="space-y-4 text-gray-400 text-xs md:text-sm font-semibold">
            {[
              "Design and develop a highly optimized epidemic forecasting engine using ARIMA.",
              "Improve forecasting stability through differencing, cleaning, and handling missing data rows.",
              "Verify the prediction quality through reliable standard evaluation measures like MAE and RMSE.",
              "Provide solid visual graph interfaces for public health policy and resource allocation."
            ].map((text, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 items-center">
                <span className="font-mono text-brand text-xs font-bold pr-2 border-r border-brand/20">OB-0{index + 1}</span>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Existing System",
      category: "limitations",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 7 / 18 — Legacy Drawbacks</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Failures of Legacy Systems</h2>
          
          <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
            <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-2xl">
              <h3 className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">Dataset Fragility</h3>
              <p className="text-gray-400 text-sm font-medium">
                Over-dependence on inconsistent, delayed, or manual hospital datasets leads directly to unreliable trend forecasts.
              </p>
            </div>
            <div className="p-6 bg-red-950/20 border border-red-500/10 rounded-2xl">
              <h3 className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">No Dynamic Adaptation</h3>
              <p className="text-gray-400 text-sm font-medium">
                Absence of real-time pipeline differencing makes it difficult for traditional models to respond to volatile seasonal shifts.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Proposed System",
      category: "proposed system",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 8 / 18 — System Benefits</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">The ARIMA Predictive Approach</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono uppercase text-center">
            <div className="p-5 bg-white/5 border border-brand/20 rounded-xl space-y-2">
              <span className="text-brand font-bold block">1. Data Prep</span>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-normal">Clean outlier points & process null rows with Pandas.</p>
            </div>
            <div className="p-5 bg-white/5 border border-brand/20 rounded-xl space-y-2">
              <span className="text-white font-bold block">2. Stationary Check</span>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-normal">Ensure stable mean/variance using differencing.</p>
            </div>
            <div className="p-5 bg-[#0F141F] border border-brand/30 rounded-xl space-y-2">
              <span className="text-brand font-bold block">3. Statsmodels Fits</span>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-normal">Optimize ARIMA parameters (p, d, q) instantly.</p>
            </div>
            <div className="p-5 bg-white/5 border border-brand/20 rounded-xl space-y-2">
              <span className="text-white font-bold block">4. Projections</span>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-normal">Generate short-term graphs for resource planning.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "System Architecture",
      category: "flowchart diagram",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto relative">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 9 / 18 — Information Flowchart</span>
          <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-6">Epidemic Architecture Pipeline</h2>
          
          <div className="p-6 bg-[#0c0d12] border border-white/5 rounded-2xl space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-wider text-center">
              <div className="w-full md:w-1/4 p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-brand font-bold block mb-1">Start & Input</span>
                <span className="text-[8px] text-gray-500">Import CSV Dataset</span>
              </div>
              <div className="text-gray-500 hidden md:block">➔</div>
              <div className="w-full md:w-2/4 p-4 bg-white/10 rounded-lg border border-brand/20 space-y-2">
                <span className="text-white font-bold block">Validating Data Check</span>
                <div className="flex justify-around text-[7px] text-gray-400 gap-2">
                  <span className="bg-red-950/40 px-2 py-1 rounded text-red-400">If NO ➔ Re-import</span>
                  <span className="bg-green-950/40 px-2 py-1 rounded text-brand">If YES ➔ Proceed</span>
                </div>
              </div>
              <div className="text-gray-500 hidden md:block">➔</div>
              <div className="w-full md:w-1/4 p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-brand font-bold block mb-1">ARIMA Model Creation</span>
                <span className="text-[8px] text-gray-500">Statsmodels Training</span>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            <div className="flex flex-col md:flex-row justify-around items-center gap-4 text-center font-mono text-[9px] uppercase tracking-widest">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                Data Split (Train / Test)
              </div>
              <div className="text-gray-500 hidden md:block">➔</div>
              <div className="p-3 bg-[#0F141F] rounded-xl border border-brand/20 text-brand font-bold">
                Fitting Models & Evaluation
              </div>
              <div className="text-gray-500 hidden md:block">➔</div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                Output Predictions Graphs
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Methodology",
      category: "execution workflow",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 10 / 18 — Methodology</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-6">Workflow Chronology</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center text-sm">
            <div className="space-y-4 font-semibold">
              <h3 className="text-white font-bold uppercase font-display tracking-tight text-xl">Operational Pipeline</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-400 font-medium leading-relaxed">
                <li>Retrieve epidemiological statistics from WHO repositories.</li>
                <li>Clean null items and convert indices to Pandas Datetime format.</li>
                <li>Difference values to guarantee stationary series.</li>
                <li>Fit auto-ARIMA solver to select optimal p, d, q integers.</li>
                <li>Partition into train (80%) and evaluate on test (20%).</li>
              </ol>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 font-mono">
              <h3 className="text-brand font-mono text-xs font-bold uppercase tracking-wider block">Validations</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Before fitting, an Augmented Dickey-Fuller (ADF) test is completed. If the p-value exceeds 0.05, differencing is iteratively applied (d=1, d=2).
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Technologies",
      category: "engineering stack",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 11 / 18 — Technologies</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Science Tech Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-brand uppercase font-black block mb-4 tracking-widest">Programming Language</span>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Python (Core computation)</li>
                <li>✔ Jupyter Notebooks (R&D)</li>
              </ul>
            </div>
            <div className="p-6 bg-[#0E131F] border border-brand/20 rounded-2xl">
              <span className="text-white uppercase font-black block mb-4 tracking-widest">Computation Core</span>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Pandas (Data Frame strategy)</li>
                <li>✔ NumPy (Matrix calculations)</li>
                <li>✔ Statsmodels (Mathematical routines)</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-brand uppercase font-black block mb-4 tracking-widest">Data Visualization</span>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Matplotlib (Plot generation)</li>
                <li>✔ Seaborn (Trend overlay charts)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "Modules",
      category: "system modules",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 12 / 18 — Modularity</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Decoupled Module Structure</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono uppercase text-center">
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
              <span className="text-brand font-bold block text-[11px]">Data Collection</span>
              <p className="text-[8px] text-gray-500 lowercase leading-normal">Secures raw tables from WHO / health databases.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
              <span className="text-white font-bold block text-[11px]">Preprocessing</span>
              <p className="text-[8px] text-gray-500 lowercase leading-normal">Deletes null artifacts and structures indexing.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
              <span className="text-brand font-bold block text-[11px]">Time-Series Conversion</span>
              <p className="text-[8px] text-gray-500 lowercase leading-normal">Converts dataset into time-based formats.</p>
            </div>
            <div className="p-4 bg-[#0F141F] border border-brand/25 rounded-xl space-y-1">
              <span className="text-white font-bold block text-[11px]">Model Implementation</span>
              <p className="text-[8px] text-gray-500 lowercase leading-normal">Applies ARIMA algorithm for model forecasting.</p>
            </div>
            <div className="p-4 bg-[#0F141F] border border-brand/25 rounded-xl space-y-1">
              <span className="text-brand font-bold block text-[11px]">Training & Testing</span>
              <p className="text-[8px] text-gray-500 lowercase leading-normal">Trains based on historical cases values.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-1">
              <span className="text-white font-bold block text-[11px]">Visualization Module</span>
              <p className="text-[8px] text-gray-500 lowercase leading-normal">Displays outcome charts and confidence lines.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "Implementation",
      category: "code execution",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 13 / 18 — Mathematical Implementation</span>
          <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-8">Logical Code Pipeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm font-semibold">
            <div className="space-y-4">
              <p className="text-gray-400">
                The time-series dataset of epidemic numbers was preprocessed using the <span className="text-white">Pandas</span> library. 
              </p>
              <p className="text-gray-400">
                Stationarity was achieved through consecutive differencing intervals. The mathematical model architecture of the statistical ARIMA is calculated as:
              </p>
              <div className="p-4 bg-[#0F141F] rounded-xl border border-brand/20 font-mono text-[10px] text-brand text-center">
                Y_t = c + φ₁Y_(t-1) + ... + φ_p Y_(t-p) + θ₁e_(t-1) + ... + θ_q e_(t-q) + e_t
              </div>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs space-y-2">
              <span className="text-brand uppercase font-black block mb-2 text-[10px]">Python Snippet Outline</span>
              <div className="text-gray-400 leading-normal lowercase text-[9px]">
                <span className="text-brand">import</span> pandas <span className="text-brand">as</span> pd<br />
                <span className="text-white">df = pd.read_csv('epidemic.csv')</span><br />
                <span className="text-white">df['cases_diff'] = df['cases'].diff().dropna()</span><br />
                <span className="text-brand">from</span> statsmodels.tsa.arima.model <span className="text-brand font-bold">import</span> ARIMA<br />
                <span className="text-white">model = ARIMA(df['cases'], order=(1,1,1)).fit()</span><br />
                <span className="text-white">forecast = model.forecast(steps=30)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "Outputs",
      category: "live outcomes data",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 w-full max-w-5xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-2 font-bold font-black">Slide 14 / 18 — Live Math Output Graphs</span>
          <h2 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-4">Actual vs forecasted curves</h2>
          
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Chart column */}
            <div className="md:col-span-2 bg-[#08080c] border border-white/10 rounded-2xl p-4 h-[240px] relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase">
                <span>Observed vs ARIMA Forecast</span>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 block" /> Observed</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-100 block" /> Forecasted</span>
                </div>
              </div>
              
              {/* Simulated vector chart */}
              <div className="h-40 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                  
                  {/* Confidence intervals background */}
                  <path d="M 0 45 Q 25 35, 50 15 T 100 5 L 100 25 T 50 35 Q 25 45, 0 49 Z" fill="rgba(249, 115, 22, 0.15)" />
                  {/* Observed Cases line */}
                  <path d="M 0 47 Q 20 38, 40 18 T 80 12 T 100 8" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  {/* Forecasted Line */}
                  <path d="M 0 47 Q 20 38, 40 18 T 80 14 T 100 11" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3,1" />
                  
                  {/* Visual points */}
                  <circle cx="100" cy="8" r="2.5" fill="#3b82f6" />
                  <circle cx="100" cy="11" r="2.5" fill="#f97316" />
                </svg>
                <div className="absolute left-0 bottom-0 text-[8px] text-gray-500 font-mono">Jan 2020</div>
                <div className="absolute right-0 bottom-0 text-[8px] text-gray-500 font-mono font-bold">Sep 2020</div>
              </div>
            </div>

            {/* Metrics Column */}
            <div className="space-y-4">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="font-mono text-gray-400 text-[9px] uppercase block mb-1">Mean Absolute Error (MAE)</span>
                <span className="font-mono text-brand text-xl font-black block">45.32</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="font-mono text-gray-400 text-[9px] uppercase block mb-1">Root Mean Square Error (RMSE)</span>
                <span className="font-mono text-brand text-xl font-black block font-sans">60.78</span>
              </div>
              <div className="p-3 bg-green-950/20 border border-green-500/10 rounded-xl">
                <span className="font-mono text-green-400 text-[9px] uppercase block mb-1">Interpretation</span>
                <p className="text-[9px] text-gray-300 font-semibold uppercase leading-tight">Highly reliable short-term forecasting on stable epidemic trends.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "Future Scope",
      category: "future roadmap",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 15 / 18 — Future Scope</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Epidemic Forecasting Roadmap</h2>
          
          <div className="grid md:grid-cols-2 gap-6 leading-relaxed">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-brand font-mono text-xs font-bold uppercase tracking-wider mb-2">Hybrid LSTM Model Fusion</h3>
              <p className="text-gray-400 text-sm font-semibold">
                Integrate deep-learning LSTM models with standard ARIMA to handle non-linear volatility, environmental policies, and dynamic epidemic spikes effectively.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">Real-Time Dashboards</h3>
              <p className="text-gray-400 text-sm font-semibold">
                Establish direct public datasets interfaces connecting WHO APIs to update ARIMA parameters model automatically and render web dashboard maps for public medical agencies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 16,
      title: "Conclusion",
      category: "thesis summary",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 16 / 18 — Summary Conclusion</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight mb-8">Analytical Projections Summary</h2>
          <div className="p-8 bg-white/5 border-l-4 border-brand rounded-r-2xl space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed font-semibold">
              "The design successfully implements the ARIMA statistical model to predict epidemic curves with a high level of confidence for short-term outbreak prevention."
            </p>
            <p className="text-gray-400 text-sm font-semibold leading-relaxed">
              Data preprocessing and stationarity remain the most critical components of predictive reliability. While ARIMA is excellent for linear dependencies, future architectures must evaluate hybrid deep learning to capture volatile global health patterns.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: "References",
      category: "bibliography",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 max-w-4xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-widest block mb-4 font-bold font-black">Slide 17 / 18 — Scholarly Citations</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight mb-6">Academic References</h2>
          
          <ul className="space-y-3 font-mono text-[9px] md:text-xs text-gray-400 leading-normal uppercase">
            <li>
              <span className="text-brand font-bold">[1]</span> G. E. P. Box, G. M. Jenkins, and G. C. Reinsel, <span className="text-white font-semibold">"Time Series Analysis: Forecasting and Control"</span>, 5th ed. Wiley, 2015.
            </li>
            <li>
              <span className="text-brand font-bold">[2]</span> R. J. Hyndman and G. Athanasopoulos, <span className="text-white font-semibold">"Forecasting: Principles and Practice"</span>, 2nd ed. OTexts, 2018.
            </li>
            <li>
              <span className="text-brand font-bold">[3]</span> World Health Organization, <span className="text-white font-semibold">"Coronavirus Disease (COVID-19) Dashboard"</span>, 2020.
            </li>
            <li>
              <span className="text-brand font-bold">[4]</span> Johns Hopkins University, <span className="text-white font-semibold">"COVID-19 Data Repository by CSSE"</span>, 2020.
            </li>
            <li>
              <span className="text-brand font-bold">[5]</span> G. Zhang, B. E. Patuwo, and M. Y. Hu, <span className="text-white font-semibold">"Forecasting with artificial neural networks"</span>, Int. Journal of Forecasting, vol. 14, 1998.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 18,
      title: "Conclusion",
      category: "acknowledgments",
      render: () => (
        <div className="flex flex-col justify-center h-full py-12 px-6 md:px-12 text-center max-w-3xl mx-auto">
          <span className="text-brand font-mono text-xs uppercase tracking-[0.3em] block mb-6 font-bold font-black">Slide 18 / 18 — End</span>
          <h2 className="text-5xl md:text-8xl font-display font-black text-brand uppercase tracking-tighter leading-none mb-6">Thank You!</h2>
          <p className="text-gray-400 text-lg font-semibold leading-relaxed mb-12">
            Presenting the computer science epidemic trend forecasting research workflow.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => {
                onClose();
                navigate('/connect');
              }}
              className="px-10 py-5 bg-white text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Discuss Research Outlines
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl"
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

          {/* Conditional Layout Switching */}
          {projectType === 'whatsapp' || projectType === 'epidemic' ? (
            // Dynamic Slideshow
            (() => {
              const slides = projectType === 'whatsapp' ? whatsappSlides : epidemicSlides;
              const title = projectType === 'whatsapp' ? "AI-Based WhatsApp Agent" : "Predicting Epidemics";
              const subtitle = projectType === 'whatsapp' ? "Academic Dissertation & Presentation Deck" : "Python & Pandas Predictive Analytics System";
              
              return (
                <div className="flex-1 flex flex-col overflow-hidden h-full">
                  {/* Slides Deck Header */}
                  <div className="px-8 pt-8 pb-4 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0a0a0d] bg-gradient-to-r from-brand/5 to-transparent">
                    <div>
                      <h3 className="text-white font-display font-black text-xl uppercase tracking-tight">
                        {title}
                      </h3>
                      <p className="text-gray-500 font-mono text-[9px] uppercase tracking-widest">
                        {subtitle}
                      </p>
                    </div>
                    {/* Custom Slide Progress Indicator */}
                    <div className="flex gap-1.5 items-center max-w-[200px] md:max-w-none overflow-x-auto py-1">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${i === currentSlide ? 'w-8 bg-brand' : 'w-2.5 bg-white/10 hover:bg-white/30'}`}
                          title={slides[i].title}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Active Slide Body Area */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar relative flex items-center justify-center min-h-0 bg-[#07070a]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex flex-col justify-center"
                      >
                        {slides[currentSlide].render()}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Deck Navigation Controls */}
                  <div className="px-8 py-6 border-t border-white/5 bg-[#0a0a0d] flex items-center justify-between font-mono text-xs uppercase text-gray-500 select-none">
                    <button
                      onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                      disabled={currentSlide === 0}
                      className="flex items-center gap-2 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 transition-colors py-2 px-4 rounded-xl hover:bg-white/5"
                    >
                      <ChevronLeft size={16} /> Previous
                    </button>
                    <div className="font-bold text-[10px] text-gray-400">
                      Slide {currentSlide + 1} of {slides.length} — {slides[currentSlide].category}
                    </div>
                    <button
                      onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
                      disabled={currentSlide === slides.length - 1}
                      className="flex items-center gap-2 hover:text-white disabled:opacity-30 disabled:hover:text-gray-500 transition-colors py-2 px-4 rounded-xl hover:bg-white/5"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })()
          ) : (
            // SpareXchange Static Case Study Content
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Hero Section */}
              <header className="relative py-24 px-8 md:px-16 border-b border-white/5 bg-gradient-to-br from-brand/5 to-transparent">
                <div className="max-w-4xl">
                  <span className="font-mono text-xs text-brand uppercase tracking-[0.3em] mb-6 block font-bold">
                    Project · 2024–2025
                  </span>
                  <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-none tracking-tighter mb-12 uppercase">
                    Spare<span className="text-brand">Xchange</span>
                  </h1>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                      <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Role</span>
                      <span className="text-white font-bold text-sm tracking-tight">AI Automation Engineer</span>
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
                  <button 
                    onClick={() => {
                      onClose();
                      navigate('/connect');
                    }}
                    className="px-12 py-5 bg-brand text-black font-display font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all inline-block"
                  >
                    Talk to AI Concierge
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
