"use client";
import { useState } from "react";
const MATERIAL_DATA = [
  {
    id: "wood",
    name: "Solid Wood & Timber",
    subtitle: "Rosewood & Sheesham Wood",
    desc: "Premium, dense grains sustainably sourced for primary structural frameworks and bespoke cabinetry. Hand-polished with eco-conscious organic oils to ensure it breathes.",
    spec: "Grade-A Solid Core",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80",
  },
  {
    id: "rattan",
    name: "Woven Rattan",
    subtitle: "Natural Split Caning",
    desc: "Hand-woven ventilation accents integrated seamlessly into modern wardrobes, screen panels, and lightweight accent furniture to break up clean geometry with organic warmth.",
    spec: "A-Grade Indonesian Cane",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80",
  },
  {
    id: "stone",
    name: "Organic Masonry",
    subtitle: "Raw Limestone & Quartzite",
    desc: "Unpolished countertops and accent masonry designed with textured spatial depth. Resistant to thermal shock, carrying tactile elegance straight from nature.",
    spec: "Honed Finish Matt",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

export default function MaterialShowcase() {
  const [activeTab, setActiveTab] = useState("wood");
  const material = MATERIAL_DATA.find((m) => m.id === activeTab);

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 xl:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Informational Engine */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-[#5C6B4A] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-6 h-[1px] bg-[#5C6B4A]" />
              Material Honesty
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">
              Elements with Soul
            </h2>
          </div>

          {/* Vertical Navigation Column Layout */}
          <div className="flex flex-col gap-2 border-l border-black/10 pl-2">
            {MATERIAL_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === item.id
                    ? "text-[#8B7355] bg-[#EDE5D8] font-semibold"
                    : "text-black/50 hover:text-[#2A2A2A] hover:bg-black/5"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="space-y-2 pt-2 animate-fadeIn">
            <h4 className="font-playfair text-xl text-[#2A2A2A] font-medium">
              {material.subtitle}
            </h4>
            <p className="text-xs leading-relaxed text-black/60">
              {material.desc}
            </p>
            <div className="pt-2">
              <span className="font-mono text-[10px] bg-black/5 px-2.5 py-1 rounded text-black/70 font-semibold tracking-wider uppercase">
                {material.spec}
              </span>
            </div>
          </div>
        </div>

        {/* Right High-fidelity Adaptive Viewport */}
        <div className="lg:col-span-7 h-[380px] sm:h-[440px] relative rounded-3xl overflow-hidden shadow-lg bg-[#EDE5D8]">
          <img
            src={material.img}
            alt={material.name}
            className="w-full h-full object-cover transition-all duration-700 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
