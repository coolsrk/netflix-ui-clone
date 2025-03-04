import React, { useEffect } from "react";
import Header from "./Header";
import * as constants from "../constants/constants";

const Browse = () => {
  const fetchData = async () => {
    const response = await fetch(
      constants.NOW_PLAYING_URL,
      constants.API_OPTIONS
    );

    const data = await response.json();
    console.log(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Header />;
};

export default Browse;
