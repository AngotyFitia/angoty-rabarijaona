import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage() as { language: "en" | "fr" | "mg"; setLanguage: (lang: "en" | "fr" | "mg") => void };
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: "en" | "fr" | "mg") => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-3 py-2 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition">
        {language === "en" && (
          <ReactCountryFlag countryCode="US" svg style={{ fontSize: "1.5em" }} />
        )}
        {language === "fr" && (
          <ReactCountryFlag countryCode="FR" svg style={{ fontSize: "1.5em" }} />
        )}
        {language === "mg" && (
          <ReactCountryFlag countryCode="MG" svg style={{ fontSize: "1.5em" }} />
        )}
      </button>

      {open && (
        <div className="absolute mt-2 w-36 bg-white border rounded-lg shadow-lg overflow-hidden animate-fade-in">
          <button onClick={() => handleSelect("en")} className={`flex items-center gap-2 w-full px-4 py-2 text-left transition hover:bg-gray-100 ${ language === "en" ? "bg-gray-100 font-semibold" : "" }`}>
            <ReactCountryFlag countryCode="US" svg style={{ fontSize: "1.5em" }} />
            <span className="text-sm">EN</span>
          </button>
          <button onClick={() => handleSelect("fr")} className={`flex items-center gap-2 w-full px-4 py-2 text-left transition hover:bg-gray-100 ${ language === "fr" ? "bg-gray-100 font-semibold" : ""}`}>
            <ReactCountryFlag countryCode="FR" svg style={{ fontSize: "1.5em" }} />
            <span className="text-sm">FR</span>
          </button>
          <button onClick={() => handleSelect("mg")} className={`flex items-center gap-2 w-full px-4 py-2 text-left transition hover:bg-gray-100 ${ language === "mg" ? "bg-gray-100 font-semibold" : ""}`}>
            <ReactCountryFlag countryCode="MG" svg style={{ fontSize: "1.5em" }} />
            <span className="text-sm">MG</span>
          </button>
        </div>
      )}
    </div>
  );
}
