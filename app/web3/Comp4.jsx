"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Spatial Discovery",
    tagline: "Uncovering the DNA of raw form.",
    description: "Before sketch lines touch paper, we spend days analyzing the micro-climate, natural sun patterns, and historical weight of the physical space. We study how sound moves, where shadows fall, and how raw structural geometry breathes."
  },
  {
    num: "02",
    title: "Material Curation",
    tagline: "The tactile, honest interface.",
    description: "We bypass trends to curate authentic materials that age gracefully across generations. Hand-raked Japanese plasters, raw Belgian linens, bush-hammered limestone, and deeply grained, oil-brushed smoked oak compose our tactile palette."
  },
  {
    num: "03",
    title: "Silent Architecture",
    tagline: "Eliminating the visual noise.",
    description: "True luxury is felt, not seen. We engineer hidden joinery, seamlessly flush baseboards, and concealed climate apertures. By erasing the structural friction, we allow space, furniture silhouettes, and human life to take center stage."
  }
];

export default function Philosophy() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="studio" className="bg-[#0F0F0F] text-[#F5F5F3] py-32 px-6 md:px-12 lg:px-24 w-full border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Immersive Scroll-Linked Text Statement */}
        <div className="max-w-5xl mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.25] text-stone-400"
          >
            We believe spaces should act as an <span className="text-white font-serif italic">outer skin</span>. Stripping away the superficial to establish an uncompromising harmony between structural architecture and raw <span className="text-white">tactile reality</span>.
          </motion.p>
        </div>

        {/* Process Interaction Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pt-16 border-t border-stone-800/60">
          
          {/* Left Column: Vertical Selection Menu */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-6 block">Our Methodology</span>
            
            {steps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className="w-full text-left flex items-center py-6 border-b border-stone-900 group transition-all duration-300"
                >
                  {/* Sliding layout line */}
                  <div className="flex items-start gap-6 w-full">
                    <span className={`font-mono text-xs transition-colors duration-300 pt-1 ${
                      isSelected ? "text-stone-300" : "text-stone-600 group-hover:text-stone-400"
                    }`}>
                      {step.num}
                    </span>
                    
                    <div className="flex flex-col">
                      <h3 className={`text-xl md:text-2xl font-light tracking-tight transition-all duration-300 ${
                        isSelected ? "text-white translate-x-2 font-serif italic" : "text-stone-500 group-hover:text-stone-300"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Reveal Display Panel */}
          <div className="lg:col-span-7 bg-stone-900/30 border border-white/5 p-8 md:p-12 rounded-2xl min-h-[350px] flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-stone-800/10 blur-[80px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="z-10 flex flex-col h-full justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
                    Phase {steps[activeStep].num}
                  </span>
                  <h4 className="text-2xl font-normal text-stone-200 tracking-tight mb-4">
                    {steps[activeStep].tagline}
                  </h4>
                  <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed max-w-xl">
                    {steps[activeStep].description}
                  </p>
                </div>
                
                <div className="mt-12 text-xs uppercase tracking-widest text-stone-600 font-medium">
                  Aura Studio Execution Framework ©2026
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}