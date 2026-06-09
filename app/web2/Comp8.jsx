"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

// ==========================================
// EDITABLE PRICE LIST (Modify rates here)
// ==========================================
const PRICE_LIST = {
  packages: {
    essential: 1.0, // Base multiplier
    premium: 1.3,   // 30% extra
    luxe: 1.6,      // 60% extra
  },
  fullHomeBase: {
    "1bhk": 250000,
    "2bhk": 400000,
    "3bhk": 550000,
    "4bhk": 700000,
    "5bhk": 850000,
  },
  rooms: {
    living: 80000,
    kitchen: 120000,
    bedroom: 70000,
    bathroom: 30000,
    dining: 40000,
  },
  kitchenType: {
    "straight": 80000,
    "l-shaped": 110000,
    "parallel": 130000,
    "u-shaped": 150000,
  },
  kitchenSqFtRate: 350, // Added to type price
  wardrobe: {
    baseRatePerFt: 1200,
    type: { sliding: 5000, swing: 0 },
    finish: { laminate: 0, membrane: 4000, acrylic: 8000 },
    core: { mdf: 0, "hdf/hrm": 3000, plywood: 6000 },
    accessory: {
      loft: 8000,
      "single drawer": 2000,
      "2 half drawers": 3500,
      "wicker pull out": 5000,
    },
  },
};

