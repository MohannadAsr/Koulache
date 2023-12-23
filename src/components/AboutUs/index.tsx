import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function AboutUs() {
  return (
    <div className=" site-section text-white" id="about">
      <div className=" container">
        <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
          Über uns
        </h1>
        <div className=" bg-primary/60 py-8 px-3 my-9 mx-2 rounded-md text-sm md:text-lg ">
          <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-7 flex items-center justify-center">
              <div className=" py-5 md:py-9 text-xl   ">
                Bei Kolache sind wir auf fachmännische Laptop-Reparaturen und
                nahtlose Überwachungskamerainstallationen spezialisiert. Unser
                Engagement für Spitzenleistungen spiegelt sich in den
                begeisterten Rückmeldungen zufriedener Kunden wider. Zögern Sie
                nicht, uns für alle Ihre Technologiebedürfnisse zu kontaktieren
                - wir sind hier, um Sie in Verbindung und sicher zu halten.
              </div>
            </div>
            <div className=" col-span-12 md:col-span-5 h-full flex flex-col justify-between gap-4 p-10">
              <div className=" flex  justify-between items-center">
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  className="lg:w-[150px] lg:h-[150px] text-sm lg:text-base w-[100px] h-[100px] text-center  py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center  shadow-md"
                >
                  <div>Schneller </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="lg:w-[150px] lg:h-[150px] text-sm lg:text-base w-[100px] h-[100px] text-center  py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center  shadow-md"
                >
                  <div>Vor Ort</div>
                </motion.div>
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" flex items-center justify-center"
              >
                <img src="/KCS-S.png" className=" w-20" />
              </motion.div>
              <div className=" flex  justify-between items-center">
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="lg:w-[150px] lg:h-[150px] text-sm lg:text-base w-[100px] h-[100px] text-center  py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center shadow-md"
                >
                  <div>Professionelle Arbeit</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="lg:w-[150px] lg:h-[150px] text-sm lg:text-base w-[100px] h-[100px] text-center  py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center shadow-md"
                >
                  <div>Beste Beratung</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
