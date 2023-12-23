import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function Services() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const serviceTitle = [
    'Computer Dienstleistungen',
    'Sprechanlagen',
    'Sicherheitskamera',
    'Webseiten & Mobile Anwendungen',
  ];

  React.useEffect(() => {
    pathname.match('/services')
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : null;
  }, []);

  return (
    <div className=" site-section min-h-[100vh] " id="services">
      <div className={` container  ${pathname == '/' ? 'pt-24' : ''}`}>
        <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl">
          Dienstleistungen
        </h1>
        <h3 className="text-center text-primary text-md md:text-xl py-1 font-semibold">
          Was wir tun konnen
        </h3>
        <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-2 lg:gap-5 my-9 px-2">
          {Array.from({ length: 4 }).map((_item, index) => {
            return (
              <div
                className=" bg-secondary rounded-md shadow-lg overflow-hidden w-3/4 mx-auto"
                key={index}
              >
                <div className=" overflow-hidden  ">
                  <img
                    src={`/services/${index + 1}.jpg`}
                    className=" object-cover w-full h-[150px] md:h-[250px] rounded-sm cursor-pointer hover:scale-110 hover:rotate-3 custom-trans "
                    onClick={() => navigate(`/services/${index + 1}`)}
                  />
                </div>
                <div className=" flex items-center gap-5 py-5 px-2">
                  <motion.h5
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true }}
                    className=" text-white lg:text-5xl text-xl font-mono"
                  >
                    {(index + 1).toString()}
                  </motion.h5>
                  <motion.div
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className=" text-white"
                  >
                    <h4 className=" font-bold text-xs sm:text-lg lg:text-xl">
                      {serviceTitle[index] || serviceTitle[0]}
                    </h4>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
