import React from "react";

function Cta() {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 xl:px-20 max-w-7xl mx-auto">
      <div className="bg-[#2A2A2A] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D4A96A]/20 to-transparent rounded-full filter blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <p className="font-mono text-[10px] tracking-widest text-[#D4A96A] uppercase font-semibold">
              Ready to transform your environment?
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F5F1EB] leading-tight">
              Your dream interior starts <br className="hidden sm:block" />
              with a physical consultation.
            </h2>
          </div>

          <button className="bg-[#F5F1EB] hover:bg-[#D4A96A] hover:text-[#F5F1EB] text-[#2A2A2A] text-xs font-bold tracking-wider px-8 py-4 rounded-full whitespace-nowrap transition-all duration-300 transform active:scale-95 shadow-md self-start lg:self-auto">
            Book a Structural Audit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
