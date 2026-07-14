"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Trust() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full select-none">
      
      {/* Outer Panel Card Wrapper */}
      <div className="bg-[#020b14] border border-[#0d233a] rounded-[2rem] p-8 md:p-12 lg:p-14 flex flex-col md:flex-row gap-8 items-center justify-between shadow-2xl relative overflow-hidden">
        
        {/* Left Side: Content Column */}
        <div className="space-y-4 max-w-3xl z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide font-sans">
            {getTxt("home.trust.title", "Trust & Verification")}
          </h3>
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed tracking-wide opacity-90">
            {getTxt(
              "home.trust.desc",
              "Every candidate is Recruiter-Verified · Document-Validated · Skill-Assessed · Interview-Ready before an employer ever sees the profile. Employers deserve verified workforce. Candidates deserve genuine opportunities."
            )}
          </p>
        </div>

        {/* Right Side: Shield Artwork Box */}
        <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 flex items-center justify-center z-10 relative">
          {/* Subtle ambient green backing glow to accentuate the shield */}
          <div className="absolute w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <img
            src="/trust.png" // Replace with your exact filename inside your project's public folder
            alt="Trust and verification certificate validation shield"
            className="w-full h-full object-contain block select-none animate-pulse duration-[4000ms]"
            draggable="false"
          />
        </div>

      </div>
    </section>
  );
}