import EnhancedAbout from "@/components/feature/aboutFeature";
import { AboutHero } from "@/components/hero/heroSection";
import ValuesSection from "@/components/mission/cultural";
import MissionSection from "@/components/mission/mission";
import VisionSection from "@/components/mission/vision";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHero />
      <EnhancedAbout />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
    </div>
  );
};

export default page;
