"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chapters = [
  {
    id: "01",
    tag: "The Foundation",
    title: "Sustainably Sourced European Walnut",
    description: "Every frame begins its life in responsibly managed forests. Chosen for its rich, deep grain structure and exceptional durability, our walnut is seasoned slowly to prevent warping over generations.",
    bgImage: "https://walldecors4home.com/wp-content/uploads/2025/05/luxury-home-design-on-budget.jpg" // Replace with premium material images
  },
  {
    id: "02",
    tag: "The Texture",
    title: "Belgian Bouclé & Heavy Linen",
    description: "Tactility is everything. We collaborate with family-owned mills in Belgium to weave custom textiles that boast rich, organic textures while maintaining commercial-grade rub counts.",
    bgImage: "https://walldecors4home.com/wp-content/uploads/2025/05/luxury-home-design-on-budget.jpg"
  },
  {
    id: "03",
    tag: "The Comfort",
    title: "High-Density Ergonomic Core",
    description: "Beneath the surface lies a masterclass in comfort. Layered natural latex and pocketed micro-springs ensure that the silhouette stays crisp while adapting perfectly to your body.",
    bgImage: "https://walldecors4home.com/wp-content/uploads/2025/05/luxury-home-design-on-budget.jpg"
  }
];

export default function StorySection() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section className="bg-[#121212] text-white py-24 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* --- LEFT SIDE: STICKY STORYTELLING PANEL --- */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:h-[70vh] lg:sticky lg:top-24">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 block mb-6">
              Our Craft Philosophy
            </span>
            
            {/* Chapter Indicators */}
            <div className="flex gap-3 mb-12">
              {chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapter(index)}
                  className="flex flex-col items-start text-left group focus:outline-none"
                >
                  <span className={`text-xs font-mono transition-colors duration-300 ${activeChapter === index ? 'text-[#FF4C4C]' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                    {chapter.id}
                  </span>
                  <div className={`h-[2px] w-12 mt-2 transition-all duration-500 ${activeChapter === index ? 'bg-[#FF4C4C] w-16' : 'bg-neutral-800 group-hover:bg-neutral-600'}`} />
                </button>
              ))}
            </div>

            {/* Dynamic Content Switching with Framer Motion */}
            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-xs font-semibold text-[#FF4C4C] tracking-wide uppercase block mb-2">
                    {chapters[activeChapter].tag}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
                    {chapters[activeChapter].title}
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md">
                    {chapters[activeChapter].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="pt-8 border-t border-neutral-900 text-xs text-neutral-500 font-mono hidden lg:block">
            STC // MATERIAL SPECIFICATION SHEET v2.6
          </div>
        </div>

        {/* --- RIGHT SIDE: IMMERSIVE VISUAL DISPLAY --- */}
        <div className="lg:col-span-7 w-full h-[50vh] lg:h-[70vh] rounded-[2.5rem] overflow-hidden relative bg-neutral-900 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${chapters[activeChapter].bgImage})` 
              }}
            />
          </AnimatePresence>

          {/* Interactive Frame Corner Detail (Matching style of image_438386.jpg) */}
          <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 text-white font-mono text-xs px-4 py-2 rounded-full pointer-events-none">
            {chapters[activeChapter].tag} CONFIG_
          </div>
        </div>

      </div>
    </section>
  );
}