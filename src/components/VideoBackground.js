import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import useGetTrailerVideo from "../customHooks/useGetTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerData = useSelector((store) => store.movies?.movieTrailer);
  console.log(trailerData);

  useGetTrailerVideo(movieId);

  return (
    <div className="w-screen h-[60vh] md:h-screen">
      <iframe
        className="w-screen  aspect-video h-full md:h-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailerData?.key +
          "?&autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

/*
"key": "cqGjhVJWtEg",
        "site": "YouTube",
        "size": 1080,
        "type": "Trailer",
        "official": true,  

*/
