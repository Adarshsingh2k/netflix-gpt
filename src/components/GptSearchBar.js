import React from "react";

const GptSearchBar = () => {
  return (
    <div className="relative pt-[11%]">
      <form className="flex justify-evenly w-6/12 p-4 rounded-md m-auto bg-black/80 backdrop-blur-[1px]">
        <input
          type="text"
          className=" border w-8/12 p-2"
          placeholder="What would you like to watch today?? "
        />
        <button className="bg-red-700 py-2 px-5 rounded text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
