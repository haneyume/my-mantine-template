import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import resources from './resources.json';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);

// i18n.on('initialized', (lng) => {
//   console.log(lng);
// });

i18n.on('languageChanged', (lng) => {
  // console.log(lng);

  if (lng === 'en') {
    dayjs.locale('en');
  } else if (lng === 'ja') {
    dayjs.locale('ja');
  } else if (lng === 'zhHant') {
    dayjs.locale('zh-tw');
  } else if (lng === 'zhHans') {
    dayjs.locale('zh-cn');
  }
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'en',
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    resources,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator'],
      // convertDetectedLanguage: 'Iso15897',
      convertDetectedLanguage: (lng) => {
        switch (lng) {
          case 'ja-JP':
            return 'ja';
          case 'zh-TW':
            return 'zhHant';
          case 'zh-CN':
            return 'zhHans';
          default:
            return lng;
        }
      },
    },
  })
  .then((_value) => {
    // console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

const languages = [
  { label: 'English', value: 'en' },
  { label: '日本語', value: 'ja' },
  { label: '繁體中文', value: 'zhHant' },
  { label: '简体中文', value: 'zhHans' },
];

export { i18n, languages };
