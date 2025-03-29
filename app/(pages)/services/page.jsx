import { CTA } from "@/components/cta/cta";
import Features from "@/components/feature/feature";
import AllHero from "@/components/hero/allHero";
import ServicePage from "@/components/services/servicePage";

const ServicesSection = () => {
  return (
    <>
      <AllHero />
      <ServicePage />
      <Features />
      <div className="mt-8">
        <CTA />
      </div>
    </>
  );
};

export default ServicesSection;
