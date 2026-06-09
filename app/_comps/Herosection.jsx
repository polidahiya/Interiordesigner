"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { GlassElement } from "../Glasseffect/Glasselement";

export const STYLES = [
  {
    label: "Scandinavian",
    tag: "Minimal",
    feel: "Light / Airy",
    accent: "rgba(168, 181, 162, 0.25)",
    textAccent: "#A8B5A2",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=960&q=85",
    thumb:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=220&q=75",
  },
  {
    label: "Art Deco",
    tag: "Luxe Touch",
    feel: "Bold / Layered",
    accent: "rgba(201, 169, 110, 0.25)",
    textAccent: "#C9A96E",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=960&q=85",
    thumb:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=220&q=75",
  },
  {
    label: "Japandi",
    tag: "Warm Neutral",
    feel: "Still / Earthy",
    accent: "rgba(139, 115, 85, 0.25)",
    textAccent: "#8B7355",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=960&q=85",
    thumb:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=220&q=75",
  },
];

function Herosection() {
  const [current, setCurrent] = useState(0); // Standardized to start at 0 index
  const [isAnimating, setIsAnimating] = useState(false);

  const activeStyle = STYLES[current];

  const handleNavigation = useCallback(
    (idx) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((idx + STYLES.length) % STYLES.length);
    },
    [isAnimating],
  );

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 750);
      return () => clearTimeout(timer);
    }

    const id = setInterval(() => handleNavigation(current + 1), 5500);
    return () => clearInterval(id);
  }, [current, isAnimating, handleNavigation]);

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-12 xl:px-20 overflow-hidden py-24 lg:py-0 bg-[#FBF9F6]">
      {/* Dynamic Gradient Background Glow */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 75% 45%, ${activeStyle.accent} 0%, transparent 60%)`,
        }}
      />

      {/* Structural Design Tokens */}
      <div className="absolute bottom-8 left-10 font-mono text-[11px] text-black/20 tracking-widest pointer-events-none hidden md:block">
        + + +
      </div>
      <div className="absolute bottom-8 right-1/3 font-mono text-[11px] text-black/20 tracking-widest pointer-events-none hidden md:block">
        + +
      </div>

      {/* ── HERO GRID ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: TEXT & CONTROLS */}
        <div className="lg:col-span-6 flex items-start gap-4 md:gap-6">
          <span
            className="font-mono text-[9px] tracking-[0.3em] text-black/35 mt-2 hidden sm:block select-none"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            INTERIOR STUDIO
          </span>

          <div className="space-y-6 md:space-y-8 flex-1" aria-live="polite">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#5C6B4A] text-[11px] font-bold tracking-widest uppercase">
                <span className="w-6 h-[1px] bg-[#5C6B4A]" />
                Award-winning design
              </div>
              <h1 className="font-playfair text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#2A2A2A] leading-[1.1] tracking-tight">
                Feel True <br />
                <span
                  className="transition-colors duration-700 ease-in-out"
                  style={{ color: activeStyle.textAccent }}
                >
                  Comfort
                </span>{" "}
                With <br />
                Interior Craft — <br />
                <span className="italic font-normal">Live Elegant</span>
              </h1>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {STYLES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigation(idx)}
                  className="focus:outline-none py-2"
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === current ? "true" : "false"}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-500 ${
                      idx === current
                        ? "w-7 bg-[#2A2A2A]"
                        : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-black/55 max-w-sm">
              A sustainable choice for architectural design. We craft high-end
              environments using premium solid woods, natural rattan, and
              bespoke masonry made to endure.
            </p>

            {/* CTAs & Counter */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-[#2A2A2A] hover:bg-[#8B7355] text-[#F5F1EB] text-xs font-semibold px-7 py-3.5 rounded-full transition-colors duration-300 shadow-md transform hover:-translate-y-0.5">
                Explore Spaces →
              </button>

              <div className="flex items-center gap-3">
                <div className="font-mono text-xs text-black/40">
                  <span className="text-xl font-sans font-medium text-[#2A2A2A]">
                    {current + 1}
                  </span>{" "}
                  / {STYLES.length}
                </div>

                <div className="flex gap-1.5">
                  {/* Previous Button */}
                  <button
                    onClick={() => handleNavigation(current - 1)}
                    className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-xs transition-all duration-200 hover:bg-[#2A2A2A] hover:text-[#F5F1EB] hover:border-[#2A2A2A]"
                    aria-label="Previous style"
                  >
                    <FaArrowRight className="rotate-180 text-xs" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={() => handleNavigation(current + 1)}
                    className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-xs transition-all duration-200 hover:bg-[#2A2A2A] hover:text-[#F5F1EB] hover:border-[#2A2A2A]"
                    aria-label="Next style"
                  >
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Previews */}
            <div className="flex items-center gap-3 pt-2">
              {STYLES.map((styleObj, i) => (
                <button
                  key={styleObj.label}
                  onClick={() => handleNavigation(i)}
                  className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${
                    i === current
                      ? "border-[#2A2A2A] scale-105 shadow-sm"
                      : "border-black/10 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Switch to ${styleObj.label} design style`}
                >
                  <img
                    src={styleObj.thumb}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-1.5 left-0 right-0 text-[9px] font-bold tracking-wider text-center text-white uppercase">
                    {styleObj.label.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MAIN DISPLAY HERO IMAGE */}
        <div className="lg:col-span-6 relative w-full px-2 sm:px-0">
          <div className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[480px] xl:h-[540px] shadow-xl bg-neutral-200">
            {/* Animated Image Swapping */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStyle.image}
                src={activeStyle.image}
                alt={`${activeStyle.label} interior design showcase`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.3em] text-white/70 select-none hidden sm:block"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {activeStyle.label.toUpperCase()}
            </span>

            {/* Dynamic Tag 1 */}
            <GlassElement
              height={34}
              width={134}
              radius={34}
              className="absolute top-6 right-6 flex items-center justify-center rounded-full px-4 py-2 gap-2 shadow-lg"
            >
              <span
                className="w-2 h-2 rounded-full transition-colors duration-500"
                style={{ backgroundColor: activeStyle.textAccent }}
              />
              <span className="text-[11px] font-semibold tracking-wide text-[#2A2A2A]">
                {activeStyle.tag}
              </span>
            </GlassElement>

            {/* Dynamic Tag 2 */}
            <div className="absolute bottom-6 right-6 bg-[#F5F1EB]/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="font-mono text-[10px] text-black/40">vibe</span>
              <span className="text-[11px] font-semibold text-[#2A2A2A]">
                {activeStyle.feel}
              </span>
            </div>
          </div>

          {/* Accent Footer Tags */}
          <div className="absolute -bottom-6 right-4 sm:right-0 flex flex-wrap justify-end gap-1.5 max-w-xs hidden">
            {[
              "Artisan Crafted",
              "Timeless Space",
              "Earthy Textures",
              "Curated Luxury",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium tracking-wide bg-[#EDE5D8] text-black/70 px-3 py-1 rounded-full border border-black/5 hover:bg-[#2A2A2A] hover:text-[#F5F1EB] transition-all duration-300 cursor-pointer shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
