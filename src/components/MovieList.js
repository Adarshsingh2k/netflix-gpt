import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} imgPath={movie.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
