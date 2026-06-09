import React from "react";
import Hero from "./Comp1";
import Navbar from "./Nav";
import FeaturedProjects from "./Comp2";
import AboutStudio from "./Comp3";
import DesignProcess from "./Comp4";
import Testimonials from "./Comp5";
import Services from "./Comp6";
import Awards from "./Comp7";
import CostEstimator from "./Comp8";
import Footer from "./Comp9";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AboutStudio />
      <DesignProcess />
      <Awards />
      <Testimonials />
      <Services />
      <CostEstimator />
      <Footer/>
    </div>
  );
}

export default page;
