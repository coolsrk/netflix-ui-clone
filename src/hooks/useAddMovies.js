import * as constants from "../constants/constants";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";

export const useAddMovies = ({url, reducerFunction}) => {
  console.log("Fetching from URL:", url); // 👈
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const response = await fetch(
      url,
      constants.API_OPTIONS
    );
    const data = await response.json();
    dispatch(reducerFunction(data.results));
  }, [url, reducerFunction, dispatch]);

  useEffect(() => {
    fetchData();
  }, [url, reducerFunction, fetchData]); // 👈 Add url and reducerFunction to the dependency array
};
