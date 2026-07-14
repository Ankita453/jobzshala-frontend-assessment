"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Corridor() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if dot-notation keys are raw
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  return (
    <section id="resources" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-8 select-none">
      
      {/* Main Section Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans">
        {getTxt("home.corridor.title", "India to GCC Workforce")}{" "}
        <span className="text-[#00bfff] font-serif italic font-normal tracking-normal ml-1">
          {getTxt("home.corridor.italicCorridor", "Corridor")}
        </span>
      </h2>

      {/* Corridor Box Panel */}
      <div className="bg-[#020b14] rounded-[2rem] p-8 md:p-12 border border-[#0d233a] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden relative">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 space-y-4 z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            {getTxt("home.corridor.heading", "Building Trusted Workforce Mobility")}
          </h3>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed tracking-wide opacity-90 max-w-2xl">
            {getTxt(
              "home.corridor.desc",
              "Jobzshala connects verified workforce from India with GCC employers through a structured, technology-enabled deployment process — from profile verification through visa support to post-deployment support."
            )}
          </p>
        </div>

        {/* Right Side Image Column */}
        <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end z-10">
          <img
            src="/India-GCC-logo.png" // Replace with your exact filename inside the public folder
            alt="India to GCC Workforce Corridor Map"
            className="w-full max-w-[440px] lg:max-w-full h-auto object-contain block select-none"
            draggable="false"
          />
        </div>
        
      </div>
    </section>
  );
}