"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <section
      id="contact"
      className="relative bg-[#0F0F0F] text-[#F5F5F3] pt-32 pb-12 px-6 md:px-12 lg:px-24 w-full border-t border-stone-900 overflow-hidden"
    >
      {/* Structural Backdrop Glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-stone-800/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[80vh] relative z-10">
        {/* Upper Grid Layout: CTA Text vs. Minimalist Inline Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          {/* Big Editorial Header Hook */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-6 block">
              Collaboration
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6">
              Have a space <br />
              <span className="font-serif italic text-stone-400">
                worth transforming?
              </span>
            </h2>
            <p className="text-stone-400 font-light text-base md:text-lg max-w-sm leading-relaxed">
              We take on limited residential and commercial commissions globally
              each calendar year. Let's create something timeless.
            </p>
          </div>

          {/* Minimalist Interactive Input Form */}
          <div className="lg:col-span-6 w-full pt-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-10 w-full"
            >
              {/* Animated Inline Fields */}
              <div className="relative group w-full">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-stone-800 focus:border-white py-4 text-lg font-light tracking-wide text-white placeholder-stone-600 outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative group w-full">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-stone-800 focus:border-white py-4 text-lg font-light tracking-wide text-white placeholder-stone-600 outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative group w-full">
                <textarea
                  rows="3"
                  required
                  placeholder="Tell us about your spatial project..."
                  className="w-full bg-transparent border-b border-stone-800 focus:border-white py-4 text-lg font-light tracking-wide text-white placeholder-stone-600 outline-none resize-none transition-colors duration-300"
                />
              </div>

              {/* Slick Submission Button */}
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="group flex items-center gap-4 border border-stone-800 hover:border-white bg-transparent hover:bg-white text-white hover:text-[#0F0F0F] px-8 py-4 rounded-full transition-all duration-500 tracking-wider text-xs uppercase font-medium"
                >
                  <span>Send Blueprint Brief</span>
                  <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Lower Metadata Grid Alignment */}
        <div className="pt-16 border-t border-stone-900 grid grid-cols-1 md:grid-cols-12 gap-12 text-xs uppercase tracking-widest text-stone-500">
          {/* Main Brand Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-stone-300 font-medium text-lg tracking-[0.2em] mb-2">
                AURA.
              </p>
              <p className="normal-case tracking-normal font-light text-stone-500">
                © 2026 Aura Studio. All rights reserved.
              </p>
            </div>
          </div>

          {/* Location Parameters */}
          <div className="md:col-span-3">
            <p className="text-stone-400 font-medium mb-3">HQ Studio</p>
            <p className="normal-case tracking-normal font-light text-stone-500 leading-relaxed">
              Via della Moscova, 34
              <br />
              20121 Milano, Italy
            </p>
          </div>

          {/* Direct Line Contacts */}
          <div className="md:col-span-3">
            <p className="text-stone-400 font-medium mb-3">Connect</p>
            <p className="lowercase tracking-normal font-light text-stone-500 mb-1">
              studio@aurainteriors.com
            </p>
            <p className="tracking-normal font-light text-stone-500">
              +39 02 8765 4321
            </p>
          </div>

          {/* Social Micro Links */}
          <div className="md:col-span-2 flex md:justify-end items-start gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-stone-900 border border-stone-800 hover:border-stone-500 text-stone-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FiInstagram className="text-base" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-stone-900 border border-stone-800 hover:border-stone-500 text-stone-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-base" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-stone-900 border border-stone-800 hover:border-stone-500 text-stone-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FiTwitter className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
