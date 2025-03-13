import Features from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import { HeroSection } from "@/components/hero/heroSection";
import Projects from "@/components/projects/projects";
import ReviewsSection from "@/components/review/review";
import Services from "@/components/services/services";
import {
  PremiumProcessSection,
  PremiumProcessSection2,
  Stats,
  Stats2,
} from "@/components/state/state";
import { FloatingWhatsApp } from "@/components/whatsapp/floatingWhatsapp";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stats />
      <PremiumProcessSection />
      <Services />
      <Projects />
      <Features />
      <ReviewsSection />

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default HomePage;
