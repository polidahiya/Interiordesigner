"use client";
import React, { useState, useMemo } from "react";

const SPACE_TYPES = [
  { id: "lounge", label: "Living Lounge", basePrice: 2400 },
  { id: "suite", label: "Master Suite", basePrice: 1900 },
  { id: "culinary", label: "Culinary Space", basePrice: 3200 },
  { id: "workspace", label: "Creative Studio", basePrice: 1500 },
];

const SCOPES = [
  {
    id: "curated",
    label: "Furniture & Decor Curation",
    multiplier: 1.0,
    desc: "Hand-sourced textiles, artisan furniture placement, and spatial color alignment.",
  },
  {
    id: "turnkey",
    label: "Full Turnkey Architectural Overhaul",
    multiplier: 1.6,
    desc: "Bespoke carpentry fabrication, dynamic lighting installations, and full structural management.",
  },
];

function CostEstimator() {
  const [selectedSpace, setSelectedSpace] = useState("lounge");
  const [selectedStyle, setSelectedStyle] = useState("Scandinavian");
  const [selectedScope, setSelectedScope] = useState("curated");
  const [areaSize, setAreaSize] = useState(350); // Default sq ft size

  // High-fidelity real-time mathematical estimate based on active configurations
  const calculationResult = useMemo(() => {
    const spaceObj = SPACE_TYPES.find((s) => s.id === selectedSpace);
    const scopeObj = SCOPES.find((sc) => sc.id === selectedScope);

    // Style adjustments adding subtle premium offsets
    let stylePremium = 1.0;
    if (selectedStyle === "Art Deco") stylePremium = 1.25; // Luxe materials cost premium
    if (selectedStyle === "Japandi") stylePremium = 1.12; // Raw imported woods

    const baseCost = spaceObj ? spaceObj.basePrice : 2000;
    const scopeMultiplier = scopeObj ? scopeObj.multiplier : 1.0;

    // Calculate final structural approximations
    const dynamicRate = (baseCost / 400) * stylePremium * scopeMultiplier;
    const estimatedTotal = Math.round(areaSize * dynamicRate);
    const materialAllocation = Math.round(estimatedTotal * 0.45);
    const artisanCraftsmanship = Math.round(estimatedTotal * 0.35);

    return {
      total: estimatedTotal.toLocaleString(),
      materials: materialAllocation.toLocaleString(),
      craft: artisanCraftsmanship.toLocaleString(),
      ratePerSqFt: Math.round(dynamicRate),
    };
  }, [selectedSpace, selectedStyle, selectedScope, areaSize]);

  return (
    <section
      id="pricing"
      className="bg-[#F5F1EB] text-[#2A2A2A] py-24 px-4 sm:px-8 md:px-12 xl:px-20 max-w-7xl mx-auto space-y-12"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 text-[#5C6B4A] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-6 h-[1px] bg-[#5C6B4A]" />
            Transparent Budgeting
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-semibold leading-tight">
            Estimate Your <br />
            <span className="italic font-normal text-[#8B7355]">
              Spatial Investment
            </span>
          </h2>
        </div>
        <p className="text-xs text-black/55 max-w-xs leading-relaxed md:text-right">
          Configure raw space variables to receive an instant physical
          investment projection tailored to our premium material benchmarks.
        </p>
      </div>

      {/* ESTIMATOR ENGINE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: INTERACTIVE CONFIGURATORS */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: SELECT SPACE TYPE */}
          <div className="space-y-3">
            <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-black/40 block">
              01 / Select Spatial Layout Blueprint
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SPACE_TYPES.map((space) => (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpace(space.id)}
                  className={`px-4 py-3 text-xs font-semibold rounded-xl tracking-wide transition-all border text-center ${
                    selectedSpace === space.id
                      ? "bg-[#2A2A2A] text-[#F5F1EB] border-[#2A2A2A] shadow-sm"
                      : "bg-[#EDE5D8]/40 text-black/70 border-black/5 hover:border-black/20 hover:bg-[#EDE5D8]/80"
                  }`}
                >
                  {space.label}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: SLIDER FOR SQUARE FOOTAGE */}
          <div className="space-y-3 bg-[#EDE5D8]/30 border border-black/5 p-5 rounded-2xl">
            <div className="flex justify-between items-baseline">
              <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-black/40">
                02 / Spatial Dimensions
              </label>
              <div className="font-mono text-xs font-bold text-[#8B7355]">
                <span className="text-lg font-sans font-medium text-[#2A2A2A]">
                  {areaSize}
                </span>{" "}
                SQ FT
              </div>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="25"
              value={areaSize}
              onChange={(e) => setAreaSize(Number(e.target.value))}
              className="w-full h-1 bg-[#EDE5D8] rounded-lg appearance-none cursor-pointer accent-[#2A2A2A]"
            />
            <div className="flex justify-between font-mono text-[9px] text-black/30">
              <span>100 SQ FT</span>
              <span>2,000 SQ FT</span>
            </div>
          </div>

          {/* STEP 3: MATCH DESIGN COLLECTION */}
          <div className="space-y-3">
            <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-black/40 block">
              03 / Select Aesthetic Framework Style
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[].map((style) => (
                <button
                  key={style.label}
                  onClick={() => setSelectedStyle(style.label)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between group transition-all duration-300 ${
                    selectedStyle === style.label
                      ? "bg-white border-[#2A2A2A] shadow-md"
                      : "bg-transparent border-black/10 opacity-70 hover:opacity-100 hover:border-black/30"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold block text-[#2A2A2A]">
                      {style.label}
                    </span>
                    <span className="text-[10px] block text-black/40">
                      {style.feel}
                    </span>
                  </div>
                  <span
                    className="w-3 h-3 rounded-full border border-black/10 transition-colors"
                    style={{
                      backgroundColor:
                        selectedStyle === style.label
                          ? style.textAccent
                          : "transparent",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* STEP 4: PROJECT SCOPE SELECTION */}
          <div className="space-y-3">
            <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-black/40 block">
              04 / Curation Execution Level
            </label>
            <div className="space-y-2.5">
              {SCOPES.map((scope) => (
                <div
                  key={scope.id}
                  onClick={() => setSelectedScope(scope.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    selectedScope === scope.id
                      ? "bg-white border-[#2A2A2A] shadow-md"
                      : "bg-[#EDE5D8]/20 border-black/5 hover:border-black/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="projectScope"
                    checked={selectedScope === scope.id}
                    onChange={() => setSelectedScope(scope.id)}
                    className="mt-0.5 accent-[#2A2A2A]"
                  />
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold block text-[#2A2A2A]">
                      {scope.label}
                    </span>
                    <p className="text-[11px] leading-relaxed text-black/55">
                      {scope.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DISPLAY LEDGER LEDGER BREAKDOWN BOX */}
        <div className="lg:col-span-5 lg:sticky lg:top-8 bg-[#EDE5D8] rounded-[2rem] p-6 sm:p-8 border border-black/5 shadow-xl space-y-6">
          <div className="space-y-1.5">
            <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase block">
              Investment Estimation Ledger
            </span>
            <div className="font-mono text-[10px] text-white/90 bg-[#8B7355] px-2.5 py-1 rounded w-max tracking-wide uppercase font-semibold">
              Project Token: {selectedStyle.slice(0, 3).toUpperCase()}-
              {areaSize}
            </div>
          </div>

          {/* MASTER BUDGET DISPLAY */}
          <div className="bg-[#2A2A2A] text-[#F5F1EB] p-6 rounded-2xl relative overflow-hidden shadow-inner space-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full filter blur-xl" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4A96A] uppercase block">
              Approximate Gross Investment
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-playfair text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F1EB]">
                ${calculationResult.total}
              </span>
              <span className="text-[11px] font-mono text-white/40">USD</span>
            </div>
            <div className="text-[10px] text-white/50 pt-2 border-t border-white/10 flex justify-between font-mono">
              <span>EST. RATE / SQ FT</span>
              <span>${calculationResult.ratePerSqFt} USD</span>
            </div>
          </div>

          {/* ITEMIZATION BREAKDOWN */}
          <div className="space-y-3.5 pt-2">
            <span className="font-mono text-[9px] tracking-widest text-black/50 uppercase block font-bold">
              Budgetary Allocation Distribution
            </span>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center border-b border-black/5 pb-2">
                <span className="text-black/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C6B4A]" /> Raw
                  Premium Materials (45%)
                </span>
                <span className="font-semibold text-[#2A2A2A]">
                  ${calculationResult.materials}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-black/5 pb-2">
                <span className="text-black/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A96A]" />{" "}
                  Artisan Craftsmanship (35%)
                </span>
                <span className="font-semibold text-[#2A2A2A]">
                  ${calculationResult.craft}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/30" />{" "}
                  Logistics, Freight & Logistics (20%)
                </span>
                <span className="font-semibold text-[#2A2A2A]">Included</span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-4 space-y-3">
            <button className="w-full bg-[#2A2A2A] hover:bg-[#8B7355] text-[#F5F1EB] text-xs font-bold tracking-wider py-4 rounded-xl shadow-md transition-colors duration-300 transform active:scale-[0.98]">
              Lock Estimate & Request Architectural Audit
            </button>
            <p className="text-[10px] text-black/40 text-center leading-normal max-w-xs mx-auto">
              Estimates are derived via geometric asset averages. Actual
              procurement contracts fluctuate on raw global log and masonry
              market index values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostEstimator;
