export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },

};

export const TRAILER_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
