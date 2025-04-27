import { useEffect, useState } from "react";
import * as constants from "../constants/constants";

const useFetchBackGroundVideo = (movieId) => {
    const [trailerKey, setTrailerKey] = useState("");
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const fetchMovieTrailer = async () => {
        const data = await fetch(
            constants.TRAILER_URL(movieId),
            constants.API_OPTIONS
        );

        const json = await data.json();

        // Find the data with type "Trailer"
        const trailerData = json.results.find(res => res.type === "Trailer");
        if (trailerData) {
            setTrailerKey(trailerData.key);
        } else {
            console.error("No trailer found for this movie.");
        }
    };

    useEffect(() => {
        fetchMovieTrailer();
    }, [movieId]);

    return { trailerKey, isVideoLoaded, setIsVideoLoaded };
};

export default useFetchBackGroundVideo;