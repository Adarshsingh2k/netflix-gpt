import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className=" bg-black">
      <img
        className="w-screen h-screen object-cover absolute top-0 left-0"
        src={BG_IMG}
        alt="bg-img"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
