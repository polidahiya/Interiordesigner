import React from "react";
const STATS = [
  { num: "240+", label: "Spaces Designed" },
  { num: "12", label: "Years of Craft" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "3", label: "Style Collections" },
];

function Businessstrip() {
  return (
    <section className="bg-[#2A2A2A] text-[#F5F1EB] py-8 px-4 sm:px-8 md:px-12 xl:px-20 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1 max-w-4xl">
          {STATS.map(({ num, label }) => (
            <div key={label} className="space-y-1 group">
              <div className="font-playfair text-3xl sm:text-4xl font-semibold text-[#D4A96A] tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left">
                {num}
              </div>
              <div className="text-[11px] text-[#F5F1EB]/50 font-medium tracking-wider uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
        <div className="font-mono text-[10px] text-[#F5F1EB]/35 tracking-[0.25em] flex items-center gap-3 border-t border-white/10 pt-4 md:pt-0 w-full md:w-auto">
          <span className="w-10 h-[1px] bg-[#D4A96A]" />
          ESTABLISHED 2012
        </div>
      </div>
    </section>
  );
}

export default Businessstrip;
