"use client";

import { motion } from "framer-motion";
import { FiHome, FiLayers, FiCompass, FiPenTool } from "react-icons/fi";

const services = [
  {
    icon: FiHome,
    title: "Residential Design",
    desc: "Luxury homes crafted with timeless aesthetics and functional elegance.",
  },
  {
    icon: FiLayers,
    title: "Space Planning",
    desc: "Optimized layouts that balance beauty, flow, and usability.",
  },
  {
    icon: FiPenTool,
    title: "3D Visualization",
    desc: "Photorealistic renders to experience your space before execution.",
  },
  {
    icon: FiCompass,
    title: "Turnkey Execution",
    desc: "End-to-end project delivery with precision and craftsmanship.",
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative rounded-[2rem] border border-black/10 bg-white p-10 shadow-sm transition-all"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-black/5 to-transparent" />

      {/* Icon */}
      <div className="mb-6 inline-flex rounded-full bg-black p-4 text-white">
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-black">{service.title}</h3>

      {/* Description */}
      <p className="mt-4 text-neutral-600 leading-relaxed">{service.desc}</p>

      {/* Hover underline */}
      <div className="mt-8 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-[#f8f5f0] py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Our Services
          </p>

          <h2 className="mt-4 font-serif text-5xl md:text-7xl text-black">
            What we design
            <br />
            for you.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
