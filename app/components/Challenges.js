"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Challenges() {
  const { t } = useLanguage();

  return (
    <section id="employers" className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">

      {/* Main Page Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-wide">
        {t("home.challenge.title")}{" "}
        <span className="text-cyan-400 italic font-medium">{t("home.challenge.italicAcross")}</span>
      </h2>

      {/* Main Box */}
      <div className="relative bg-[#09131e] rounded-[2rem] p-8 md:p-14 border border-white/5 overflow-hidden shadow-2xl">

        {/* Background Bridge Image */}
        <div
          className="absolute bottom-0 left-0 right-0 w-full h-[40%] z-0 opacity-80 pointer-events-none bg-bottom bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/bridge.png')" }}
        ></div>

        {/* Top Text Section */}
        <div className="space-y-4 max-w-4xl relative z-10 mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {t("home.challenge.boxTitle")}
          </h3>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            {t("home.challenge.boxDesc")}
          </p>
        </div>

        {/* Cards Flex Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start relative z-10">

          {/* Card Left: Employers Face */}
          <div className="flex flex-col space-y-6 pt-4">
            <div className="flex flex-col items-start gap-3">
              <span className="text-5xl drop-shadow-md">👩‍💼</span>
              <h4 className="text-xl font-bold text-white font-serif tracking-wide">
                {t("home.challenge.employers.title")}
              </h4>
            </div>
            <ul className="space-y-4 text-sm text-slate-300 font-medium">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  {t(`home.challenge.employers.item${num}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Card Middle: Highlighted Our Mission */}
          <div className="bg-[#FFC107] text-[#09131e] p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-2xl transform -translate-y-4 relative z-20">
            <div className="flex flex-col items-start gap-3">
              <span className="text-5xl drop-shadow-md">🎯</span>
              <h4 className="text-2xl font-black font-serif">
                {t("home.challenge.mission.title")}
              </h4>
            </div>
            <p className="text-sm font-bold leading-relaxed">
              {t("home.challenge.mission.desc")}
            </p>
            <Link
              href="#about"
              className="mt-4 block w-full border-2 border-[#09131e] hover:bg-[#09131e] hover:text-[#FFC107] text-[#09131e] font-bold text-center px-4 py-2.5 rounded-xl text-sm transition-all duration-300"
            >
              {t("home.challenge.mission.btn")}
            </Link>
          </div>

          {/* Card Right: Candidates Face */}
          {/* Card Right: Candidates Face */}
          <div className="flex flex-col space-y-6 pt-4 lg:ml-auto w-full lg:max-w-[280px]">
            <div className="flex flex-col items-start gap-3">
              <span className="text-5xl drop-shadow-md">👨‍💼</span>
              <h4 className="text-xl font-bold text-white font-serif tracking-wide">
                {t("home.challenge.candidates.title")}
              </h4>
            </div>
            <ul className="space-y-4 text-sm text-slate-300 font-medium">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  {t(`home.challenge.candidates.item${num}`)}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}