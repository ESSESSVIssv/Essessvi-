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

import { whatsappSlides } from '../data/whatsappSlides';
import { sparexchangeSlides } from '../data/sparexchangeSlides';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectType: 'sparexchange' | 'whatsapp' | null;
}

export default function CaseStudyModal({ isOpen, onClose, projectType }: CaseStudyModalProps) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = projectType === 'whatsapp' ? whatsappSlides : 
                 projectType === 'sparexchange' ? sparexchangeSlides : [];

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
      if (!isOpen || !projectType) return;
      const maxSlide = slides.length - 1;
      if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(maxSlide, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, projectType, slides.length]);

  if (!isOpen || !projectType) return null;

  const title = projectType === 'whatsapp' ? "AI-Based WhatsApp Agent" : 
                "SpareXChange Blueprint";
  const subtitle = projectType === 'whatsapp' ? "Academic Dissertation & Presentation Deck" : 
                   "Product Management Case Study";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-text-main/95 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="w-full max-w-[95vw] h-[95vh] bg-[#0d0d0d] border border-text-main/20 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-bg"
          >
            <X size={20} />
          </button>

          {/* Dynamic Slideshow Layout */}
          <div className="flex-1 flex flex-col overflow-hidden h-full">
            {/* Slides Deck Header */}
            <div className="px-8 pt-8 pb-4 border-b border-text-main/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0a0a0d] bg-gradient-to-r from-brand/5 to-transparent">
              <div>
                <h3 className="text-bg font-display font-medium text-xl uppercase tracking-tight">
                  {title}
                </h3>
                <p className="text-bg/40 font-mono text-[9px] uppercase tracking-widest font-normal">
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
            <div className="flex-1 overflow-y-auto custom-scrollbar relative min-h-0 bg-[#07070a]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full min-h-full flex flex-col justify-center"
                >
                  {slides[currentSlide].render({ navigate, onClose })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Deck Navigation Controls */}
            <div className="px-8 py-6 border-t border-text-main/10 bg-[#0a0a0d] flex items-center justify-between font-mono text-xs uppercase text-bg/40 select-none">
              <button
                onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 hover:text-bg disabled:opacity-30 disabled:hover:text-bg/40 transition-colors py-2 px-4 rounded-xl hover:bg-white/5 font-normal"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <div className="font-light text-[10px] text-bg/60 font-normal text-center flex-1 mx-4 truncate">
                Slide {currentSlide + 1} of {slides.length} — {slides[currentSlide].category}
              </div>
              <button
                onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 hover:text-bg disabled:opacity-30 disabled:hover:text-bg/40 transition-colors py-2 px-4 rounded-xl hover:bg-white/5 font-normal"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
