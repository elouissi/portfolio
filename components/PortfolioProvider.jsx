"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  fr: { home: "Accueil", services: "Services", resume: "Parcours", projects: "Projets", contact: "Me contacter", role: "Développeur Full Stack", greeting: "Bonjour, je suis", intro: "Je conçois des expériences numériques élégantes, accessibles et performantes, de l’idée jusqu’à la mise en ligne.", cv: "Télécharger mon CV", selectedWork: "Sélection de projets", viewProject: "Voir le projet", repository: "Dépôt GitHub", education: "Formation", skills: "Compétences", experience: "Expérience", about: "À propos" },
  en: { home: "Home", services: "Services", resume: "Journey", projects: "Projects", contact: "Get in touch", role: "Full Stack Developer", greeting: "Hello, I’m", intro: "I craft elegant, accessible and high-performing digital experiences, from the first idea to launch.", cv: "Download my CV", selectedWork: "Selected work", viewProject: "View project", repository: "GitHub repository", education: "Education", skills: "Skills", experience: "Experience", about: "About" },
  ar: { home: "الرئيسية", services: "الخدمات", resume: "المسار", projects: "المشاريع", contact: "تواصل معي", role: "مطور Full Stack", greeting: "مرحباً، أنا", intro: "أصمم تجارب رقمية أنيقة وسريعة وسهلة الاستخدام، من الفكرة إلى الإطلاق.", cv: "تحميل السيرة الذاتية", selectedWork: "أعمال مختارة", viewProject: "عرض المشروع", repository: "مستودع GitHub", education: "التكوين", skills: "المهارات", experience: "الخبرة", about: "نبذة عني" },
};

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [language, setLanguage] = useState("fr");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedLanguage && translations[storedLanguage]) setLanguage(storedLanguage);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [language, theme]);

  const value = useMemo(() => ({ language, setLanguage, theme, setTheme, t: translations[language] }), [language, theme]);
  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export default PortfolioProvider;
