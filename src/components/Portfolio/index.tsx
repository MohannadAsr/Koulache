import React from 'react';
import arrowLeft from '@iconify-icons/mdi/arrow-left-circle';
import arrowRight from '@iconify-icons/mdi/arrow-right-circle';
import close from '@iconify-icons/mdi/close';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion, AnimatePresence } from 'framer-motion';

function Portfolio() {
  const [id, setId] = React.useState<number>(1);
  const [dialog, setDialog] = React.useState<boolean>(false);

  const goTo = (dir: 'next' | 'prev') => {
    if (dir == 'next' && id < 24) {
      return setId(id + 1);
    }
    if (dir == 'prev' && id !== 1) {
      return setId(id - 1);
    }
  };

  const handleBodyOverflow = React.useCallback(() => {
    document.body.style.overflow = dialog ? 'hidden' : 'auto';
  }, [dialog]);

  React.useEffect(() => {
    handleBodyOverflow();
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key == 'Escape') return setDialog(false);
      if (e.key == 'ArrowLeft') return goTo('prev');
      if (e.key == 'ArrowRight') return goTo('next');
    });
  }, [handleBodyOverflow]);

  return (
    <div className=" site-section relative  overflow-hidden" id="galerie">
      <AnimatePresence>
        {dialog && (
          <motion.div
            key={3}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 30 }}
            className="  z-[9999999] fixed px-2 w-full h-full   bg-black/80  top-0   text-white flex justify-center items-center "
          >
            <div className=" flex flex-col md:flex-row justify-center gap-3 items-center  ">
              <Icon
                icon={arrowLeft}
                fontSize={40}
                className={` hidden md:block  text-white/90 ${
                  id && Number(id) == 1 ? ' opacity-50' : 'cursor-pointer'
                }`}
                onClick={() => goTo('prev')}
              />
              <div className="  bg-primary/60 rounded-md p-2 relative w-full  ">
                <div
                  onClick={() => setDialog(false)}
                  className="   absolute -left-1 -top-1 rounded-md bg-primary cursor-pointer flex items-center justify-center p-1"
                >
                  <Icon icon={close} fontSize={30} />
                </div>
                <img
                  src={`/portfolio/${id}.jpg`}
                  className="  h-[80vh] w-full lg:w-[800px] object-cover  rounded-md  mx-auto "
                />
              </div>
              <Icon
                icon={arrowRight}
                fontSize={40}
                className={` hidden md:block  text-white/90 ${
                  id && Number(id) == 24 ? ' opacity-50' : 'cursor-pointer'
                }`}
                onClick={() => goTo('next')}
              />
              <div className=" md:hidden flex items-center justify-center gap-4">
                <Icon
                  icon={arrowLeft}
                  fontSize={40}
                  className={`   text-white/90 ${
                    id && Number(id) == 1 ? ' opacity-50' : 'cursor-pointer'
                  }`}
                  onClick={() => goTo('prev')}
                />
                <Icon
                  icon={arrowRight}
                  fontSize={40}
                  className={`   text-white/90 ${
                    id && Number(id) == 24 ? ' opacity-50' : 'cursor-pointer'
                  }`}
                  onClick={() => goTo('next')}
                />
              </div>
            </div>
          </motion.div>
        )}
        <div className=" container">
          <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
            Galerie
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-2 my-10 px-3">
            {Array.from({ length: 6 }).map((_item, index) => {
              return (
                <div
                  className={`  shadow-lg rounded-md  ${
                    dialog ? ' opacity-30' : ''
                  }`}
                  key={index}
                >
                  <div className=" overflow-hidden rounded-xl">
                    <img
                      src={`/portfolio/${index + 1}.jpg`}
                      className=" object-cover h-[190px] md:h-[200px] lg:h-[290px] w-full  hover:scale-125   cursor-pointer custom-trans"
                      onClick={() => {
                        setDialog(true);
                        setId(index + 1);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" text-center my-6">
            <button
              className=" px-10 py-2 bg-primary rounded-md text-white"
              onClick={() => {
                setId(7);
                setDialog(true);
              }}
            >
              See More
            </button>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
