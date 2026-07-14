"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import RequestWorkforceModal from "./RequestWorkforceModal";
import CreateProfileModal from "./CreateProfileModal";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Event listeners for opening modals from other pages
  useEffect(() => {
    const handleOpenRequest = () => setIsRequestModalOpen(true);
    const handleOpenCreate = () => setIsCreateModalOpen(true);

    window.addEventListener("open-request-modal", handleOpenRequest);
    window.addEventListener("open-create-modal", handleOpenCreate);

    return () => {
      window.removeEventListener("open-request-modal", handleOpenRequest);
      window.removeEventListener("open-create-modal", handleOpenCreate);
    };
  }, []);

  const navLinks = [
    { href: "/#employers", label: t("nav.employers"), hasDropdown: true },
    { href: "/#candidates", label: t("nav.candidates") },
    { href: "/#solutions", label: t("nav.solutions") },
    { href: "/#about", label: t("nav.aboutUs") },
    { href: "/#resources", label: t("nav.resources") },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#020b14]/90 backdrop-blur-md py-3.5 px-4 md:px-8 transition-all duration-300 select-none">
      
      {/* Premium Gradient Accent Line at the exact bottom of the Navbar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#FDB813]/40 via-[#00bfff]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. Production Brand Logo Integration */}
        <Link href="/" className="flex items-center group cursor-pointer shrink-0">
          <img
            src="/brand-logo.png" // Place your logo image in your project's public folder with this name
            alt="jobzshala - Building Careers. Powering GCC"
            className="h-9 md:h-[44px] w-auto object-contain block select-none"
            draggable="false"
          />
        </Link>

        {/* 2. Horizontal Navigation Links (with Dropdown Icons) */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs md:text-sm font-medium tracking-wide flex items-center gap-1 hover:text-[#FDB813] transition-colors duration-200 group ${
                  isActive ? "text-[#FDB813]" : "text-slate-300"
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg 
                    className="w-3 h-3 text-slate-400 group-hover:text-[#FDB813] transition-colors duration-200" 
                    viewBox="0 0 16 16" 
                    fill="currentColor"
                  >
                    <path d="M8 10.5l-4-4h8l-4 4z" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>

        {/* 3. Right Menu Actions Block */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Custom Lang Selector matching screenshot (no icon style) */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[#010912]/80 hover:bg-[#07192a] text-slate-200 text-xs font-bold tracking-wide transition-all cursor-pointer"
            >
              <span>{language === "en" ? "EN" : "हिन्दी"}</span>
              <svg className="w-2.5 h-2.5 text-slate-400 shrink-0" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8.5L2 4.5H10L6 8.5Z" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#06121f] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 z-50">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-white/5 transition-colors cursor-pointer ${
                    language === "en" ? "text-yellow-400" : "text-slate-300"
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => {
                    setLanguage("hi");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-white/5 transition-colors cursor-pointer ${
                    language === "hi" ? "text-yellow-400" : "text-slate-300"
                  }`}
                >
                  हिन्दी (HI)
                </button>
              </div>
            )}
          </div>

          {/* Request Workforce Action Button (matching scale and roundness of screenshot) */}
          <button
            onClick={() => setIsRequestModalOpen(true)}
            className="bg-[#FDB813] hover:bg-[#e0a20f] text-[#020b14] px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg shadow-yellow-500/10"
          >
            <span>{t("nav.requestWorkforce")}</span>
            <span className="text-sm font-bold">→</span>
          </button>
        </div>

        {/* Mobile Hamburg Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span className="text-xl">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-white/5 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold tracking-wide block py-2 border-b border-white/5 ${
                  pathname === link.href ? "text-[#FDB813]" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            {/* Mobile Lang Option */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${
                  language === "en" ? "bg-[#FDB813] text-[#020b14]" : "bg-white/5 text-slate-300"
                } cursor-pointer`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${
                  language === "hi" ? "bg-[#FDB813] text-[#020b14]" : "bg-white/5 text-slate-300"
                } cursor-pointer`}
              >
                हिन्दी
              </button>
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setIsRequestModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="bg-[#FDB813] hover:bg-[#e0a20f] text-[#020b14] px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              {t("nav.requestWorkforce")} →
            </button>
          </div>
        </div>
      )}

      {/* Render Modals */}
      <RequestWorkforceModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
      <CreateProfileModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </nav>
  );
}