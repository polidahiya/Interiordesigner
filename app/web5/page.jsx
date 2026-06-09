import React from "react";
import Hero from "./Comp1";
import ServicesOverview from "./Comp2";
import MaterialConsultation from "./Comp3";
import BrandShowcaseFooter from "./Comp4";
import MaterialSliderview from "./Comp5";
import CaseStudies from "./Comp6";

function page() {
  return (
    <div>
      <Hero />
      <ServicesOverview/>
      <MaterialSliderview/>
      <MaterialConsultation/>
      <CaseStudies/>
      <BrandShowcaseFooter/>
    </div>
  );

}

export default page;
