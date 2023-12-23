import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import snapchat from '@iconify-icons/mdi/snapchat';
import facebook from '@iconify-icons/mdi/facebook';

import tiktok from '@iconify-icons/mdi/tick-network';
import instagram from '@iconify-icons/mdi/instagram';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=" bg-primary text-white">
      <div className=" container pt-10 pb-3">
        <div className=" grid  grid-cols-12 gap-5 mx-auto">
          <div className=" col-span-12 lg:col-span-4 mx-auto   ">
            <img src="/KCS-L.png" className=" w-20 mx-auto" />
            <hr className=" w-44 my-2" />
            <h2 className=" w-44 text-center">
              Transzug für Umzug & Wohnungsauflösung
            </h2>

            <div className="flex items-center justify-center">
              <img src="/QR.jpg" className=" w-28  my-2 " />
            </div>
          </div>
          <div className=" col-span-6 break-words md:col-span-3 px-2 mx-auto">
            <h5 className=" font-bold">Links</h5>
            <div className=" footer-links flex flex-col my-4  gap-5 ">
              <Link to={'/'} className=" ">
                Startseite
              </Link>
              <Link to={'/services'} className=" ">
                Dienstleistungen
              </Link>
              <Link to={'/portfolio'} className=" ">
                Potfolio
              </Link>
              <Link to={'/about '} className=" ">
                Uber Uns
              </Link>
            </div>
          </div>
          <div className=" col-span-6 break-words md:col-span-3 px-2 mx-auto">
            <h5 className="  font-bold">Info</h5>
            <div className=" footer-links flex flex-col  my-4 gap-5 ">
              <a className=" ">Datenschutz</a>
              <a className=" ">Impressum</a>
              <a className=" ">Cookies</a>
            </div>
          </div>
          <div className=" col-span-12 break-words md:col-span-2  px-2 mx-auto text-center   md:text-start ">
            <h5 className="  font-bold">Contact us</h5>
            <div className="flex flex-col  my-4 gap-3">
              <a className="  font-bold font-number" href="tel:+491736408501">
                +491736408501
              </a>
              <a className=" underline   " href="mailto:info@transzug.de">
                info@koulache.de
              </a>
              <div>
                <h5 className=" ">‌Josf-wild-str.14</h5>
                <h5 className=" ">97294 Unterpleichfeld</h5>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[1px] bg-white/20" />
        <div className=" flex justify-start md:justify-center items-center text-white/70 pt-2 px-2 font-serif text-center">
          © Koulache 2023.Einige Rechte Vorbehalten , Made with Heart 🤍
          IT-TRENDCO
        </div>
      </div>
    </div>
  );
}

export default Footer;
