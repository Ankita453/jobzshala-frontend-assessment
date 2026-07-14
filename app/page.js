"use client";

import React from "react";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Stats from "./components/Stats";
import Challenges from "./components/Challenges";
import Process from "./components/Process";
import Difference from "./components/Difference";
import Industries from "./components/Industries";
import Availability from "./components/Availability";
import Corridor from "./components/Corridor";
import WhyChoose from "./components/WhyChoose";
import Trust from "./components/Trust";
import OnePlatform from "./components/OnePlatform";
import BuiltForGCC from "./components/BuiltForGCC";
import OurVision from "./components/OurVision";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#020b14] overflow-hidden">
      <Hero />
      <Trusted />
      <Challenges />
      <Process />
      <WhyChoose />
      <Trust />
      <OnePlatform />
      <Availability />
      <Corridor />
      <Difference />
      <Industries />     
      <BuiltForGCC/>
      <OurVision/>
    </div>
  );
}
