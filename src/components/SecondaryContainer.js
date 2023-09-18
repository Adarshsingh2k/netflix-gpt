import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieStore = useSelector((store) => store.movies);
  // console.log(movieStore.topMovies);
  const { nowPlayingMovies, popularMovies, topMovies } = movieStore;
  return (
    <div className=" bg-black text-white p-5">
      <div className="-mt-36 relative z-20 text-2xl">
        <h1>Now Playing Movies </h1>
        <MovieList movies={nowPlayingMovies} />

        <h1>Popular Movies</h1>
        <MovieList movies={popularMovies} />

        <h1>Top Movies</h1>
        <MovieList movies={topMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
