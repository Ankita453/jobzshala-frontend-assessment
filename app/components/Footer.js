"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  // Safe translation helper that falls back to explicit content if keys are unmapped
  const getTxt = (path, fallback) => {
    const translation = t(path);
    return translation === path ? fallback : translation;
  };

  return (
    <footer className="bg-[#01070e] border-t border-[#0d233a]/30 pt-16 text-slate-400 mt-auto select-none">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16">
        
        {/* Column 1: Branding & Description (Spans 5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <Link href="/" className="inline-block cursor-pointer">
            <img
              src="/brand-logo.png" // Utilizes the exact logo image path from public folder
              alt="jobzshala logo"
              className="h-[44px] w-auto object-contain block select-none"
              draggable="false"
            />
          </Link>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md opacity-80">
            {getTxt(
              "footer.slogan",
              "Powering the Workforce Behind the GCC Economy. AI-Native Workforce Infrastructure for the Future of GCC Hiring."
            )}
          </p>
        </div>

        {/* Column 2: Company Info (Spans 2 Columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white text-xs uppercase font-bold tracking-wider">
            {getTxt("footer.colCompany", "Company")}
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/#about" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("nav.aboutUs", "About Us")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.contactUs", "Contact Us")}
              </Link>
            </li>
            <li>
              <Link href="/#blog" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.blog", "Blog")}
              </Link>
            </li>
            <li>
              <Link href="/#careers" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.careers", "Careers")}
              </Link>
            </li>
            <li>
              <Link href="/#stories" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.stories", "Success Stories")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: FAQ Services (Spans 3 Columns, features fine vertical divider border) */}
        <div className="lg:col-span-3 lg:border-l lg:border-white/5 lg:pl-8 space-y-4">
          <h4 className="text-white text-xs uppercase font-bold tracking-wider">
            {getTxt("footer.colServices", "FAQ Services")}
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/#recruitment" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.recruitment", "Recruitment Solutions")}
              </Link>
            </li>
            <li>
              <Link href="/#infrastructure" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.infrastructure", "Workforce Infrastructure")}
              </Link>
            </li>
            <li>
              <Link href="/#matching" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.matching", "AI Matching")}
              </Link>
            </li>
            <li>
              <Link href="/#verification" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.verification", "Candidate Verification")}
              </Link>
            </li>
            <li>
              <Link href="/#visa" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.visa", "Visa Assistance")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Policy Links (Spans 2 Columns, features fine vertical divider border) */}
        <div className="lg:col-span-2 lg:border-l lg:border-white/5 lg:pl-8 space-y-4">
          <h4 className="text-white text-xs uppercase font-bold tracking-wider">
            {getTxt("footer.colLegal", "Legal")}
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/privacy" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.privacy", "Privacy Policy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.terms", "Terms & Conditions")}
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.refund", "Refund Policy")}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-[#FDB813] transition-colors text-slate-400">
                {getTxt("footer.cookies", "Cookie Policy")}
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Deep Dark Bottom Bar (Copyright & Regional Footprint) */}
      <div className="border-t border-white/5 bg-[#01050a] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* High-Fidelity Copyright Branding */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-slate-300 font-bold tracking-wide">Jobzshala 2026</span>
            <span className="text-slate-700">|</span>
            <span>All rights reserved</span>
          </div>

          {/* Regional Market Coverage Badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 text-[11px] md:text-xs font-semibold uppercase tracking-wider">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">UAE</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Saudi Arabia</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Qatar</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Oman</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Kuwait</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Bahrain</span>
          </div>

        </div>
      </div>

    </footer>
  );
}