"use client";

import { Globe2, Moon, Sun } from "lucide-react";
import { usePortfolio } from "./PortfolioProvider";

export default function PortfolioControls() {
  const { language, setLanguage, theme, setTheme } = usePortfolio();
  return (
    <div className="flex items-center gap-2" aria-label="Préférences du portfolio">
      <div className="control-pill">
        <Globe2 size={15} aria-hidden="true" />
        <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Choisir la langue">
          <option value="fr">FR</option><option value="en">EN</option><option value="ar">AR</option>
        </select>
      </div>
      <button className="theme-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}>
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </div>
  );
}
