import React from "react";
const PROJECTS = [
  {
    title: "The Oslo Suite",
    style: "Scandinavian",
    location: "Oslo, NO",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",
  },
  {
    title: "Kyoto Loft",
    style: "Japandi",
    location: "Kyoto, JP",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80",
  },
  {
    title: "The Gatsby Penthouse",
    style: "Art Deco",
    location: "New York, US",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=700&q=80",
  },
];

function Portfolio() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 md:px-12 xl:px-20 max-w-7xl mx-auto space-y-12"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 text-[#5C6B4A] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-6 h-[1px] bg-[#5C6B4A]" />
            Our Work
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-[#2A2A2A]">
            Spaces That{" "}
            <span className="italic font-normal text-[#8B7355]">Breathe</span>
          </h2>
        </div>
        <a
          href="#portfolio"
          className="text-xs font-semibold text-black/50 hover:text-[#2A2A2A] border-b border-black/20 hover:border-[#2A2A2A] pb-1 self-start sm:self-auto transition-all"
        >
          View all collections →
        </a>
      </div>

      {/* Dynamic Structural Grid Bounds */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.title}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-[#EDE5D8] ${
              idx === 0
                ? "md:col-span-7 h-[460px]"
                : idx === 1
                  ? "md:col-span-5 h-[460px]"
                  : "md:col-span-12 h-[320px]"
            }`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#D4A96A]">
                {project.style}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl font-medium text-white">
                {project.title}
              </h3>
              <p className="text-xs text-white/50 font-medium">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
