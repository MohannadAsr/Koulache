import LangSwitcher from '@components/LangSwitcher';
import { Icon } from '@iconify/react/dist/iconify.js';
import { NavLink, useLocation } from 'react-router-dom';
import Menu from '@iconify-icons/mdi/menu';
import Close from '@iconify-icons/mdi/close';
import { useTranslation } from 'react-i18next';
import React from 'react';

type propsType = {
  menuValue: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: propsType) {
  const { menuValue, setShowMenu } = props;
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (isScrollingUp && !visible) {
        setVisible(true);
      } else if (!isScrollingUp && visible) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const NavLinks = [
    { name: t('Startseite'), path: '/' },
    { name: t('Services'), path: '/services' },
    { name: t('Galerie'), path: '/portfolio' },
    { name: t('AboutUs'), path: '/about' },
    { name: t('ContactUs'), path: '/contact' },
  ];

  return (
    <div
      className={`nav-bar  bg-white shadow-lg sticky top-0 z-[99999] ${
        visible ? 'top-0' : 'top-[-100px] '
      }`}
    >
      <div className=" container  flex justify-between items-center px-3">
        <div className=" flex flex-col items-center justify-center py-2 ">
          <NavLink to={'/'}>
            <img src="/KCS-S.png" className=" w-20" />
          </NavLink>
        </div>
        <div className="  gap-10 items-center justify-center hidden  md:flex text-primary font-medium">
          {NavLinks.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                className={`  cursor-pointer ${
                  pathname.match(item.path) && item.path !== '/'
                    ? 'font-bold'
                    : ''
                } ${item.path === '/' && pathname == '/' ? 'font-bold' : ''} `}
                key={index}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        {/* <LangSwitcher /> */}
        <div></div>
        <div
          className="md:hidden block"
          onClick={() => {
            setShowMenu(!menuValue);
          }}
        >
          <Icon
            icon={menuValue ? Close : Menu}
            fontSize={30}
            className=" text-primary "
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
