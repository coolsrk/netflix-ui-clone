import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./home/MainContainer";

const Browse = () => {
  // This is to fetch now playing movies and update the store.
  useNowPlayingMovies();

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
   <>
     <Header />
     <MainContainer/>
   </> 
);
};

export default Browse;
