import * as constants from "../constants/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../redux/slices/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    // Get Now Playing movies and update the store.
    const response = await fetch(
      constants.NOW_PLAYING_URL,
      constants.API_OPTIONS
    );

    const data = await response.json();
    dispatch(addNowPlaying(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};
