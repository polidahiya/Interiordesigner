"use client"
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa6';

export default function BrandShowcaseFooter() {
  // Reveal animation variants
  const revealUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <footer className="relative w-full bg-[#FAF9F6] text-black pt-32 pb-16 px-6 overflow-hidden">
      
      {/* --- GIANT BACKGROUND BRAND TYPOGRAPHY WITH GLASS BLUR EFFECT --- */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl select-none pointer-events-none z-0">
        <h2 className="text-[14vw] md:text-[16vw] font-serif font-bold text-neutral-900/10 tracking-tighter text-center leading-none">
          seiko
        </h2>
        {/* Radial blur masking element to simulate depth of field on the typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF9F6]/40 to-[#FAF9F6] backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* --- OVERLAPPING EDITORIAL GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          
          {/* Left Column: Premium Material Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 block uppercase">
              ( Various Pattern )
            </span>
            <motion.div 
              className="w-full rounded-[36px] overflow-hidden bg-neutral-900 border border-neutral-200 aspect-[4/3] relative group shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80" 
                alt="Fluted wood panel details" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold">Tactile Ribbed Walnut</h4>
                  <p className="text-[10px] opacity-80 mt-0.5">Custom architectural installation</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs">
                  <FiArrowUpRight />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Giant Text & Secondary Material Capsule */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 block uppercase mb-3">
                ( Premium Materials )
              </span>
              <h3 className="text-3xl md:text-5xl font-serif font-light leading-[1.25] text-neutral-900 tracking-tight">
                Premium <span className="italic font-normal">Interior</span> Surfaces for <br />
                Design Driven Projects.
              </h3>
            </div>

            {/* Flat details row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 border-t border-neutral-200/80">
              <p className="text-xs text-neutral-500 leading-relaxed">
                By combining physical beauty with architectural resilience, our collections empower designers to elevate residential, hospitality, and corporate workspaces with zero compromises.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-neutral-200 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&w=200&q=80" 
                    alt="Laminated sample preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-800">Order Swatch Samples</p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Delivered directly to your studio</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- INQUIRY / CORPORATE CONTACT SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-neutral-200/80">
          
          {/* Logo brand label */}
          <div className="flex flex-col gap-3">
            <h5 className="font-serif text-lg font-bold">seiko.</h5>
            <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
              Award-winning surface engineering and bespoke interior solutions for modern architectures.
            </p>
          </div>

          {/* Core Contacts */}
          <div className="flex flex-col gap-3 text-xs text-neutral-600">
            <h6 className="font-semibold text-neutral-800 uppercase tracking-widest text-[10px]">Inquiries</h6>
            <a href="mailto:hello@seikosurfaces.com" className="flex items-center gap-2 hover:text-black transition-colors">
              <FiMail /> hello@seikosurfaces.com
            </a>
            <a href="tel:+18005553920" className="flex items-center gap-2 hover:text-black transition-colors">
              <FiPhone /> +1 (800) 555-3920
            </a>
          </div>

          {/* Headquarters Location */}
          <div className="flex flex-col gap-3 text-xs text-neutral-600">
            <h6 className="font-semibold text-neutral-800 uppercase tracking-widest text-[10px]">Studio</h6>
            <p className="flex items-start gap-2 leading-relaxed">
              <FiMapPin className="mt-0.5 shrink-0" />
              8420 Melrose Ave, Suite 300 <br />
              West Hollywood, CA 90069
            </p>
          </div>

          {/* Socials Connection */}
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-neutral-800 uppercase tracking-widest text-[10px]">Social Index</h6>
            <div className="flex items-center gap-3 text-lg text-neutral-500">
              <a href="#" className="hover:text-black transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-black transition-colors"><FaXTwitter /></a>
              <a href="#" className="hover:text-black transition-colors"><FaLinkedin /></a>
              <a href="#" className="hover:text-black transition-colors"><FaYoutube /></a>
            </div>
          </div>

        </div>

        {/* --- BOTTOM RIGHTS BAR --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-neutral-200/60 text-[10px] text-neutral-400 uppercase tracking-widest gap-4">
          <p>© 2026 Seiko Surfaces. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}