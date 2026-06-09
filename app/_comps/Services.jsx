import React from "react";
const SERVICES = [
  {
    icon: "⬡",
    title: "Space Planning",
    desc: "We map every corner with purpose — flow, function, and form in perfect balance.",
  },
  {
    icon: "◎",
    title: "Material Curation",
    desc: "Hand-sourced textiles, stone, and timber selected for sustainability and soul.",
  },
  {
    icon: "✦",
    title: "Full Turnkey",
    desc: "From concept board to final cushion — we handle everything, every detail.",
  },
];

function Services() {
  return (
    <section id="about" className="bg-[#EDE5D8] border-y border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
        {SERVICES.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="p-8 sm:p-12 space-y-4 hover:bg-[#F5F1EB] transition-colors duration-300 group"
          >
            <div className="text-2xl text-[#8B7355] transition-transform duration-300 group-hover:scale-110 origin-left">
              {icon}
            </div>
            <h3 className="font-playfair text-xl font-medium text-[#2A2A2A] group-hover:text-[#5C6B4A] transition-colors">
              {title}
            </h3>
            <p className="text-xs leading-relaxed text-black/60">{desc}</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B7355] pt-2 transform transition-transform duration-200 group-hover:translate-x-1">
              Learn more <span className="text-xs">→</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
