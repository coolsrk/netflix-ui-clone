import React from "react";
import Header from "./Header";
import { useAddMovies } from "../hooks/useAddMovies";
import MainContainer from "./home/MainContainer";
import SecondaryContainer from "./home/SecondaryContainer";
import * as constants from "../constants/constants";
import { addNowPlaying, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../redux/slices/movieSlice";

const Browse = () => {
  // This is to fetch now playing movies and update the store.
  useAddMovies({url:constants.NOW_PLAYING_URL, reducerFunction: addNowPlaying});
  useAddMovies({url: constants.POPULAR_URL, reducerFunction: addPopularMovies});
  useAddMovies({url:constants.TOP_RATED_URL, reducerFunction: addTopRatedMovies});
  useAddMovies({url: constants.UPCOMING_URL, reducerFunction: addUpcomingMovies});

  
  /**
   *  Design :-
   * - Header    
   * - Main Container
            - Movie trailer in background
            - Left middle, movie logo
            - Below that movie description.
        - Secondary Container
            - Movie category * n
                - Card * n
                - On hover should show options 
   */
  return (
   <div className="bg-black">
     <Header />
     <MainContainer/>
     <SecondaryContainer/>
   </div> 
);
};

export default Browse;
