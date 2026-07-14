"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("jobzshala_lang");
    if (savedLanguage === "en" || savedLanguage === "hi") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang) => {
    if (lang === "en" || lang === "hi") {
      setLanguageState(lang);
      localStorage.setItem("jobzshala_lang", lang);
    }
  };

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if key doesn't exist in active language
        let fallback = translations["en"];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path; // Return the path if not found anywhere
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
