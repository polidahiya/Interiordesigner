"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Villa Owner",
    text: "The team transformed our house into a timeless masterpiece. Every corner feels intentional and luxurious.",
  },
  {
    name: "Sophia Sharma",
    role: "Apartment Client",
    text: "Their attention to detail is unmatched. The space feels warm, elegant, and deeply personal.",
  },
  {
    name: "Rohan Kapoor",
    role: "Penthouse Owner",
    text: "From concept to execution, everything was seamless. The final result exceeded expectations.",
  },
  {
    name: "Meera Iyer",
    role: "Homeowner",
    text: "They don’t just design interiors, they create experiences that feel alive and emotional.",
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="w-[350px] flex-shrink-0 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <div className="mb-4 flex gap-1 text-yellow-400">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>

      <p className="text-white/80 leading-relaxed">"{item.text}"</p>

      <div className="mt-6 border-t border-white/10 pt-4">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-sm text-white/50">{item.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-black py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Testimonials
          </p>

          <h2 className="mt-4 font-serif text-5xl md:text-7xl">
            What clients
            <br />
            say about us.
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
