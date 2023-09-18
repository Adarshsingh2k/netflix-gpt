import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieStore = useSelector((store) => store.movies);
  // console.log(movieStore.topMovies);
  const { nowPlayingMovies, popularMovies, topMovies } = movieStore;
  return (
    <div className=" bg-black text-white p-5">
      <div className="-mt-36 relative z-20 text-2xl">
        <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />

        <MovieList title={"Popular Movies"} movies={popularMovies} />

        <MovieList title={"Top Movies"} movies={topMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
