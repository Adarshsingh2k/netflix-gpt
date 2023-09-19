const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" aspect-video md:h-screen absolute text-white bg-gradient-to-r from-black rounded w-screen ">
      <div className="w-full pt-[79%] md:w-6/12 px-[11%] md:pt-[15%]">
        <h1 className="font-extrabold text-xl md:text-4xl">{title}</h1>
        <p className="hidden md:inline-block mt-5 text-xs md:text-base italic">
          {overview}
        </p>

        <div>
          <button className="hidden md:inline-block p-2 px-4 mt-4  bg-white text-black rounded">
            Play
          </button>
          <button className="hidden md:inline-block p-2 px-4 mt-4 mx-2 opacity-70  bg-white text-black rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
