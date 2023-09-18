import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieRecomendation, movieNames } = useSelector(
    (store) => store.gpt
  );
  if (!movieNames) return null;

  return (
    <div className="relative p-4 m-4 bg-black/90 backdrop-blur-sm text-white h-full">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieRecomendation[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
