import React from "react";
import HeroBanner from "../layout/HeroBanner";
import MultiSection from "../layout/MultiSection";
import Navbar from "../layout/Navbar";
import Projects from "../layout/Projects";
import Services from "../layout/Services";
import Clients from "../layout/Clients";
import Footer from "../layout/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Projects />
      <Clients />
      <MultiSection />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
