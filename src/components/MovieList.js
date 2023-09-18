import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div>
      <h1 className="text-white text-lg font-semibold">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} imgPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
