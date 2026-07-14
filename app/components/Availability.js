"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Availability() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if dot-notation keys are raw
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  return (
    <section id="availability" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-8 select-none">
      
      {/* Outer Main Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans">
        {getTxt("home.availability.sectionTitle", "Immediate Workforce Available Across")}{" "}
        <span className="text-[#00bfff] font-sans font-black tracking-wide ml-1">
          GCC
        </span>
      </h2>

      {/* Main Multi-Panel Card Container */}
      <div className="bg-[#020b14] rounded-[2rem] border border-[#0d233a] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Side: GCC Map Graphic Box */}
        <div className="lg:col-span-5 w-full bg-[#010912] flex items-center justify-center p-4 lg:p-0 min-h-[280px] lg:min-h-full">
          <img
            src="/saudi-map.png" // Replace with your exact map filename inside the public folder (e.g., /gcc-map.jpg)
            alt="GCC Workforce Map Availability"
            className="w-full h-full object-cover block select-none max-h-[360px] lg:max-h-full"
            draggable="false"
          />
        </div>

        {/* Right Side: Deep Ocean Blue Content Box */}
        <div className="lg:col-span-7 bg-[#042f4c] p-8 md:p-14 flex flex-col justify-center space-y-6">
          
          {/* Inner Header Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            {getTxt("home.availability.heading", "Need Immediate Joiners?")}
          </h3>
          
          {/* Detailed Content Paragraph */}
          <p className="text-slate-200 font-normal text-sm md:text-base leading-relaxed tracking-wide opacity-95">
            {getTxt(
              "home.availability.desc", 
              "Access recruiter-verified candidates already inside UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain — reduce hiring turnaround time with workforce already in-region."
            )}
          </p>
          
        </div>

      </div>
    </section>
  );
}