import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state?.movies);
  console.log(movies);

  const {nowPlaying, popularMovies, topRatedMovies, upcomingMovies} = movies;

  return (
    <div className='text-white z-30'>

      <MovieList title={"Now Playing"} movies={nowPlaying}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={popularMovies}/>     
      {
        /**
         * *  Design :-
         *  * - Secondary Container
         * *      Movie Lists
         *        - Popular Movies
         *          - MovieCard * n
         *        - Top Rated Movies
         *        - Upcoming Movies 
         *        - Now Playing Movies
         */
      }
      
    </div>
  )
}

export default SecondaryContainer