export default function CostEstimator() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("fullhome");

  // FULL HOME STATE
  const [bhk, setBhk] = useState("2bhk");
  const [rooms, setRooms] = useState({
    living: 1,
    kitchen: 1,
    bedroom: 2,
    bathroom: 2,
    dining: 1,
  });
  const [packageType, setPackageType] = useState("essential");

  // KITCHEN STATE
  const [kitchenType, setKitchenType] = useState("l-shaped");
  const [kitchenSize, setKitchenSize] = useState("100"); // default value as string
  const [kitchenPackage, setKitchenPackage] = useState("essential");

  // WARDROBE STATE
  const [wardrobe, setWardrobe] = useState({
    height: "7", // default structural height estimation
    type: "sliding",
    finish: "laminate",
    core: "mdf",
    accessory: "loft",
  });

  const updateRoom = (key, value) => {
    setRooms((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + value),
    }));
  };

  // ==========================================
  // REAL-TIME PRICE CALCULATION LOGIC
  // ==========================================
  const calculateTotal = () => {
    if (type === "fullhome") {
      const baseBhkPrice = PRICE_LIST.fullHomeBase[bhk] || 0;
      const customRoomsPrice = Object.keys(rooms).reduce((acc, key) => {
        return acc + rooms[key] * PRICE_LIST.rooms[key];
      }, 0);
      const packageMultiplier = PRICE_LIST.packages[packageType];
      return (baseBhkPrice + customRoomsPrice) * packageMultiplier;
    }

    if (type === "kitchen") {
      const typePrice = PRICE_LIST.kitchenType[kitchenType] || 0;
      const sizePrice = (Number(kitchenSize) || 0) * PRICE_LIST.kitchenSqFtRate;
      const packageMultiplier = PRICE_LIST.packages[kitchenPackage];
      return (typePrice + sizePrice) * packageMultiplier;
    }

    if (type === "wardrobe") {
      const heightFt = Number(wardrobe.height) || 0;
      const sizeCost = heightFt * PRICE_LIST.wardrobe.baseRatePerFt;
      const typeCost = PRICE_LIST.wardrobe.type[wardrobe.type] || 0;
      const finishCost = PRICE_LIST.wardrobe.finish[wardrobe.finish] || 0;
      const coreCost = PRICE_LIST.wardrobe.core[wardrobe.core] || 0;
      const accessoryCost = PRICE_LIST.wardrobe.accessory[wardrobe.accessory] || 0;
      return sizeCost + typeCost + finishCost + coreCost + accessoryCost;
    }

    return 0;
  };

  const StepWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {children}
    </motion.div>
  );

  return (
    <section className="bg-[#0b0b0b] text-white py-24 min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* LIVE ESTIMATION DISPLAY BANNER */}
        <div className="sticky top-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex justify-between items-center mb-12 shadow-xl">
          <div>
            <p className="text-xs tracking-widest text-white/60 uppercase">
              Current Estimation ({type.toUpperCase()})
            </p>
            <h3 className="text-3xl font-mono font-bold mt-1 text-green-400">
              ₹{calculateTotal().toLocaleString("en-IN")}
            </h3>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
              Live Total
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-5xl font-serif mb-10">Cost Estimation</h2>

        {/* TYPE SELECT */}
        <div className="flex gap-4 mb-10">
          {["fullhome", "kitchen", "wardrobe"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setType(t);
                setStep(1);
              }}
              className={`px-5 py-2 rounded-full border transition-all ${
                type === t ? "bg-white text-black font-semibold" : "border-white/30 hover:border-white/60"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ================= FULL HOME ================= */}
          {type === "fullhome" && step === 1 && (
            <StepWrapper key="fh1">
              <h3 className="text-2xl mb-4">Select BHK</h3>
              <div className="flex gap-3 flex-wrap">
                {["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBhk(b)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      bhk === b ? "bg-white text-black font-semibold" : "border-white/30"
                    }`}
                  >
                    {b.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-10 px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-all"
              >
                Next Step
              </button>
            </StepWrapper>
          )}

          {type === "fullhome" && step === 2 && (
            <StepWrapper key="fh2">
              <h3 className="text-2xl mb-6">Customize Rooms</h3>
              <div className="space-y-4 max-w-md">
                {Object.keys(rooms).map((key) => (
                  <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="capitalize">{key}</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateRoom(key, -1)}
                        className="p-2 border border-white/30 rounded hover:bg-white/10 transition"
                      >
                        <FiMinus />
                      </button>
                      <span className="w-6 text-center font-mono">{rooms[key]}</span>
                      <button
                        onClick={() => updateRoom(key, 1)}
                        className="p-2 border border-white/30 rounded hover:bg-white/10 transition"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-all"
                >
                  Next Step
                </button>
              </div>
            </StepWrapper>
          )}

          {type === "fullhome" && step === 3 && (
            <StepWrapper key="fh3">
              <h3 className="text-2xl mb-4">Select Package</h3>
              <div className="flex gap-3">
                {["essential", "premium", "luxe"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPackageType(p)}
                    className={`px-5 py-2 rounded-full border transition-all ${
                      packageType === p ? "bg-white text-black font-semibold" : "border-white/30"
                    }`}
                  >
                    {p.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
                >
                  Back
                </button>
              </div>
            </StepWrapper>
          )}

          {/* ================= KITCHEN ================= */}
          {type === "kitchen" && (
            <StepWrapper key="k1">
              <h3 className="text-2xl mb-4">Select Kitchen Type</h3>
              <div className="flex flex-wrap gap-3">
                {["straight", "l-shaped", "parallel", "u-shaped"].map((k) => (
                  <button
                    key={k}
                    onClick={() => setKitchenType(k)}
                    className={`px-4 py-2 rounded-full border capitalize transition-all ${
                      kitchenType === k ? "bg-white text-black font-semibold" : "border-white/30"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

              <div className="mt-6 max-w-sm">
                <label className="block mb-2 text-sm text-white/70">
                  Enter Measurement (sq ft)
                </label>
                <input
                  type="number"
                  value={kitchenSize}
                  onChange={(e) => setKitchenSize(e.target.value)}
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white text-white font-mono"
                />
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-sm text-white/70">Select Quality Finish</label>
                <div className="flex gap-3">
                  {["essential", "premium", "luxe"].map((p) => (
                    <button
                      key={p}
                      onClick={() => setKitchenPackage(p)}
                      className={`px-4 py-2 border rounded-full capitalize transition-all ${
                        kitchenPackage === p ? "bg-white text-black font-semibold" : "border-white/30"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </StepWrapper>
          )}

          {/* ================= WARDROBE ================= */}
          {type === "wardrobe" && (
            <StepWrapper key="w1">
              <h3 className="text-2xl mb-6">Wardrobe Setup</h3>

              {/* Height */}
              <div className="max-w-sm mb-6">
                <label className="block mb-2 text-sm text-white/70">Height (ft)</label>
                <input
                  type="number"
                  placeholder="Height (ft)"
                  className="w-full p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white font-mono text-white"
                  value={wardrobe.height}
                  onChange={(e) => setWardrobe({ ...wardrobe, height: e.target.value })}
                />
              </div>

              {/* Type */}
              <div className="mb-6">
                <label className="block mb-2 text-sm text-white/70">Door Type</label>
                <div className="flex gap-3">
                  {["sliding", "swing"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setWardrobe({ ...wardrobe, type: t })}
                      className={`px-4 py-2 border rounded-full capitalize transition-all ${
                        wardrobe.type === t ? "bg-white text-black font-semibold" : "border-white/30"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div className="mb-6">
                <label className="block mb-2 text-sm text-white/70">Exterior Finish</label>
                <div className="flex gap-3 vs-wrap">
                  {["laminate", "membrane", "acrylic"].map((f) => (
                    <button
                      key={f}
                      onClick={() => setWardrobe({ ...wardrobe, finish: f })}
                      className={`px-4 py-2 border rounded-full capitalize transition-all ${
                        wardrobe.finish === f ? "bg-white text-black font-semibold" : "border-white/30"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Core */}
              <div className="mb-6">
                <label className="block mb-2 text-sm text-white/70">Core Material</label>
                <div className="flex gap-3">
                  {["mdf", "hdf/hrm", "plywood"].map((c) => (
                    <button
                      key={c}
                      onClick={() => setWardrobe({ ...wardrobe, core: c })}
                      className={`px-4 py-2 border rounded-full uppercase transition-all ${
                        wardrobe.core === c ? "bg-white text-black font-semibold" : "border-white/30"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accessories */}
              <div className="mb-6">
                <label className="block mb-2 text-sm text-white/70">Add-on Structure / Accessories</label>
                <div className="flex gap-3 flex-wrap">
                  {["loft", "single drawer", "2 half drawers", "wicker pull out"].map((a) => (
                    <button
                      key={a}
                      onClick={() => setWardrobe({ ...wardrobe, accessory: a })}
                      className={`px-4 py-2 border rounded-full capitalize transition-all ${
                        wardrobe.accessory === a ? "bg-white text-black font-semibold" : "border-white/30"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </StepWrapper>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}