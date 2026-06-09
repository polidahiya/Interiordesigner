"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Discovery",
    desc: "We understand your vision, lifestyle, and spatial needs to build the foundation of the design.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200",
  },
  {
    title: "Concept Design",
    desc: "We craft mood boards, layouts, and visual direction that define the personality of your space.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
  },
  {
    title: "3D Visualization",
    desc: "Realistic renders help you experience the space before it is built.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200",
  },
  {
    title: "Execution",
    desc: "We bring the design to life with precision, materials, and craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200",
  },
];

export default function DesignProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Our Process
          </p>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl">
            How we bring
            <br />
            spaces to life.
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Sticky Left Image */}
          <div className="relative h-[600px] lg:sticky lg:top-32">
            {steps.map((step, index) => (
              <motion.img
                key={step.title}
                src={step.image}
                alt={step.title}
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: active === index ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </div>

          {/* Right Steps */}
          <div className="flex flex-col gap-16 mt-96">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                onViewportEnter={() => setActive(index)}
                viewport={{ amount: 1 }}
                className={`cursor-pointer border-l-2 pl-6 transition-all ${
                  active === index ? "border-white" : "border-white/20"
                }`}
              >
                <h3 className="text-3xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
