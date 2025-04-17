import CTASection from "@/components/cta/aboutus-cta";
import AllHero from "@/components/hero/allHero";
import Core from "@/components/mission/core";
import ValuesSection from "@/components/mission/cultural";
import MissionSection from "@/components/mission/mission";
import Sector from "@/components/mission/sector";
import TrackRecord from "@/components/mission/track-record";
import VisionSection from "@/components/mission/vision";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHero />
      <MissionSection />
      <TrackRecord />
      <Core />
      <Sector />
      {/* <VisionSection /> */}
      <CTASection />
    </div>
  );
};

export default page;
