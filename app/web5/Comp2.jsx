"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesOverview() {
  // Marquee data mimicking the embedded circular imagery in text
  const marqueeItems = [
    { text: "We support interior" },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=120&q=80",
      label: "Furniture",
    },
    { text: "professionals with" },
    { text: "curated surface materials" },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=120&q=80",
      label: "Wood",
    },
    { text: "and project execution" },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=120&q=80",
      label: "Consult",
    },
    { text: "based architectural design." },
  ];

  return (
    <section className="w-full bg-[#F9F9F9] py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* --- SECTION LABEL & PAGINATION HUD --- */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-16">
          <span className="text-xs font-medium uppercase tracking-widest px-4 py-2 bg-white rounded-full border border-neutral-200/80 shadow-sm text-neutral-600">
            Our Services
          </span>
          <div className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-xs font-mono text-neutral-500 bg-white">
            01
          </div>
        </div>

        {/* --- ELEGANT INLINE EMBEDDED MARQUEE/TEXT HEADER --- */}
        <div className="max-w-5xl mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-[1.4] text-neutral-900 tracking-tight flex flex-wrap items-center gap-x-4 gap-y-3">
            {marqueeItems.map((item, index) => {
              if (item.type === "image") {
                return (
                  <motion.span
                    key={index}
                    className="inline-flex items-center justify-center relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-neutral-300 shadow-inner group cursor-pointer shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </motion.span>
                );
              }
              return (
                <span key={index} className="text-neutral-800">
                  {item.text}
                </span>
              );
            })}
          </h2>
        </div>

        {/* --- ASYMMETRIC GRID: PRODUCT SHOWCASE & TEXT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left Column: Context / Call to Action */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <h3 className="text-2xl font-serif font-normal text-neutral-900">
              Interior Surface <br />
              Solutions
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              We provide decorative laminate and premium architectural surface
              materials that perfectly balance modern aesthetics, consistency,
              and practical spatial application—tailored completely for high-end
              environments.
            </p>
            <motion.button
              className="mt-4 flex items-center gap-3 bg-black text-white text-xs font-medium uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-md group"
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                <FiArrowRight />
              </div>
            </motion.button>
          </div>

          {/* Right Column: Overlapping Architectural Frames */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-6 relative">
            {/* Primary Display Frame */}
            <div className="sm:col-span-8 rounded-[32px] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                alt="Minimal wooden credenza and shelving unit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>

            {/* Asymmetrical Overlapping Dynamic Card */}
            <div className="sm:col-span-4 self-center sm:absolute sm:-right-4 sm:bottom-8 w-full sm:max-w-[240px] bg-white p-4 rounded-2xl border border-neutral-200/70 shadow-xl flex flex-col gap-3">
              <div className="w-full h-32 rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80"
                  alt="Oak material finish close-up"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-neutral-800">
                  Natural Oak Variant
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                  Matte anti-fingerprint surface
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
