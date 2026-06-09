"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "The Kyoto Sanctuary",
    category: "Residential Architecture",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    size: "lg", // Large layout block
  },
  {
    id: "02",
    title: "Brutalist Monolith",
    category: "Commercial Concept",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    size: "md", // Medium layout block
  },
  {
    id: "03",
    title: "The Amber Lounge",
    category: "Hospitality Design",
    year: "2025",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    size: "md",
  },
  {
    id: "04",
    title: "Haus of Glass",
    category: "Sustainable Living",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    size: "lg",
  },
];

export default function ProjectGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="bg-[#0F0F0F] text-[#F5F5F3] py-32 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-stone-800 pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3 block">Selected Archive</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight font-sans">
              Case Studies <span className="font-serif italic text-stone-400">/ Spatial Design</span>
            </h2>
          </div>
          <p className="text-stone-400 font-light text-sm max-w-xs mt-6 md:mt-0 leading-relaxed">
            A meticulous exploration of volume, raw materiality, and light across residential and commercial landscapes.
          </p>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 lg:gap-x-16 items-start">
          {projects.map((project, index) => {
            const isLarge = project.size === "lg";
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col group cursor-pointer ${
                  isLarge ? "md:col-span-7" : "md:col-span-5 md:mt-16"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container with Elegant Mask Overlay */}
                <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden rounded-xl border border-white/5">
                  
                  {/* Subtle vignette layer that reacts to mouse hovers */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    animate={{
                      scale: hoveredIndex === index ? 1.04 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  />

                  {/* Corner Index Indicator Badge inside card */}
                  <div className="absolute top-6 left-6 z-20 text-xs font-mono bg-[#0F0F0F]/60 backdrop-blur-md text-stone-300 w-9 h-9 flex items-center justify-center rounded-full border border-white/5">
                    {project.id}
                  </div>
                  
                  {/* Floating CTA Icon on Hover */}
                  <div className="absolute right-6 top-6 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-[#F5F5F3] text-[#0F0F0F] p-3.5 rounded-full shadow-xl">
                    <FiArrowUpRight className="text-lg" />
                  </div>
                </div>

                {/* Project Metadata Layer */}
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light tracking-tight text-stone-200 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-stone-500 uppercase tracking-widest font-medium">
                      <span>{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Production Year label */}
                  <span className="text-xs font-serif italic text-stone-500 border border-stone-800/80 px-2.5 py-1 rounded-md">
                    © {project.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}