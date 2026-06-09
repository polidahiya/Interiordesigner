"use client";
import Herosection from "./_comps/Herosection";
import Portfolio from "./_comps/Portfolio";
import Services from "./_comps/Services";
import Cta from "./_comps/Cta";
import Footer from "./_comps/Footer";
import Businessstrip from "./_comps/Businessstrip";
import Marquestrip from "./_comps/Marquestrip";
import MaterialShowcase from "./_comps/Materialdata";
import PricingMatrix from "./_comps/Pricingtiers";
import Navbar from "./_comps/Navbar";
import CostEstimator from "./_comps/Costestimation";
export default function InteriorCraftLanding() {
  return (
    <div className="bg-[#F5F1EB] text-[#2A2A2A] selection:bg-[#8B7355] selection:text-white">
      <Navbar />
      <Herosection />
      <Businessstrip />
      <Marquestrip />
      <Portfolio />
      <MaterialShowcase />
      <PricingMatrix />
      <Services />
      <Cta />
      <CostEstimator />
      <Footer />
    </div>
  );
}
