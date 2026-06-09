"use client";

import { motion } from "framer-motion";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* TOP GRID */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <h2 className="font-serif text-3xl">STUDIO</h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              We design timeless interiors that blend emotion, architecture, and
              craftsmanship into living spaces.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
              Navigation
            </h3>

            <ul className="space-y-3 text-white/70">
              {["Home", "Projects", "Services", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-white transition"
                    >
                      {item}
                      <FiArrowUpRight className="opacity-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
              Services
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>Residential Design</li>
              <li>Modular Kitchen</li>
              <li>Wardrobe Design</li>
              <li>3D Visualization</li>
              <li>Turnkey Execution</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
              Contact
            </h3>

            <p className="text-white/70">Haryana, India</p>

            <p className="mt-3 text-white/70">+91 00000 00000</p>

            <p className="mt-3 text-white/70">hello@studio.com</p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-4 text-xl">
              <FiInstagram className="cursor-pointer hover:text-white/60" />
              <FiTwitter className="cursor-pointer hover:text-white/60" />
              <FiFacebook className="cursor-pointer hover:text-white/60" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Studio Interiors. All rights reserved.
          </p>

          <motion.a
            whileHover={{ y: -3 }}
            href="#top"
            className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
