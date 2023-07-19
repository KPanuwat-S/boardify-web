// import React from "react";
import Section from "../components/Homepage/Section";
import CTA from "../components/Homepage/CTA";
import Upgrade from "../components/Homepage/Upgrade";
import Footer from "../components/Homepage/Footer";

function Homepage() {
  return (
    <div className="w-[1280px] mx-auto">
      <CTA />
      <Section />
      <Upgrade />
      <Footer />
    </div>
  );
}

export default Homepage;
