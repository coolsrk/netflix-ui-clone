import React from 'react';
import * as constants from '../../constants/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 flex-shrink-0'>
        <img src={constants.IMAGE_CDN + posterPath} alt="movie poster" />
    </div>
  )
}

export default MovieCard