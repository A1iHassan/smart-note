import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locals/en/translation.json";
import arTranslation from "./locals/ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
