import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies);

  return (
    <div className='m-7 relative p-4'>
        <h1 className='bold text-white text-3xl'>
            {title}
        </h1>
        <div className='mt-6 mb-6 gap-1 overflow-x-scroll flex'>
            {movies && movies.map((movie, index) => {
                return <MovieCard key={movie.id} posterPath={movies?.[index]?.poster_path}/>
            })}
        </div>
    </div>
  )
}

export default MovieList