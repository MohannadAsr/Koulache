// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../localization/en.json';
import de from '../localization/de.json';

const language = localStorage.getItem('transzug-lang');
const parsedLang = language ? JSON.parse(language) : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    de: de,
  },
  lng: 'de',
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
