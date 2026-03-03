import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationFR from './locales/fr/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
    es: {
        translation: translationES
    },
    en: {
        translation: translationEN
    },
    pt: {
        translation: translationPT
    },
    fr: {
        translation: translationFR
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // idioma padrão
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
