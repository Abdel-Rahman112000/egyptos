import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import Cookies from "js-cookie";
import EnTranslation from "translate/EnTranslation";
import ArTranslation from "translate/ArTranslation";
import GeTranslation from "translate/GeTranslation";
import HuTranslation from "translate/HuTranslation";
import PoTranslation from "translate/PoTranslation";
import RuTranslation from "translate/RuTranslation";
import TuTranslation from "translate/TuTranslation";
import RoTranslation from "translate/RoTranslation";

const lang = Cookies.get("i18next");
const translationsEn = EnTranslation;
const translationsAr = ArTranslation;
const translationsGe = GeTranslation;
const translationsHu = HuTranslation;
const translationsPo = PoTranslation;
const translationsRu = RuTranslation;
const translationsTu = TuTranslation;
const translationsRo = RoTranslation;
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      ar: { translation: translationsAr },
      ge: { translation: translationsGe },
      hu: { translation: translationsHu },
      po: { translation: translationsPo },
      ru: { translation: translationsRu },
      tu: { translation: translationsTu },
      ro: { translation: translationsRo },
    },
    lng: lang || "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
    },
  });
export default i18n;
