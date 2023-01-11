import en from './en.json';
import de from './de.json';
import tr from './tr.json';

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if (language === 'EN') {
    langData = en;
  } else if (language === 'DE') {
    langData = de;
  } else if (language === 'TR') {
    langData = tr;
  }

  return langData[key];
};
