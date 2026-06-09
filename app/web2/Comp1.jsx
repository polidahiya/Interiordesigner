"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMousePointer,
  FiAward,
  FiHome,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img
          src="/interior.jpg"
          alt="Luxury Interior"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-12">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md"
          >
            <FiAward />
            Award Winning Interior Studio
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-6xl leading-none text-white md:text-8xl xl:text-[9rem]"
          >
            Designing
            <br />
            Spaces That
            <br />
            Feel Alive.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Luxury interiors crafted through timeless architecture,
            curated materials, and thoughtful living experiences.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition">
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-md">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
        className="absolute bottom-16 right-8 hidden w-80 rounded-3xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-xl lg:block"
      >
        <div className="mb-4 flex items-center gap-3">
          <FiHome className="text-xl" />
          <span className="text-sm uppercase tracking-widest text-white/70">
            Featured Project
          </span>
        </div>

        <h3 className="mb-2 text-2xl">
          Modern Villa Residence
        </h3>

        <p className="text-sm text-white/70">
          Minimalist architecture blended with warm textures
          and bespoke furnishings.
        </p>

        <div className="mt-6 flex justify-between border-t border-white/10 pt-4">
          <div>
            <p className="text-2xl font-bold">250+</p>
            <p className="text-xs text-white/60">
              Completed Homes
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">15+</p>
            <p className="text-xs text-white/60">
              Years Experience
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <div className="absolute top-full left-0 right-0 z-20 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-6 py-8 text-center text-white">
          <div>
            <p className="text-4xl font-bold">500+</p>
            <p className="text-white/60">Projects</p>
          </div>

          <div>
            <p className="text-4xl font-bold">98%</p>
            <p className="text-white/60">Client Satisfaction</p>
          </div>

          <div>
            <p className="text-4xl font-bold">20+</p>
            <p className="text-white/60">Design Awards</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-32 left-8 z-20 hidden items-center gap-3 text-white lg:flex"
      >
        <FiMousePointer />
        <span className="text-sm uppercase tracking-widest">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}