/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import profilePic from '../assets/images/regenerated_image_1777972690586.png';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(profilePic);
  const [failedPaths, setFailedPaths] = useState<string[]>([]);
  
  const possiblePaths = [
    profilePic,
    '/profile.png',
    '/profile.jpg',
    '/profile.jpeg',
    '/input_file_0.png', 
    '/input_file_1.png', 
    '/input_file_2.png', 
    '/input_file_3.png', 
    '/input_file_4.png',
    '/input_file_0.jpg',
    '/input_file_1.jpg',
    '/input_file_0.jpeg',
    '/input_file_1.jpeg'
  ];

  const handleImageError = () => {
    const currentIndex = possiblePaths.indexOf(imgSrc);
    if (currentIndex !== -1 && currentIndex < possiblePaths.length - 1) {
      const nextPath = possiblePaths[currentIndex + 1];
      setImgSrc(nextPath);
    } else if (imgSrc !== `https://ui-avatars.com/api/?name=${PERSONAL_INFO.firstName}&background=random&size=512`) {
      // Final fallback if all fail
      setImgSrc(`https://ui-avatars.com/api/?name=${PERSONAL_INFO.firstName}&background=random&size=512`);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-0 px-6 min-h-screen flex flex-col items-center overflow-hidden bg-white">
      {/* Madison-style Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80vh] max-w-5xl bg-[radial-gradient(circle_at_50%_40%,rgba(255,247,237,1),transparent)] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Intro Greeting */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-8 flex justify-center md:justify-start md:ml-[10%]"
        >
          <span className="font-cursive italic text-6xl md:text-8xl lg:text-9xl text-navy">Hey, there</span>
        </motion.div>

        {/* Hero Content - Image Left, Name Right - Madison Style */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mt-12 px-4 md:px-10">
          
          {/* Portrait Image (Left) */}
          <motion.div 
            className="w-full md:w-1/2 max-w-lg lg:max-w-xl relative group z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
             <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-slate-50 shadow-2xl">
                <img 
                   src={imgSrc} 
                   alt="ESSESSVI"
                   className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                   onError={handleImageError}
                />
             </div>
          </motion.div>
          
          {/* Name & Title (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:flex-1 flex flex-col justify-center items-center md:items-start md:pl-8 lg:pl-16 mt-8 md:mt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-navy leading-none tracking-tighter uppercase text-center md:text-left select-none flex flex-nowrap whitespace-nowrap justify-center md:justify-start items-center gap-2 sm:gap-3">
              <span className="opacity-80 tracking-tight">I AM</span>
              <span>{PERSONAL_INFO.firstName}</span>
            </h1>
            
            <div className="mt-8 md:mt-12 max-w-md w-full">
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-slate-500 leading-relaxed text-center md:text-left">
                {PERSONAL_INFO.role} <br />
                <span className="opacity-70">solving real-world problems.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator / Section Transition */}
        <div className="mt-40 mb-20 text-center">
           <h3 className="text-4xl md:text-7xl lg:text-8xl font-bold text-navy uppercase tracking-tighter mb-12 opacity-80">RECENT PROJECTS</h3>
           <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-4 cursor-pointer"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
           >
             <div className="w-px h-32 bg-gradient-to-b from-navy to-transparent"></div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
