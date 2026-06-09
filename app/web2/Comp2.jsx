"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Modern Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200",
  },
  {
    title: "Luxury Penthouse",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    title: "Minimal Workspace",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
  },
];
export default function FeaturedProjects() {
  return (
    <section className="bg-[#f8f5f0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Selected Work
            </p>

            <h2 className="max-w-3xl font-serif text-5xl leading-tight text-black md:text-7xl">
              Spaces crafted
              <br />
              with intention.
            </h2>
          </div>

          <p className="max-w-md text-neutral-600">
            Every project reflects a unique story, balancing functionality,
            aesthetics, and timeless elegance.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-white/70">
                    {project.category}
                  </p>

                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-3xl">{project.title}</h3>

                    <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                      <FiArrowUpRight size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
