/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import profilePic from '../assets/images/regenerated_image_1777972690586.png';

export default function Workstation() {
  const [userImgSrc, setUserImgSrc] = useState(profilePic);
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
    const currentIndex = possiblePaths.indexOf(userImgSrc);
    if (currentIndex !== -1 && currentIndex < possiblePaths.length - 1) {
      const nextPath = possiblePaths[currentIndex + 1];
      setUserImgSrc(nextPath);
    } else if (userImgSrc !== `https://ui-avatars.com/api/?name=${PERSONAL_INFO.firstName}&background=random&size=512`) {
      setUserImgSrc(`https://ui-avatars.com/api/?name=${PERSONAL_INFO.firstName}&background=random&size=512`);
    }
  };

  const images = [
    userImgSrc,
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1170",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1172",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1120"
  ];

  return (
    <section className="py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
           <h2 className="text-4xl md:text-7xl font-bold text-navy uppercase tracking-tighter">MY WORKSTATION</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
           {images.map((img, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden group shadow-sm bg-slate-200"
             >
                <img 
                  src={img} 
                  alt={`Workstation ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={idx === 0 ? handleImageError : undefined}
                />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
