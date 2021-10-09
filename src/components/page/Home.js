import React from "react";
import HeroBanner from "../layout/HeroBanner";
import MultiSection from "../layout/MultiSection";
import Navbar from "../layout/Navbar";
import Projects from "../layout/Projects";
import Services from "../layout/Services";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Projects />
      <Services />
      <MultiSection />
    </div>
  );
}

export default Home;
