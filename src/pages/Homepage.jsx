// import React from "react";
import Section from "../components/Homepage/Section";
import CTA from "../components/Homepage/CTA";
import Upgrade from "../components/Homepage/Upgrade";

function Homepage() {
  return (
    <div className="w-[1280px] mx-auto">
      <CTA />
      <Section />
      <Upgrade />
    </div>
  );
}

export default Homepage;
