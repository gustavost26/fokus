import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform } from 'react-native';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translationPt from './locales/pt-BR.json';
import translationEn from './locales/en-US.json';
import translationEs from './locales/es-ES.json';

const resources = {
  'pt-BR': { translation: translationPt },
  'en-US': { translation: translationEn },
  'es-ES': { translation: translationEs },
};

const customDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    let savedLanguage = await AsyncStorage.getItem('language');
    if (!savedLanguage) {
      savedLanguage = Localization.locale;
    }
    callback(savedLanguage);
  },
  init: () => {},
  cacheUserLanguage: async (lng) => {
    await AsyncStorage.setItem('language', lng);
  },
};

const initI18n = async () => {
  let languageDetector;

  if (Platform.OS === 'web') {
    const browserDetectorModule = await import('i18next-browser-languagedetector');
    languageDetector = browserDetectorModule.default;
  } else {
    languageDetector = customDetector;
  }

  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      resources,
      fallbackLng: 'pt-BR',
      interpolation: {
        escapeValue: false,
      },
    });
};

initI18n();

export default i18n;
