import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <img className="w-screen h-screen absolute" src={BG_IMG} alt="bg-img" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
