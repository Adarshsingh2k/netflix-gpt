import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  if (!movies || !popularMovies) return;

  const topRated = popularMovies?.filter((data) => {
    return data.vote_average >= 8;
  });
  // console.log(topRated);
  //   const topRatedMovie = topRated[0];
  const randomIndex = Math.floor(Math.random() * topRated.length);
  const topRatedMovie = topRated[randomIndex];
  const { id, title, overview } = topRatedMovie;

  return (
    <div className="w-full overflow-hidden">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
