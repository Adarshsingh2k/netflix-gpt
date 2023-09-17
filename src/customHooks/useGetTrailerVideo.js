import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useGetTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const fetchVideoTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    const filterData = json.results.filter(
      (video) =>
        video.type === "Trailer" &&
        video.official === true &&
        video.name === "Official Trailer"
    );
    // console.log(filterData);
    dispatch(addMovieTrailer(filterData[0]));
  };

  useEffect(() => {
    fetchVideoTrailer(movieId);
  }, []);
};

export default useGetTrailerVideo;
