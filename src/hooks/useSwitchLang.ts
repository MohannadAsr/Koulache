import React from 'react';
import { useTranslation } from 'react-i18next';

const useSwitchLang = () => {
  const { i18n, t } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    localStorage.setItem('transzug-lang', JSON.stringify(i18n.language));
  };

  React.useEffect(() => {
    changeHTML(i18n.language);
  }, [i18n.language]);

  const changeHTML = (lang: string) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return {
    changeLang,
  };
};

export default useSwitchLang;
