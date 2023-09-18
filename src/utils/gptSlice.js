import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
    gptMovieRecomendation: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieRes, movieNames } = action.payload;
      //   state.movieNames = movieNames;
      state.gptMovieRecomendation = movieRes;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
