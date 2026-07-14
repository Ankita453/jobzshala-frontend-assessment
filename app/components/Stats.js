"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 glass-panel rounded-3xl p-8 md:p-10 text-center">
        <div className="space-y-1 p-4 md:p-2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">50,000</div>
          <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">
            {t("home.stats.profiles")}
          </div>
        </div>
        <div className="space-y-1 p-4 md:p-2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">10,000+</div>
          <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">
            {t("home.stats.verified")}
          </div>
        </div>
        <div className="space-y-1 p-4 md:p-2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">500+</div>
          <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">
            {t("home.stats.requirements")}
          </div>
        </div>
        <div className="space-y-1 p-4 md:p-2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">6</div>
          <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">
            {t("home.stats.countries")}
          </div>
        </div>
        <div className="space-y-1 p-4 md:p-2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white">98%</div>
          <div className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">
            {t("home.stats.successRate")}
          </div>
        </div>
      </div>

      {/* Compliance Footer Bar */}
      <div className="glass-panel py-3.5 px-6 rounded-full text-center overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-8 text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-widest">
          <span>✦ {t("home.stats.compliance.secure")}</span>
          <span>✦ {t("home.stats.compliance.compliant")}</span>
          <span>✦ {t("home.stats.compliance.iso")}</span>
          <span>✦ {t("home.stats.compliance.gdpr")}</span>
          <span>✦ {t("home.stats.compliance.legal")}</span>
          <span>✦ {t("home.stats.compliance.protection")}</span>
        </div>
      </div>
    </section>
  );
}
