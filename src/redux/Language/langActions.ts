import { LangActions, SET_LANGUAGE } from './language.types';

// Set language
export const setLanguage = (lang: string): LangActions => {
  localStorage.setItem('language', lang);
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
};
