"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function AboutStudio() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              About Studio
            </p>

            <h2 className="font-serif text-5xl leading-tight text-black md:text-7xl">
              Creating timeless
              <br />
              living experiences.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
              We design interiors that blend architecture, materials, and human
              emotion. Every project is crafted with a deep understanding of how
              people live, work, and connect.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              Our philosophy is simple: create spaces that remain beautiful not
              only today, but for decades to come.
            </p>

            <button className="group mt-10 flex items-center gap-3 rounded-full border border-black px-8 py-4 transition-all hover:bg-black hover:text-white">
              Discover Our Story
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200"
                alt="Interior Design Studio"
                className="h-[700px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 rounded-[2rem] bg-black p-8 text-white shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold">15+</h3>
                  <p className="mt-2 text-white/70">Years Experience</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">500+</h3>
                  <p className="mt-2 text-white/70">Projects Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
