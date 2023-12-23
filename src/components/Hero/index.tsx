import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
function Hero() {
  const [videoSrc, setVideoSrc] = React.useState<1 | 2>(1);

  const changeVideo = () => {
    setVideoSrc((prev) => {
      return prev == 1 ? 2 : 1;
    });
  };

  return (
    <div className=" hero overflow-hidden   flex justify-center items-center w-full   bg-center bg-no-repeat bg-cover relative">
      {videoSrc == 1 && (
        <div className=" hero w-full relative ">
          <div className=" absolute top-1/2 -translate-y-1/2 left-[25%] -translate-x-1/4  gap-5 max-w-3/4   text-white z-[99] font-black uppercase flex flex-col items-start justify-center">
            <h1 className="transparent-text ttext-2xl sm:text-3xl md:text-[5rem] my-1">
              KOULACHE
            </h1>
            <h2 className=" stroke-primary text-white text-sm sm:text-xl md:text-4xl stroke-[1px]">
              Sie sind auf der Suche nach einer Türsprechanlage? Dann sind Sie
              hier genau richtig!
            </h2>
          </div>
          <video
            className=" w-full  h-full bg-cover"
            autoPlay
            muted
            onEnded={changeVideo}
          >
            <source src={`/videos/${2}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {videoSrc == 2 && (
        <div className=" hero w-full relative ">
          <div className=" absolute top-1/2 -translate-y-1/2 left-[25%] -translate-x-1/4  gap-2 max-w-3/4   text-white z-[99] font-black uppercase flex flex-col items-start justify-center">
            <h1 className="transparent-text text-2xl sm:text-3xl md:text-[5rem] my-1">
              KOULACHE
            </h1>
            <h2 className=" stroke-primary text-white text-sm sm:text-xl md:text-4xl stroke-[1px]">
              Computer Service Koulache KCS
            </h2>
            <h2 className=" stroke-primary text-white text-sm sm:text-xl md:text-4xl stroke-[1px]">
              Verkauf von neuen und gebrauchten PC und Notebook & Reparatur
            </h2>
          </div>
          <video
            className=" w-full  h-full bg-cover"
            autoPlay
            muted
            onEnded={changeVideo}
          >
            <source src={`/videos/${1}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className=" absolute right-3 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2 md:gap-3 z-[99]">
        <span
          onClick={() => setVideoSrc(1)}
          className={` ${
            videoSrc == 1 ? 'bg-primary' : 'bg-white'
          } w-[15px] h-[15px] rounded-full z-[99] cursor-pointer`}
        ></span>
        <span
          onClick={() => setVideoSrc(2)}
          className={` ${
            videoSrc == 2 ? 'bg-primary' : 'bg-white'
          } w-[15px] h-[15px] rounded-full z-[99] cursor-pointer`}
        ></span>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.47 }}
        className=" bg-dark py-7 text-white flex flex-col gap-3 rounded-md hero-intro"
      >
        <h1 className="text-center lg:text-5xl text-3xl">Transzug</h1>
        <h2 className=" lg:text-3xl text-xl w-3/4 m-auto text-center">
          für Umzug & Wohnungsauflösung
        </h2>
      </motion.div> */}
    </div>
  );
}

export default Hero;
