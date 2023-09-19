import React, { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const srchText = useRef(null);
  //   const handleGptSearch = useGptSearch(srchText?.current?.value);

  const dispatch = useDispatch();
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(srchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the Query" +
      srchText.current.value +
      " give me name of 5 movies which are comma seperated and dont make it numbered output like the example result given ahead. Example Result: Gadar, Raaz, Don, Tu jhooti Mai Makkar, Golmaal. Dont give like this example:  1.Dilwale, 2.Chennai Express, 3.Dil To Pagal Hai, 4.Kal Ho Naa Ho, 5.Kabhi Khushi Kabhie Gham ";

    const gptSuggestion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // const gptSuggestion = [
    //   {
    //     finish_reason: "stop",
    //     index: 0,
    //     message: {
    //       content:
    //         "Inception, The Dark Knight, Fight Club, Pulp Fiction, The Shawshank Redemption, Forrest Gump, The Matrix, The Godfather, Gladiator, The Avengers",
    //       role: "assistant",
    //     },
    //   },
    // ];
    console.log(gptSuggestion.choices);

    const gptMovies = gptSuggestion.choices?.[0]?.message?.content?.split(",");
    // const gptMovies = gptSuggestion?.[0]?.message?.content?.split(",");

    if (gptMovies?.length == 0) alert("GPT engine not working");

    const movieData = gptMovies.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(movieData);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieRes: tmdbResults })
    );
  };

  return (
    <div className="relative pt-[30%] md:pt-[11%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-evenly w-11/12 md:w-6/12 p-4 rounded-md m-auto bg-black/80 backdrop-blur-[1px]"
      >
        <input
          ref={srchText}
          type="text"
          className=" border w-8/12 p-2"
          placeholder="What would you like to watch today?? "
        />
        <button
          className="bg-red-700 py-2 px-5 rounded text-white"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

/**
 * 
 {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 791549,
      "original_language": "ne",
      "original_title": "Anjali",
      "overview": "This documentary explores the upbringing of transgender model Anjali, in a small village in the hilly district of Nuwakot, a district neighboring capital city Kathmandu, the discrimination she faced, the struggle she did after coming to Kathmandu and also about her dreams and hopes about the future.",
      "popularity": 0.6,
      "poster_path": "/tF7EEJSOys9e1BWBi4xwSghlJ6K.jpg",
      "release_date": "2016-05-25",
      "title": "Anjali",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 1095337,
      "original_language": "or",
      "original_title": "Anjali",
      "overview": "Plot Unavailable.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "",
      "title": "Anjali",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/6IcgPtqOBQXp158CZxr3iGm9G2b.jpg",
      "genre_ids": [
        18,
        10751
      ],
      "id": 223365,
      "original_language": "ta",
      "original_title": "அஞ்சலி",
      "overview": "After a few years, Chitra learns that her child, who was believed to be dead, is alive but is suffering from a mental illness. However, her family faces many challenges while looking after her child.",
      "popularity": 2.863,
      "poster_path": "/be5s9hrsQfwnnlG5jkAN2vRF0Uq.jpg",
      "release_date": "1990-07-12",
      "title": "Anjali",
      "video": false,
      "vote_average": 6.938,
      "vote_count": 16
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18,
        10749
      ],
      "id": 810904,
      "original_language": "si",
      "original_title": "Anjalika - අංජලීකා",
      "overview": "A young man named Thivanka returns home to Sri Lanka from England to fall in love with a village girl named Anjalika. This proves to be problematic for Thivanka, as Anjalika is the daughter of a plantation caretaker employed by Thivanka's father. Thivanka's childhood friend, Kavya is in love with Thivanka and wants to marry him. The inevitable clash of rich and poor ends in the kidnapping and subsequent death of Anjalika.",
      "popularity": 0.6,
      "poster_path": "/5VbFa3tQynWkAJGM0Ugz2rmSdCN.jpg",
      "release_date": "2006-06-28",
      "title": "Anjalika - අංජලීකා",
      "video": false,
      "vote_average": 8,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 1087355,
      "original_language": "or",
      "original_title": "Oye Anjali",
      "overview": "to be added later",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "",
      "title": "Oye Anjali",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        10749
      ],
      "id": 81149,
      "original_language": "en",
      "original_title": "Anjali I Love You",
      "overview": "Anjali I Love You",
      "popularity": 0.961,
      "poster_path": "/6xJsFZtaEI4tvmmddXwLzB0Azsl.jpg",
      "release_date": "2004-12-09",
      "title": "Anjali I Love You",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/6TKLf5HdE8bCkzHvhmL5xctim6g.jpg",
      "genre_ids": [
        28,
        53,
        18,
        80
      ],
      "id": 415193,
      "original_language": "ta",
      "original_title": "இமைக்கா நொடிகள்",
      "overview": "A CBI officer goes in search of a ruthless serial killer. Things get worse when the murderer targets the former and her family",
      "popularity": 5.315,
      "poster_path": "/mHkeMrAqW4TnRkeI1Xl8qwuGyPg.jpg",
      "release_date": "2018-08-30",
      "title": "Imaikkaa Nodigal",
      "video": false,
      "vote_average": 7.188,
      "vote_count": 56
    }
  ],
  "total_pages": 1,
  "total_results": 7
}
 * 
 */
