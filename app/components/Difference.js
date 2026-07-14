"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Difference() {
  const { t } = useLanguage();

  // Foolproof translation helper that safely falls back to your exact text if dot-notation fails
  const getTxt = (path, fallback) => {
    const translation = t(path);
    // If the hook returns the literal key string back, use the provided fallback content
    return translation === path ? fallback : translation;
  };

  // Custom Red Cross SVG Component
  const CrossIcon = () => (
    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
      <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // Custom Green Checkmark SVG Component
  const CheckIcon = () => (
    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section id="why-different" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-8 select-none">
      
      {/* Title Header */}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans">
        {getTxt("difference.title", "Why Jobzshala Is ")}{" "}
        <span className="text-[#00bfff] font-serif italic font-normal tracking-normal ml-1">
          {getTxt("difference.italicDifferent", "Different")}
        </span>
      </h2>

      {/* Main Glass Panel Container */}
      <div className="bg-[#031121] rounded-[2rem] border border-[#0d233a] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 p-6 md:p-12 space-y-8 lg:self-center">
          
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide max-w-md">
            {getTxt("difference.sectionTitle", "One Platform. Complete Hiring Visibility")}
          </h3>

          {/* Comparison Matrix */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative w-full pt-4">
            
            {/* Column 1: Traditional Job Portals */}
            <div className="flex-1 space-y-4 w-full">
              <span className="text-xs font-bold text-slate-400 tracking-wide block min-h-[32px]">
                {getTxt("difference.traditional.title", "Traditional Job Portals / Agencies")}
              </span>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-medium text-slate-300/90 leading-tight">
                  <CrossIcon /> {getTxt("difference.traditional.item1", "Traditional Job Portals / Agencies")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-medium text-slate-300/90 leading-tight">
                  <CrossIcon /> {getTxt("difference.traditional.item2", "Resume database")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-medium text-slate-300/90 leading-tight">
                  <CrossIcon /> {getTxt("difference.traditional.item3", "Manual hiring")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-medium text-slate-300/90 leading-tight">
                  <CrossIcon /> {getTxt("difference.traditional.item4", "Fragmented")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-medium text-slate-300/90 leading-tight">
                  <CrossIcon /> {getTxt("difference.traditional.item5", "Agent-dependent")}
                </li>
              </ul>
            </div>

            {/* Middle Column: VS Badge */}
            <div className="flex-shrink-0 self-center my-2 sm:my-0">
              <div className="w-11 h-11 rounded-full bg-gradient-to-b from-[#00bfff] to-[#0077cc] flex items-center justify-center font-black text-white text-xs uppercase shadow-lg shadow-blue-500/20 tracking-wider">
                vs
              </div>
            </div>

            {/* Column 3: Jobzshala Features */}
            <div className="flex-1 space-y-4 w-full sm:pl-4">
              <span className="text-xs font-bold text-amber-400 tracking-wide block min-h-[32px]">
                {getTxt("difference.jobzshala.title", "Jobzshala")}
              </span>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-bold text-white leading-tight">
                  <CheckIcon /> {getTxt("difference.jobzshala.item1", "AI + Human Recruiters")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-bold text-white leading-tight">
                  <CheckIcon /> {getTxt("difference.jobzshala.item2", "Verified Workforce")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-bold text-white leading-tight">
                  <CheckIcon /> {getTxt("difference.jobzshala.item3", "Deployment")}
                </li>
                <li className="flex items-start gap-2.5 text-[11px] md:text-xs font-bold text-white xl:whitespace-nowrap leading-tight">
                  <CheckIcon /> {getTxt("difference.jobzshala.item4", "Analytics — one integrated platform")}
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Right Side Image */}
        <div className="lg:col-span-5 h-full flex items-end justify-center lg:justify-end overflow-hidden pt-6 lg:pt-0">
          <img
            src="/group.png" 
            alt="Jobzshala comparison illustration"
            className="w-full max-w-[420px] lg:max-w-full h-auto object-contain block select-none"
            draggable="false"
          />
        </div>

      </div>
    </section>
  );
}