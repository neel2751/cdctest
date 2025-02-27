import Features from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import { HeroSection } from "@/components/hero/heroSection";
import Projects from "@/components/projects/projects";
import ReviewsSection from "@/components/review/review";
import Services from "@/components/services/services";
import { Stats, Stats2 } from "@/components/state/state";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stats />
      <Stats2 />
      <Services />
      <Projects />
      <Features />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
