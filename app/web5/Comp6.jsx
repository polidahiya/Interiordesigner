"use client"
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const PROJECTS = [
  {
    title: "The Kyoto Pavilion Residence",
    location: "Kyoto, Japan",
    surface: "Natural Smoked Oak Planks",
    year: "2025",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Omni Corporate Headquarters",
    location: "Frankfurt, Germany",
    surface: "Anti-Reflective Black Laminated Facades",
    year: "2026",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Aura Boutique Resort Lounge",
    location: "Bali, Indonesia",
    surface: "Ribbed Teak Acoustic Paneling",
    year: "2025",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-[#FAF9F6] text-black py-24 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Header HUD */}
        <div className="border-b border-neutral-200 pb-6 mb-12 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">( Realized Spaces )</h2>
          <span className="text-xs font-serif italic text-neutral-500">Curating Presence</span>
        </div>

        {/* Dense Column Structure */}
        <div className="flex flex-col">
          {PROJECTS.map((proj, i) => (
            <motion.div 
              key={i}
              className="group relative grid grid-cols-1 md:grid-cols-12 items-center py-8 border-b border-neutral-200 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              
              {/* Dynamic Sliding Background Hover Preview Block */}
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-64 h-40 rounded-2xl overflow-hidden pointer-events-none opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.25,1,0.5,1] hidden lg:block z-30 shadow-2xl border border-white/20">
                <img src={proj.img} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>

              {/* Grid Column Layout */}
              <div className="md:col-span-1 text-xs font-mono text-neutral-400">0{i+1}</div>
              
              <div className="md:col-span-5 pt-2 md:pt-0">
                <h3 className="text-xl md:text-2xl font-serif font-light text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">
                  {proj.title}
                </h3>
                <span className="text-xs text-neutral-400 block md:hidden mt-1">{proj.location}</span>
              </div>

              <div className="md:col-span-3 text-xs text-neutral-500 font-light pt-1 md:pt-0">
                {proj.surface}
              </div>

              <div className="md:col-span-2 text-xs font-mono text-neutral-400 hidden md:block text-right">
                {proj.location} • {proj.year}
              </div>

              <div className="md:col-span-1 flex justify-end pt-4 md:pt-0">
                <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white group-hover:bg-black group-hover:text-white group-hover:border-black flex items-center justify-center transition-colors duration-300">
                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}