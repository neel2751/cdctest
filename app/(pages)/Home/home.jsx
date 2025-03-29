import { CTA } from "@/components/cta/cta";
import Features from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import { HeroSection } from "@/components/hero/heroSection";
import PremiumProjectsMasonry from "@/components/projects/projectnew";
import TestimonialSection from "@/components/review/review";
import Services from "@/components/services/services";
import { PremiumProcessSection, Stats } from "@/components/state/state";
import { FloatingWhatsApp } from "@/components/whatsapp/floatingWhatsapp";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stats />
      <PremiumProcessSection />
      <Services />
      <Features />
      <PremiumProjectsMasonry />
      <TestimonialSection />
      <CTA />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default HomePage;

const TempCard = () => {
  return (
    <div className="border-2 border-neutral-300 rounded-xl px-2 py-3 max-w-sm mx-auto">
      <div className="flex items-center gap-6">
        <img
          src="https://res.cloudinary.com/drcjzx0sw/image/upload/v1742299943/1a_y6imyc.jpg"
          alt="text"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex gap-2 items-center">
            <span className="rounded-md p-1 bg-indigo-100 text-indigo-600 text-xs text-pretty font-bold">
              FREE
            </span>
            <h2 className="text-base font-semibold text-pretty tracking-tight text-neutral-900 mb-0.5">
              Download our guides
            </h2>
          </div>
          <p className="text-pretty text-neutral-600">
            we peovide helpful tips on how to optimize your profile and job card
          </p>
        </div>
      </div>
    </div>
  );
};
