import React from "react";
import Hero from "./Comp1";
import ProductShowcase from "./Comp2";
import StorySection from "./Comp3";
import Testimonials from "./Comp4";
import Footer from "./Comp5";

function page() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <StorySection />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default page;
