import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useSwitchLang from '@hooks/useSwitchLang';

function SideMenu({
  setShowMenu,
  menuValue,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuValue: boolean;
}) {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const { changeLang } = useSwitchLang();
  const NavLinks = [
    { name: t('Startseite'), path: '/' },
    { name: t('Services'), path: '/services' },
    { name: t('Galerie'), path: '/galerie' },
    { name: t('AboutUs'), path: '/about' },
    { name: t('ContactUs'), path: '/contact' },
  ];
  return (
    <AnimatePresence>
      {menuValue && (
        <motion.div
          initial={{ top: '-100vh' }}
          animate={{ top: 0 }}
          exit={{ top: '100vh' }}
          key={1}
          className=" section-blur-overlay text-white font-semibold bg-secondary/90 fixed h-full w-full top-0 left-0 z-[999] flex flex-col  justify-center items-start px-5"
        >
          <div className=" relative z-[99] flex flex-col justify-center items-start gap-6 text-xl w-3/4 px-3">
            {NavLinks.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-full"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={` cursor-pointer ${
                      pathname.match(item.path) && item.path !== '/'
                        ? 'text-primary'
                        : ''
                    } ${
                      item.path === '/' && pathname == '/' ? 'text-primary' : ''
                    }`}
                  >
                    {item.name}
                  </NavLink>
                  <hr className=" w-3/4" />
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
