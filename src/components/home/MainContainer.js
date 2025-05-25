import React from "react";
import { useSelector } from "react-redux";
import VideoMetadata from "./background video/VideoMetadata";
import VideoBackGround from "./background video/VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlaying);
  if (movies === null) return;

  const index = Math.floor(Math.random() * movies.length);

  const movieToPlay = movies[index];
  console.log(movieToPlay);

  const { original_title, overview } = movieToPlay;

  return (
    <div className="w-full h-[500px]">
      <VideoMetadata title={original_title} overview={overview} />
      <VideoBackGround movieId={movieToPlay.id}/>
    </div>
  );
};

export default MainContainer;
