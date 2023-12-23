import { AnimatePresence, motion } from 'framer-motion';

function HeroImg() {
  return (
    <div
      className=" overflow-hidden hero-section   flex justify-center items-center px-4 bg-bottom bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: 'url(/portfolio/4.jpg)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.47 }}
        className=" bg-dark py-7 text-white flex flex-col gap-1 rounded-md hero-intro px-14"
      >
        <img src="/KCS-S.png" alt="" className=" w-24 md:w-36 mx-auto " />
        <h1 className="text-center text-[#04242f] font-bold   md:text-6xl text-3xl">
          Koulache
        </h1>
        <h1 className="text-center text-[#036c9b] font-semibold  -mt-2  md:text-5xl text-2xl">
          Computer Serivce
        </h1>
      </motion.div>
    </div>
  );
}

export default HeroImg;
