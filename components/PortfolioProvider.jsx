"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  fr: { home: "Accueil", services: "Services", resume: "Parcours", projects: "Projets", contact: "Me contacter", role: "Développeur Full Stack", greeting: "Bonjour, je suis", intro: "Je conçois des expériences numériques élégantes, accessibles et performantes, de l’idée jusqu’à la mise en ligne.", cv: "Télécharger mon CV", selectedWork: "Sélection de projets", viewProject: "Voir le projet", repository: "Dépôt GitHub", education: "Formation", skills: "Compétences", experience: "Expérience", about: "À propos", servicesTitle: "Mes services", serviceItems: [{ title: "Développement Web", description: "Création de sites vitrines, blogs, sites e-commerce et applications web avec des technologies modernes." }, { title: "UI/UX Design", description: "Design d'interfaces modernes et intuitives avec une attention particulière à l'expérience utilisateur." }, { title: "Développement Back-End", description: "Conception de back-ends robustes et sécurisés avec des APIs RESTful et des fonctionnalités avancées." }, { title: "Développement Front-End", description: "Création de front-ends dynamiques et réactifs offrant des expériences utilisateur engageantes." }], workLive: "Projet en ligne", workGithub: "Dépôt GitHub", contactTitle: "Travaillons ensemble", contactIntro: "Nous sommes là pour répondre à vos questions et trouver des solutions adaptées à vos besoins.", send: "Envoyer le message", sending: "Envoi en cours...", selectService: "Sélectionner un service", messagePlaceholder: "Écrivez votre message", name: "Nom", firstName: "Prénom", phone: "Numéro de téléphone", address: "Adresse", aboutMe: "À propos de moi", myExperience: "Mes expériences", myEducation: "Ma formation", mySkills: "Mes compétences" },
  
  en: { home: "Home", services: "Services", resume: "Journey", projects: "Projects", contact: "Get in touch", role: "Full Stack Developer", greeting: "Hello, I’m", intro: "I craft elegant, accessible and high-performing digital experiences, from the first idea to launch.", cv: "Download my CV", selectedWork: "Selected work", viewProject: "View project", repository: "GitHub repository", education: "Education", skills: "Skills", experience: "Experience", about: "About", servicesTitle: "My services", serviceItems: [{ title: "Web Development", description: "Websites, blogs, e-commerce platforms and applications built with modern technologies." }, { title: "UI/UX Design", description: "Modern, intuitive user interfaces designed with a strong focus on user experience." }, { title: "Back-End Development", description: "Robust and secure back-ends with RESTful APIs and advanced features." }, { title: "Front-End Development", description: "Dynamic and responsive front-ends that create engaging user experiences." }], workLive: "Live project", workGithub: "GitHub repository", contactTitle: "Let’s work together", contactIntro: "We are here to answer your questions and find solutions tailored to your needs.", send: "Send message", sending: "Sending...", selectService: "Select a service", messagePlaceholder: "Write your message", name: "Last name", firstName: "First name", phone: "Phone number", address: "Address", aboutMe: "About me", myExperience: "My experience", myEducation: "My education", mySkills: "My skills" },
  ar: { home: "الرئيسية", services: "الخدمات", resume: "المسار", projects: "المشاريع", contact: "تواصل معي", role: "مطور Full Stack", greeting: "مرحباً، أنا", intro: "أصمم تجارب رقمية أنيقة وسريعة وسهلة الاستخدام، من الفكرة إلى الإطلاق.", cv: "تحميل السيرة الذاتية", selectedWork: "أعمال مختارة", viewProject: "عرض المشروع", repository: "مستودع GitHub", education: "التكوين", skills: "المهارات", experience: "الخبرة", about: "نبذة عني", servicesTitle: "خدماتي", serviceItems: [{ title: "تطوير الويب", description: "إنشاء مواقع وتطبيقات ويب باستخدام تقنيات حديثة." }, { title: "تصميم UI/UX", description: "تصميم واجهات عصرية وسهلة الاستخدام مع التركيز على تجربة المستخدم." }, { title: "تطوير الواجهة الخلفية", description: "بناء أنظمة خلفية قوية وآمنة مع واجهات RESTful." }, { title: "تطوير الواجهة الأمامية", description: "واجهات ديناميكية ومتجاوبة تقدم تجربة استخدام جذابة." }], workLive: "المشروع المباشر", workGithub: "مستودع GitHub", contactTitle: "لنعمل معاً", contactIntro: "نحن هنا للإجابة عن أسئلتك وإيجاد حلول مناسبة لاحتياجاتك.", send: "إرسال الرسالة", sending: "جارٍ الإرسال...", selectService: "اختر خدمة", messagePlaceholder: "اكتب رسالتك", name: "الاسم العائلي", firstName: "الاسم الشخصي", phone: "رقم الهاتف", address: "العنوان", aboutMe: "نبذة عني", myExperience: "خبرتي", myEducation: "تكويني", mySkills: "مهاراتي" },
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
