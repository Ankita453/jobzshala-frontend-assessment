"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  // Safe check for the badges array with strict screenshot fallbacks
  const translatedBadges = t("home.whyChoose.badges");
  const badgesList = Array.isArray(translatedBadges)
    ? translatedBadges
    : [
        "AI Candidate Matching",
        "Recruiter-Verified Profiles",
        "Video Resume Screening",
        "Real-Time Hiring Dashboard",
        "Cross-Border Hiring Support",
        "Deployment Tracking",
      ];

  const handleOpenRequest = () => {
    window.dispatchEvent(new Event("open-request-modal"));
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-8 select-none">
      
      {/* Main Section Header */}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans">
        {getTxt("home.whyChoose.title", "Why GCC Employers")}{" "}
        <span className="font-serif italic font-normal tracking-normal text-white mx-1">
          Choose
        </span>{" "}
        <span className="text-[#00bfff] font-sans font-black tracking-wide">
          {getTxt("home.whyChoose.italicJobzshala", "Jobzshala")}
        </span>
      </h2>

      {/* Main Container Panel Box */}
      <div className="bg-[#020b14] rounded-[2rem] border border-[#0d233a] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Left Info Panel Column */}
        <div className="lg:col-span-7 p-6 md:p-12 space-y-8 lg:self-center">
          
          {/* Section Heading Text */}
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide max-w-xl leading-snug">
            {getTxt("home.whyChoose.heading", "More Than Recruitment. Workforce Infrastructure.")}
          </h3>

          {/* Dynamic Core Badges Pills */}
          <div className="flex flex-wrap gap-2.5 max-w-2xl">
            {badgesList.map((bdg, i) => (
              <span
                key={i}
                className="bg-slate-900/50 border border-white/5 px-4 py-2 rounded-full text-[11px] md:text-xs font-medium text-slate-400 tracking-wide"
              >
                {bdg}
              </span>
            ))}
          </div>

          {/* Editorial Custom Quote Section */}
          <div className="relative pt-2 max-w-xl">
            <p className="text-[#FDB813] text-base md:text-lg font-black tracking-wide leading-relaxed relative z-10 pl-4">
              <span className="absolute left-0 top-1 text-2xl font-serif leading-none select-none">“</span>
              {getTxt("home.whyChoose.quote", "We don't send thousands of resumes. We deliver verified, job-ready workforce")}
              <span className="inline-block text-2xl font-serif leading-none align-bottom select-none">”</span>
            </p>
          </div>

          {/* Capability CTA Button */}
          <button
            onClick={handleOpenRequest}
            className="bg-[#FDB813] hover:bg-[#e0a20f] text-[#020b14] font-black px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer shadow-lg shadow-yellow-500/10"
          >
            {getTxt("home.whyChoose.btn", "Full Capability List")}
          </button>
        </div>

        {/* Right Side Team Graphics Box */}
        <div className="lg:col-span-5 h-full flex items-end justify-center lg:justify-end overflow-hidden pt-6 lg:pt-0">
          <img
            src="/GCC employers.png" // Replace with your exact filename inside the public folder (e.g. /recruitment-team.jpg)
            alt="Jobzshala verified recruiters validation team"
            className="w-full max-w-[450px] lg:max-w-full h-auto object-contain block select-none"
            draggable="false"
          />
        </div>

      </div>
    </section>
  );
}