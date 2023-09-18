import React from "react";
import { POSTER_IMG } from "../utils/constant";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="w-[200px] p-2">
      <img alt="movie_poster" src={POSTER_IMG + imgPath} />
    </div>
  );
};

export default MovieCard;
