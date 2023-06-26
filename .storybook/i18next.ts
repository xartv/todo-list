import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/locales/en/translation.json';
import ruTranslation from '../public/locales/ru/translation.json';

const ns = ['translation'];
const supportedLngs = ['ru', 'en'];
const resources = supportedLngs.reduce((acc, lng) => {
  acc[lng] = ns.reduce((nsAcc, n) => {
    if (!nsAcc[n]) nsAcc[n] = {};
    nsAcc[n] = lng === 'en' ? enTranslation : ruTranslation;
    return nsAcc;
  }, {});
  return acc;
}, {});

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    lng: 'ru',
    fallbackLng: 'ru',
    defaultNS: 'translation',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
  });

export default i18n;
