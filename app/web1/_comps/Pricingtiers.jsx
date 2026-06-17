"use client";
import { useState } from "react";
const PRICING_TIERS = [
  {
    id: "consult",
    title: "Structural Space Consultation",
    price: "$450",
    period: "Per Session",
    desc: "Complete architectural review, lighting orientation map evaluation, structural material testing guidelines, and a high-fidelity mood board draft config tracking physical limitations.",
    inclusions: [
      "3D Layout Strategy",
      "Timber Sourcing Verification",
      "Turnkey Feasibility Matrix",
    ],
  },
  {
    id: "curate",
    title: "Turnkey Curation Assembly",
    price: "$3,800",
    period: "Per Room Suite",
    desc: "Full architectural overhaul management including floor-to-ceiling execution pipelines. Handcrafted wood styling components, artisanal furniture allocation blueprints, and spatial alignment mapping.",
    inclusions: [
      "Onsite Project Supervision",
      "Custom Solid Wood Procurement",
      "Premium Textile Selection",
    ],
  },
];

export default function MediaWalkthrough() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#EDE5D8] py-20 px-4 sm:px-8 md:px-12 xl:px-20 border-y border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Media Canvas Wrapper Block */}
        <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-xl aspect-video bg-black">
          {!isPlaying ? (
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-8">
              {/* Cover Visual Placeholder */}
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"
                alt="Walkthrough Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-40" />

              <span className="relative z-20 font-mono text-[9px] tracking-widest text-white/80 uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full w-max">
                Cinematic Reel
              </span>

              {/* Master Spatial Control Button Trigger */}
              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-20 self-center w-16 h-16 rounded-full bg-[#F5F1EB] hover:bg-[#D4A96A] text-[#2A2A2A] hover:text-white flex items-center justify-center text-xl transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                aria-label="Play Walkthrough Video"
              >
                ▶
              </button>

              <div className="relative z-20 text-white font-mono text-[10px] tracking-wide opacity-80">
                DURATION — 01:42 mins
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Spatial Interior Walkthrough Design System Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Right Content Engine Segment */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-[#5C6B4A] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-6 h-[1px] bg-[#5C6B4A]" />
              Spatial Motion
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#2A2A2A] leading-tight">
              A Symphony <br />
              of Natural Light
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-black/60">
            Take a virtual tour through our benchmark dynamic architectural
            layout structure. See how sunlight routes gracefully along solid
            rosewood joints during peak morning hours.
          </p>
          <div className="pt-2">
            <button className="border border-[#2A2A2A] hover:bg-[#2A2A2A] text-[#2A2A2A] hover:text-[#F5F1EB] text-xs font-semibold px-6 py-3 rounded-full transition-colors duration-300">
              Request VR Floorplan File
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
