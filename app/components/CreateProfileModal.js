"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function CreateProfileModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    skills: "",
    experience: "",
    currentLocation: "",
    preferredCountry: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      whatsapp: "",
      skills: "",
      experience: "",
      currentLocation: "",
      preferredCountry: "",
    });
    setFormSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-lg bg-[#06121f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Top Border Accent */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"></div>

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
                  {t("modals.createProfile.title")}
                </h3>
                <p className="text-sm text-slate-400">
                  {t("modals.createProfile.subtitle")}
                </p>
              </div>

              <div className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {t("modals.createProfile.fullName")} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.createProfile.email")} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.createProfile.phone")} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.createProfile.whatsapp")} *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.createProfile.skills")} *
                    </label>
                    <input
                      type="text"
                      name="skills"
                      required
                      placeholder={t("modals.createProfile.skillsPlaceholder")}
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.createProfile.experience")} *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      required
                      placeholder={t("modals.createProfile.experiencePlaceholder")}
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      {t("modals.createProfile.currentLocation")} *
                    </label>
                    <input
                      type="text"
                      name="currentLocation"
                      required
                      placeholder={t("modals.createProfile.currentLocationPlaceholder")}
                      value={formData.currentLocation}
                      onChange={handleChange}
                      className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Preferred GCC Country */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {t("modals.createProfile.preferredCountry")} *
                  </label>
                  <select
                    name="preferredCountry"
                    required
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className="w-full bg-[#0d1d2e] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="" disabled>
                      {t("modals.createProfile.selectCountry")}
                    </option>
                    <option value="UAE">{t("home.trusted.countries.uae")}</option>
                    <option value="Saudi Arabia">{t("home.trusted.countries.saudi")}</option>
                    <option value="Qatar">{t("home.trusted.countries.qatar")}</option>
                    <option value="Oman">{t("home.trusted.countries.oman")}</option>
                    <option value="Kuwait">{t("home.trusted.countries.kuwait")}</option>
                    <option value="Bahrain">{t("home.trusted.countries.bahrain")}</option>
                  </select>
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
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
                >
                  {t("modals.createProfile.submitBtn")}
                </button>
              </div>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-3xl mx-auto mb-2 animate-bounce">
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
