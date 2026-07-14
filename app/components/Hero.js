"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  const handleOpenRequest = () => {
    window.dispatchEvent(new Event("open-request-modal"));
  };

  const handleOpenCreate = () => {
    window.dispatchEvent(new Event("open-create-modal"));
  };

  return (
    <div className="relative w-full overflow-hidden border-b border-[#0d233a] bg-[#020b14] select-none">
      
      {/* 1. Integrated GCC Skyline & Network Map Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero-bg.png"
          alt="GCC Skyline and Map Network Background"
          className="w-full h-full object-cover select-none"
          draggable="false"
        />
        {/* Deep navy left-to-right gradient overlay to keep text extremely readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b14] via-[#020b14]/90 to-transparent"></div>
      </div>

      {/* 2. Main Hero Grid Area - Set to items-center to balance vertical layout */}
      <section className="relative z-10 pt-16 pb-16 lg:pt-24 lg:pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Glowing Top Badge Capsule */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-cyan-500/20 bg-[#010912]/80 backdrop-blur-md text-[11px] md:text-xs font-semibold text-slate-300 tracking-wide shadow-lg shadow-cyan-500/5">
            <svg 
              className="w-3.5 h-3.5 text-[#22d3ee] shrink-0" 
              viewBox="0 0 16 16" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 0L9.1 4.9L14 6.5L9.1 8.1L7.5 13L5.9 8.1L1 6.5L5.9 4.9L7.5 0Z" />
              <path d="M12.5 9L13.3 11.2L15.5 12L13.3 12.8L12.5 15L11.7 12.8L9.5 12L11.7 11.2L12.5 9Z" className="opacity-60" />
            </svg>
            <span>{getTxt("home.hero.badge", "AI - Native . Workforce Infrastructure . GCC Hiring")}</span>
          </div>

          {/* Core Headlining Typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-wide text-white leading-[1.12] font-sans">
            <span className="block">{getTxt("home.hero.titlePre", "The AI-Native")}</span>
            <span className="block mt-1">{getTxt("home.hero.titleMid", "Workforce Infrastructure")}</span>
            <span className="inline-block mt-1">
              {getTxt("home.hero.titlePost", "Platform")}{" "}
              <span className="font-serif italic font-normal tracking-normal text-white mx-1.5">
                {getTxt("home.hero.italicFor", "for the")}
              </span>{" "}
              <span className="text-[#00bfff] font-sans font-black tracking-wide">
                {getTxt("home.hero.titleGcc", "GCC")}
              </span>
            </span>
          </h1>

          {/* Subheading Description */}
          <p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed tracking-wide opacity-90 max-w-xl">
            {getTxt(
              "home.hero.subheading",
              "Helping GCC employers source, verify, hire, deploy and manage trusted blue-collar workforce across the region — powered by AI, recruiter expertise and end-to-end workforce operations."
            )}
          </p>

          {/* Dynamic Button Trigger Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={handleOpenRequest}
              className="bg-[#FDB813] hover:bg-[#e0a20f] text-[#020b14] font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2"
            >
              <span>{getTxt("home.hero.btnRequest", "Request Workforce")}</span>
              <span className="text-sm font-bold">→</span>
            </button>
            
            <button
              onClick={handleOpenCreate}
              className="border border-white/20 hover:border-white text-white hover:bg-white/5 font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{getTxt("home.hero.btnCreateProfile", "Create GCC Workforce Profile")}</span>
              <span className="text-sm font-bold">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Team Illustration scaled and vertically aligned */}
        <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end overflow-visible">
          <img
            src="/hero-workers.png"
            alt="GCC Professional and Blue-Collar Verified Workforce Specialists"
            className="w-full max-w-[500px] lg:max-w-none lg:w-[115%] h-auto object-contain block select-none pointer-events-none transform lg:scale-110 lg:translate-x-6 transition-transform duration-500"
            draggable="false"
          />
        </div>

      </section>

      {/* 3. Bottom Key Badges Bar */}
      <div className="relative z-10 border-t border-[#0d233a] bg-[#010912]/90 backdrop-blur-sm py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-x-8 gap-y-4 md:justify-between text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest">
          
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.5 0L9.1 4.9L14 6.5L9.1 8.1L7.5 13L5.9 8.1L1 6.5L5.9 4.9L7.5 0Z" />
              <path d="M12.5 9L13.3 11.2L15.5 12L13.3 12.8L12.5 15L11.7 12.8L9.5 12L11.7 11.2L12.5 9Z" className="opacity-60" />
            </svg>
            <span>{getTxt("home.hero.matching", "AI-Powered Matching")}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.5 0L9.1 4.9L14 6.5L9.1 8.1L7.5 13L5.9 8.1L1 6.5L5.9 4.9L7.5 0Z" />
              <path d="M12.5 9L13.3 11.2L15.5 12L13.3 12.8L12.5 15L11.7 12.8L9.5 12L11.7 11.2L12.5 9Z" className="opacity-60" />
            </svg>
            <span>{getTxt("home.hero.verified", "Verified Workforce")}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.5 0L9.1 4.9L14 6.5L9.1 8.1L7.5 13L5.9 8.1L1 6.5L5.9 4.9L7.5 0Z" />
              <path d="M12.5 9L13.3 11.2L15.5 12L13.3 12.8L12.5 15L11.7 12.8L9.5 12L11.7 11.2L12.5 9Z" className="opacity-60" />
            </svg>
            <span>{getTxt("home.hero.deployment", "End-to-End Deployment")}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.5 0L9.1 4.9L14 6.5L9.1 8.1L7.5 13L5.9 8.1L1 6.5L5.9 4.9L7.5 0Z" />
              <path d="M12.5 9L13.3 11.2L15.5 12L13.3 12.8L12.5 15L11.7 12.8L9.5 12L11.7 11.2L12.5 9Z" className="opacity-60" />
            </svg>
            <span>{getTxt("home.hero.visibility", "Real-Time Visibility")}</span>
          </div>

        </div>
      </div>

    </div>
  );
}