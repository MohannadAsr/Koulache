import React from 'react';
import eye from '@iconify-icons/mdi/eye';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'react-intersection-observer';

function VideoSection() {
  const [videoSrc, setVideoSrc] = React.useState<1 | 2>(1);
  const video = React.useRef<HTMLDivElement | null>(null);
  const [auto, setAuto] = React.useState<boolean>(false);

  const changeVideo = (num: 1 | 2) => {
    if (num !== videoSrc) setVideoSrc(num);
  };

  return (
    <div
      className=" site-section  flex justify-center items-center"
      ref={video}
    >
      <div className="container px-3 ">
        <h5 className=" text-2xl md:text-3xl mb-10 text-primary font-bold text-center">
          Einige unserer Arbeiten
        </h5>
        {videoSrc == 1 && (
          <video
            controls
            autoPlay={auto}
            className=" w-full  h-full bg-cover border-[5px] border-primary rounded-lg"
            onEnded={() => changeVideo(videoSrc == 1 ? 2 : 1)}
          >
            <source src={`/videos/${2}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {videoSrc == 2 && (
          <video
            controls
            autoPlay={auto}
            className=" w-full  h-full bg-cover border-[5px] border-primary rounded-lg "
            onEnded={() => changeVideo(videoSrc == 2 ? 1 : 2)}
          >
            <source src={`/videos/${1}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className=" flex justify-center items-center gap-5 my-5 px-2">
          <div
            className={` rouneded-lg w-3/4 md:w-1/4 relative rounded-md ${
              videoSrc !== 1 ? 'cursor-pointer' : ''
            }`}
            onClick={() => changeVideo(1)}
          >
            {videoSrc == 1 && (
              <>
                <div className=" absolute w-full h-full bg-black/80 rounded-lg border-[2px] border-primary"></div>
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                  <Icon icon={eye} fontSize={34} />
                </div>
              </>
            )}
            <img src="/video1.jpg" className=" rounded-md" />
          </div>

          <div
            className={` rouneded-lg w-3/4 md:w-1/4 relative rounded-md ${
              videoSrc !== 2 ? 'cursor-pointer' : ''
            }`}
            onClick={() => changeVideo(2)}
          >
            {videoSrc == 2 && (
              <>
                <div className=" absolute w-full h-full bg-black/80 rounded-lg border-[2px] border-primary"></div>
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                  <Icon icon={eye} fontSize={34} />
                </div>
              </>
            )}
            <img src="/video2.jpg" className={` rounded-md `} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
