const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" aspect-video h-screen absolute text-white bg-gradient-to-r from-black rounded w-screen ">
      <div className="w-6/12 px-[11%] pt-[15%]">
        <h1 className="font-extrabold text-4xl">{title}</h1>
        <p className=" mt-5  italic">{overview}</p>

        <div>
          <button className="p-2 px-4 mt-4  bg-white text-black rounded">
            Play
          </button>
          <button className="p-2 px-4 mt-4 mx-2 opacity-70  bg-white text-black rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
