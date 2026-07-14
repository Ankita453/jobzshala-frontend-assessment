"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function BuiltForGCC() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-10 select-none relative overflow-hidden">
      
      {/* Upper Text Content Block */}
      <div className="max-w-5xl space-y-5">
        
        {/* Editorial Section Heading */}
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans leading-tight">
          {getTxt("home.builtForGcc.titleMain", "Built for Abu Dhabi. Built")}{" "}
          <span className="font-serif italic font-normal tracking-normal text-white mx-1">
            {getTxt("home.builtForGcc.titleItalic", "for the")}
          </span>{" "}
          <span className="text-[#00bfff] font-sans font-black tracking-wide">
            {getTxt("home.builtForGcc.titleRegion", "GCC.")}
          </span>
        </h2>
        
        {/* High-Contrast Description Copy */}
        <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed tracking-wide opacity-90 max-w-4xl">
          {getTxt("home.builtForGcc.descPart1", "Abu Dhabi is building one of the world's most innovation-driven economies. Jobzshala strengthens one of its most important growth enablers: ")}
          <span className="text-white font-bold">
            {getTxt("home.builtForGcc.descHighlight", "trusted workforce infrastructure.")}
          </span>
          {getTxt("home.builtForGcc.descPart2", " Our ambition: help businesses hire faster, improve workforce productivity, and enable seamless workforce mobility across the GCC.")}
        </p>
        
      </div>

      {/* Pinned Bottom Skyline Graphics Box */}
      <div className="w-full pt-4 flex items-end justify-center">
        <img
          src="/piramides.png" // Place your buildings image inside your project's public folder with this name
          alt="Abu Dhabi and GCC infrastructure skyline illustration"
          className="w-full h-auto object-contain block select-none pointer-events-none transition-opacity duration-700"
          draggable="false"
        />
      </div>

    </section>
  );
}