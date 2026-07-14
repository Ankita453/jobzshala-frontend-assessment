"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function RequestWorkforceModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phone: "",
    industry: "",
    workforceSize: "",
    details: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      companyName: "",
      workEmail: "",
      phone: "",
      industry: "",
      workforceSize: "",
      details: "",
    });
    setFormSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-lg bg-[#06121f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Top Border Accent */}
        <div className="h-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-xl font-bold cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t("modals.requestWorkforce.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("modals.requestWorkforce.subtitle")}
                </p>
              </div>

              <div className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {t("modals.requestWorkforce.fullName")} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {t("modals.requestWorkforce.companyName")} *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.requestWorkforce.workEmail")} *
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      required
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.requestWorkforce.phone")} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Industry */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.requestWorkforce.industry")} *
                    </label>
                    <input
                      type="text"
                      name="industry"
                      required
                      placeholder={t("modals.requestWorkforce.industryPlaceholder")}
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  {/* Workforce Size */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.requestWorkforce.workforceSize")} *
                    </label>
                    <input
                      type="number"
                      name="workforceSize"
                      required
                      min="1"
                      value={formData.workforceSize}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {t("modals.requestWorkforce.details")}
                  </label>
                  <textarea
                    name="details"
                    rows="3"
                    placeholder={t("modals.requestWorkforce.detailsPlaceholder")}
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit / Cancel Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t("common.cancel")}
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-yellow-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
                >
                  {t("modals.requestWorkforce.submitBtn")}
                </button>
              </div>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-3xl mx-auto mb-2 animate-bounce">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t("common.successTitle")}
              </h3>
              <p className="text-slate-400 max-w-sm mx-auto">
                {t("common.successMessage")}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#0f2942] hover:bg-[#1b3d5e] text-white border border-white/10 px-6 py-2 rounded-lg transition-colors cursor-pointer text-sm font-semibold"
                >
                  {t("common.ok")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
