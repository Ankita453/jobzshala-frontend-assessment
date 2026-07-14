"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  // Helper component for the individual step cards (standard JS props)
 // Helper component for the individual step cards (updated for full opacity)
const StepCard = ({ number, icon, titleKey }) => (
  <div className="bg-[#051a2e] border border-white/5 rounded-xl p-5 pt-6 pb-6 flex flex-col items-center text-center justify-between flex-1 min-h-[200px] w-full transition-transform duration-300 hover:scale-[1.03] hover:border-cyan-500/30 group shadow-lg">
    {/* Number Circle */}
    <div className="w-7 h-7 rounded-full bg-[#0091ff] flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-blue-500/20 mb-4">
      {number}
    </div>
    
    {/* Icon/Emoji */}
    <div className="text-4xl my-auto py-2 filter drop-shadow-md select-none group-hover:scale-110 transition-transform">
      {icon}
    </div>
    
    {/* Title */}
    <h4 className="text-[11px] font-bold text-white leading-snug mt-4 tracking-wide max-w-[120px]">
      {t(titleKey)}
    </h4>
  </div>
);
  // Helper component for the connecting dashed arrows
  const ConnectorArrow = () => (
    <div className="flex items-center justify-center my-2 md:my-0 flex-shrink-0 select-none">
      {/* Horizontal Arrow for Desktop */}
<svg className="hidden md:block w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
</svg>
      {/* Vertical Arrow for Mobile */}
      <svg className="block md:hidden w-5 h-5 text-amber-400 opacity-80 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" strokeDasharray="3 3" />
      </svg>
    </div>
  );

  return (
    <section id="candidates" className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-8 select-none">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-wide font-sans">
        {t("home.process.title")}{" "}
        <span className="text-[#00bfff] font-serif italic font-normal tracking-normal ml-1">
          {t("home.process.italicWorks")}
        </span>
      </h2>

      {/* Main Container Panel */}
      <div className="bg-[#020b14] rounded-[2rem] p-6 md:p-10 border border-[#0d233a] shadow-2xl space-y-10">
        
        {/* Steps Layout Wrapper */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 md:gap-1">
          
          <StepCard number={1} icon="👤" titleKey="home.process.step1.title" />
          <ConnectorArrow />

          <StepCard number={2} icon="📋" titleKey="home.process.step2.title" />
          <ConnectorArrow />

          <StepCard number={3} icon="🔍" titleKey="home.process.step3.title" />
          <ConnectorArrow />

          <StepCard number={4} icon="🤝" titleKey="home.process.step4.title" />
          <ConnectorArrow />

          <StepCard number={5} icon="📝" titleKey="home.process.step5.title" />
          <ConnectorArrow />

          <StepCard number={6} icon="✈️" titleKey="home.process.step6.title" />
          <ConnectorArrow />

          <StepCard number={7} icon="📁" titleKey="home.process.step7.title" />
          
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-white font-medium pt-4 border-t border-white/5 opacity-90">
          {t("home.process.footer")}
        </div>
      </div>
    </section>
  );
}