import React from "react";

function Footer() {
  return (
    <footer className="border-t border-black/10 py-12 px-4 sm:px-8 md:px-12 xl:px-20 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="text-center sm:text-left space-y-1">
        <div className="font-playfair text-lg font-bold text-[#2A2A2A]">
          Interior Craft
        </div>
        <p className="text-[10px] text-black/40 font-medium tracking-wide">
          © 2026 Architectural Studio — Curating spaces with soul.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {["Instagram", "Pinterest", "Houzz", "LinkedIn"].map((platform) => (
          <a
            key={platform}
            href={`#${platform.toLowerCase()}`}
            className="text-xs font-medium text-black/40 hover:text-[#2A2A2A] transition-colors"
          >
            {platform}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
