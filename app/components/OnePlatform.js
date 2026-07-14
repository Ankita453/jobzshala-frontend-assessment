"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function OnePlatform() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  // Safe check for the badges array with strict screenshot fallbacks
  const translatedBadges = t("home.onePlatform.badges");
  const badgesList = Array.isArray(translatedBadges)
    ? translatedBadges
    : [
        "Candidate App",
        "Employer Dashboard",
        "Recruiter Workspace",
        "AI Matching Engine",
        "WhatsApp Onboarding",
        "Deployment Management",
      ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full select-none">
      
      {/* Premium Outer Card Panel */}
      <div className="bg-[#020b14] border border-[#0d233a] rounded-[2rem] p-8 md:p-12 lg:p-14 space-y-8 shadow-2xl relative overflow-hidden">
        
        {/* Left-Aligned Headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide font-sans text-left leading-tight">
          {getTxt("home.onePlatform.title", "One Platform. Complete Hiring Visibility")}
        </h3>

        {/* Badges Container Block */}
        <div className="flex flex-wrap justify-start gap-3 pt-2">
          {badgesList.map((bdg, i) => (
            <div
              key={i}
              className="bg-[#010912]/80 border border-[#0d233a] px-4 py-2.5 rounded-xl flex items-center gap-2.5 text-xs md:text-sm font-medium text-slate-300 tracking-wide hover:border-cyan-500/20 transition-colors duration-300 group"
            >
              {/* Custom High-Fidelity Dual Sparkle Vector */}
              <svg 
                className="w-3.5 h-3.5 text-[#22d3ee]/80 group-hover:text-cyan-400 transition-colors duration-300 shrink-0" 
                viewBox="0 0 16 16" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Primary Sparkle */}
                <path d="M7.5 0L9.1 4.9L14 6.5L9.1 8.1L7.5 13L5.9 8.1L1 6.5L5.9 4.9L7.5 0Z" />
                {/* Secondary Sparkle Accent */}
                <path d="M12.5 9L13.3 11.2L15.5 12L13.3 12.8L12.5 15L11.7 12.8L9.5 12L11.7 11.2L12.5 9Z" className="opacity-60" />
              </svg>
              <span>{bdg}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}