"use client";

import { motion } from "framer-motion";

const awards = [
  {
    name: "Awwwards",
    year: "2025",
    desc: "Honorable Mention",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Awwwards_logo.svg",
  },
  {
    name: "Dezeen Awards",
    year: "2024",
    desc: "Interior Design Finalist",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Dezeen_Logo.svg",
  },
  {
    name: "Architecture MasterPrize",
    year: "2024",
    desc: "Winner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Architecture_MasterPrize_logo.svg",
  },
  {
    name: "Dezeen Awards",
    year: "2023",
    desc: "Shortlisted",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Dezeen_Logo.svg",
  },
];

function AwardCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group flex flex-col items-center justify-center rounded-[2rem] border border-black/10 bg-white p-10 text-center transition"
    >
      {/* Logo */}
      <img
        src={item.logo}
        alt={item.name}
        className="h-12 w-auto grayscale transition duration-500 group-hover:grayscale-0"
      />

      {/* Title */}
      <h3 className="mt-6 text-xl font-semibold text-black">
        {item.name}
      </h3>

      {/* Year */}
      <p className="mt-2 text-sm text-neutral-500">
        {item.year}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm text-neutral-600">
        {item.desc}
      </p>

      {/* Hover underline */}
      <div className="mt-6 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-16" />
    </motion.div>
  );
}

export default function Awards() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Recognition
          </p>

          <h2 className="mt-4 font-serif text-5xl md:text-7xl text-black">
            Awards & Achievements
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Our work has been recognized globally for its craftsmanship,
            innovation, and timeless design approach.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((item, index) => (
            <AwardCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}