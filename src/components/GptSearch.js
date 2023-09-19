import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className=" bg-black  md:pt-0">
      <img
        className="w-screen h-screen object-cover absolute "
        src={BG_IMG}
        alt="bg-img"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
