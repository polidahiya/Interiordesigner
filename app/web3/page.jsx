import React from "react";
import Hero from "./Comp1";
import Navbar from "./Comp2";
import ProjectGrid from "./Comp3";
import Philosophy from "./Comp4";
import Footer from "./Comp5";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Philosophy />
      <Footer />
    </div>
  );
}

export default page;
