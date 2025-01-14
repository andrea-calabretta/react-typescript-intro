import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from "./locales/en.json";
import italian from "./locales/it.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: english
      },
      it: {
        translation: italian
      }
    },
    lng: 'it', // lingua di default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React già esegue l'escape per evitare xss
    }
  });

export default i18n;
