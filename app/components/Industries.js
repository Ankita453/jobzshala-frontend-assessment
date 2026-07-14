"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Industries() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      <h2 className="text-3xl font-extrabold text-white">
        {t("home.industries.title")}{" "}
        <span className="text-[#22d3ee] font-black">{t("home.industries.cyanPower")}</span>
      </h2>

      {/* Badge Cloud */}
      <div className="flex flex-wrap gap-3.5">
        {t("home.industries.items").map((ind, idx) => (
          <span
            key={idx}
            className="bg-[#051525] border border-white/10 hover:border-cyan-500/30 hover:bg-[#071f36] px-5 py-3 rounded-full text-xs md:text-sm font-semibold text-slate-200 tracking-wide transition-all duration-300 flex items-center gap-2 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            {ind}
          </span>
        ))}
      </div>
    </section>
  );
}
