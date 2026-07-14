"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function OurVision() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  const handleOpenRequest = () => {
    window.dispatchEvent(new Event("open-request-modal"));
  };

  const handleOpenProfileModal = () => {
    window.dispatchEvent(new Event("open-profile-modal"));
  };

  return (
    <section id="vision" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-8 select-none">
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans text-left">
        {getTxt("home.vision.sectionTitle", "Our Vision")}
      </h2>

      {/* 1. Main Feature Top Card */}
      <div className="bg-[#020b14] border border-[#0d233a] rounded-[2rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        
        {/* Left Content Area */}
        <div className="lg:col-span-7 p-6 md:p-12 lg:p-14 space-y-6 lg:self-center">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide leading-snug max-w-2xl">
            {getTxt(
              "home.vision.mainHeading",
              "We’re not building another job portal. We’re not building another recruitment agency."
            )}
          </h3>
          
          <div className="space-y-4 text-xs md:text-sm font-normal tracking-wide text-slate-300 opacity-90 max-w-2xl leading-relaxed">
            <p>
              {getTxt(
                "home.vision.desc1",
                "We’re building the AI-Native Cross-Border Workforce Infrastructure Platform that lets governments, employers, recruiters and workforce ecosystems source, verify, deploy and manage trusted talent across borders."
              )}
            </p>
            <p>
              {getTxt(
                "home.vision.desc2",
                "Every growing economy is powered by people. Jobzshala powers the future of workforce mobility across the GCC."
              )}
            </p>
          </div>
        </div>

        {/* Right Graphic Area */}
        <div className="lg:col-span-5 h-full flex items-end justify-center lg:justify-end overflow-hidden pt-6 lg:pt-0">
          <img
            src="/model.png" // Place corresponding image in public folder
            alt="Jobzshala global candidate direction vision guide"
            className="w-full max-w-[340px] lg:max-w-full h-auto object-contain block select-none"
            draggable="false"
          />
        </div>
      </div>

      {/* 2. Double CTA Dual Grid Split Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        {/* Left Grid Card: Looking to Hire */}
        <div className="bg-[#00a2ff] rounded-[2rem] overflow-hidden grid grid-cols-12 items-end h-full shadow-xl">
          {/* Left Text Grid Column */}
          <div className="col-span-7 p-6 md:p-8 lg:p-10 space-y-4 self-center">
            <h4 className="text-lg md:text-xl font-black text-[#020b14] tracking-wide">
              {getTxt("home.vision.hireTitle", "Looking to Hire Workforce?")}
            </h4>
            <p className="text-[#020b14]/80 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
              {getTxt("home.vision.hireDesc", "Build your workforce faster with AI-powered hiring and verified talent.")}
            </p>
            <button
              onClick={handleOpenRequest}
              className="bg-[#FDB813] hover:bg-[#e0a20f] text-[#020b14] font-black px-4 py-2.5 rounded-xl text-xs tracking-wider transition-colors shadow-md cursor-pointer"
            >
              {getTxt("home.vision.hireBtn", "Request Workforce")}
            </button>
          </div>
          
          {/* Right Image Grid Column */}
          <div className="col-span-5 h-full flex items-end justify-end overflow-hidden">
            <img
              src="/vision-1.png" // Place corresponding corporate image in public folder
              alt="Corporate executive evaluating remote dashboard"
              className="w-full h-auto object-contain block select-none translation-transform"
              draggable="false"
            />
          </div>
        </div>

        {/* Right Grid Card: Opportunities */}
        <div className="bg-[#ffb700] rounded-[2rem] overflow-hidden grid grid-cols-12 items-end h-full shadow-xl">
          {/* Left Text Grid Column */}
          <div className="col-span-7 p-6 md:p-8 lg:p-10 space-y-4 self-center">
            <h4 className="text-lg md:text-xl font-black text-[#020b14] tracking-wide">
              {getTxt("home.vision.oppTitle", "Looking for GCC Opportunities?")}
            </h4>
            <p className="text-[#020b14]/80 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
              {getTxt("home.vision.oppDesc", "Create your verified workforce profile and access genuine opportunities across the GCC.")}
            </p>
            <button
              onClick={handleOpenProfileModal}
              className="border border-[#020b14] hover:bg-[#020b14] text-[#020b14] hover:text-white font-bold px-4 py-2.5 rounded-xl text-xs tracking-wide transition-colors cursor-pointer"
            >
              {getTxt("home.vision.oppBtn", "Create GCC Workforce Profile")}
            </button>
          </div>
          
          {/* Right Image Grid Column */}
          <div className="col-span-5 h-full flex items-end justify-end overflow-hidden">
            <img
              src="/vision-2.png" // Place corresponding industrial worker image in public folder
              alt="Skilled engineer tracking structural logistics on a smartphone"
              className="w-full h-auto object-contain block select-none"
              draggable="false"
            />
          </div>
        </div>

      </div>
    </section>
  );
}