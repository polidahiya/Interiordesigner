import React from "react";
const MARQUEE_ITEMS = [
  "Scandinavian Simplicity",
  "✦",
  "Japandi Warmth",
  "✦",
  "Art Deco Glamour",
  "✦",
  "Biophilic Design",
  "✦",
  "Custom Furniture",
  "✦",
  "Material Sourcing",
  "✦",
];

function Marquestrip() {
  return (
    <section className="bg-[#EDE5D8] border-y border-black/10 py-3.5 overflow-hidden whitespace-nowrap select-none">
      <div className="animate-marquee flex gap-12 items-center w-max">
        {[...Array(4)]
          .flatMap(() => MARQUEE_ITEMS)
          .map((text, i) => (
            <span
              key={i}
              className={`text-[11px] font-medium tracking-[0.2em] uppercase ${
                text === "✦" ? "text-[#D4A96A] text-sm" : "text-black/50"
              }`}
            >
              {text}
            </span>
          ))}
      </div>
    </section>
  );
}

export default Marquestrip;
