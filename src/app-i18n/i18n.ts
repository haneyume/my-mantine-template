import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './resources.json';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

export const languages = [
  { label: 'English', value: 'en' },
  { label: '日本語', value: 'ja' },
  { label: '繁體中文', value: 'zhHant' },
  { label: '简体中文', value: 'zhHans' },
];

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

export default i18n;
