import useSwitchLang from '@hooks/useSwitchLang';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LangSwitcher() {
  const { i18n, t } = useTranslation();
  const { changeLang } = useSwitchLang();

  return (
    <div className="  items-center justify-center text-primary gap-5 hidden  lg:flex">
      <span
        className={`cursor-pointer ${i18n.language == 'de' ? 'font-bold' : ''}`}
        onClick={changeLang}
      >
        Ger
      </span>
      <span
        className={`cursor-pointer ${i18n.language == 'en' ? 'font-bold' : ''}`}
        onClick={changeLang}
      >
        Eng
      </span>
    </div>
  );
}

export default LangSwitcher;
