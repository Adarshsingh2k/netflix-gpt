import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useGetTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailer = useSelector((store) => store.movies.movieTrailer);

  const fetchVideoTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.official === true
    );
    // console.log(filterData);
    dispatch(addMovieTrailer(filterData[0]));
  };

  useEffect(() => {
    !trailer && fetchVideoTrailer(movieId);
  }, [movieId]);
};

export default useGetTrailerVideo;
