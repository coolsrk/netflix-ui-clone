import * as constants from "../constants/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../redux/slices/movieSlice";
import { useEffect } from "react";

export const useAddMovies = ({url, reducerFunction}) => {
  console.log("Fetching from URL:", url); // 👈
  const dispatch = useDispatch();

  const fetchData = async () => {
    // Get Now Playing movies and update the store.
    const response = await fetch(
      url,
      constants.API_OPTIONS
    );

    const data = await response.json();
    dispatch(reducerFunction(data.results));
  };

  useEffect(() => {
    fetchData();
  }, [url, reducerFunction]); // 👈 Add url and reducerFunction to the dependency array
};
