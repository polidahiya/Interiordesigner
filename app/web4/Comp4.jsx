"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const reviews = [
  {
    id: 1,
    quote: "“The Lounge Oasis completely transformed our living space. The craftsmanship is undeniable, and the minimalist silhouette brings a deep sense of serenity to our home.”",
    author: "Elena & Marcus Rostova",
    location: "Berlin Residence",
    projectYear: "2025",
    image: "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg" // Replace with premium architectural interior photo
  },
  {
    id: 2,
    quote: "“Finding furniture that respects both form and true ergonomic utility is rare. Stylecraft designs with an architect's eye and a master artisan's hand.”",
    author: "Dr. Julian Vance",
    location: "Kyoto Minimalist Pavilion",
    projectYear: "2026",
    image: "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg"
  },
  {
    id: 3,
    quote: "“Their attention to material texture is unparalleled. The custom bouclé feels substantial, alive, and completely elevated our penthouse project.”",
    author: "Sasha Sterling",
    location: "Tribeca Loft",
    projectYear: "2026",
    image: "https://images.woodenstreet.de/image/data%2FLooks%2F1.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-white text-[#121212] py-24 px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* --- LEFT COL: INTUITIVE INTERIOR IMAGE DISPLAY --- */}
        <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-100 shadow-sm group">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${reviews[currentIndex].image})` }}
            />
          </AnimatePresence>
          
          {/* Subtle Project Data Overlay */}
          <div className="absolute bottom-6 left-6 bg-neutral-900/90 backdrop-blur-md text-white text-xs font-mono py-2 px-4 rounded-full flex gap-4">
            <span className="opacity-60">LOC // {reviews[currentIndex].location}</span>
            <span className="text-[#FF4C4C]">©{reviews[currentIndex].projectYear}</span>
          </div>
        </div>

        {/* --- RIGHT COL: EDITORIAL REVIEW CONTENT --- */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full py-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 block mb-8">
              Living Testimonials
            </span>

            {/* Dynamic Quote Text Box */}
            <div className="min-h-[220px] sm:min-h-[180px] flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 leading-snug mb-8">
                    {reviews[currentIndex].quote}
                  </blockquote>
                  
                  <div>
                    <cite className="not-italic text-base font-medium tracking-tight block text-neutral-900">
                      {reviews[currentIndex].author}
                    </cite>
                    <span className="text-xs text-neutral-500 font-light mt-0.5 block">
                      Verified Collector
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Custom Controls UI */}
          <div className="flex items-center justify-between pt-12 border-t border-neutral-100 mt-12">
            {/* Index Counter */}
            <div className="text-xs font-mono text-neutral-400">
              <span className="text-neutral-900 font-medium">0{reviews[currentIndex].id}</span>
              <span className="mx-2">/</span>
              <span>0{reviews.length}</span>
            </div>

            {/* Pagination Navigation Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={handlePrev}
                className="p-4 rounded-full border border-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-4 rounded-full border border-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}