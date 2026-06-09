"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const products = [
  {
    id: 1,
    title: "The Lounge Oasis",
    category: "Sofa System",
    price: "$4,200",
    image: "https://www.theashleys.co.in/wp-content/uploads/2023/03/01-cover-page-1-1200x923.jpg", // Replace with your image paths
    size: "md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Fiddle Leaf Vessel",
    category: "Planter & Pot",
    price: "$380",
    image: "https://www.theashleys.co.in/wp-content/uploads/2023/03/01-cover-page-1-1200x923.jpg",
    size: "md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Monolith Side Table",
    category: "Accent Table",
    price: "$890",
    image: "https://www.theashleys.co.in/wp-content/uploads/2023/03/01-cover-page-1-1200x923.jpg",
    size: "md:col-span-1 row-span-1",
  },
];

export default function ProductShowcase() {
  // Fade up container for elements entering viewport
  const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpItem = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-white text-[#121212] py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* --- SECTION HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 block mb-3">
            Curated Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Sculpted Comfort for <br />
            <span className="font-medium">Everyday Spaces</span>
          </h2>
        </div>
        <a 
          href="#shop" 
          className="group flex items-center gap-2 font-medium text-sm tracking-wide border-b border-black pb-1 self-start md:self-auto transition-colors hover:text-neutral-500 hover:border-neutral-500"
        >
          View Full Catalog 
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* --- ASYMMETRIC GRID --- */}
      <motion.div 
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeUpItem}
            className={`group relative rounded-[2rem] bg-neutral-100 overflow-hidden flex flex-col justify-between p-8 border border-neutral-200/60 ${product.size}`}
          >
            {/* Background Image Container with Ken Burns Hover Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
              style={{ 
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 50%), url(${product.image})` 
              }}
            />

            {/* Top Interactive Row (Floating Tag + Quick Add Button) */}
            <div className="flex justify-between items-start z-10 w-full">
              <span className="bg-white/90 backdrop-blur-md text-[#121212] text-xs font-medium px-4 py-2 rounded-full tracking-wide shadow-sm">
                {product.category}
              </span>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#121212] text-white p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
              >
                <FiPlus className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Bottom Info Row (Reveals and text brightens up on hover) */}
            <div className="z-10 text-white md:text-[#121212] group-hover:text-white transition-colors duration-300">
              <p className="text-xs font-semibold tracking-wider uppercase opacity-80 mb-1">
                {product.price}
              </p>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight leading-none">
                {product.title}
              </h3>
            </div>

            {/* Dark gradient overlay that deepens on hover to contrast text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}