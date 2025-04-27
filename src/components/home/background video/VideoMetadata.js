import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoMetadata = ({title, overview}) => {
  return (
    <div className='absolute text-white top-72 ml-24 w-1/4 bg-transparent z-10'>
      <h1 className='text-4xl mb-5 font-semibold'>{title}</h1>
      <p className='font-semibold'>{overview}</p>

      <div className='movie-buttons mt-5 flex'>
        <button className='bg-white text-black w-28 h-10 m-3 flex items-center justify-center gap-2 rounded-md'>
          <FontAwesomeIcon icon="play" style={{ color: 'black'}} size="2x" />
          <span>Play</span>
        </button>
        <button className='bg-gray-400 w-32 h-10 m-3 flex items-center justify-center gap-2 rounded-md'>
          <FontAwesomeIcon icon="fa-info" style={{ color: 'white'}} size="1rem" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  )
}

export default VideoMetadata