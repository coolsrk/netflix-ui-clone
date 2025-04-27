import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
    }
});

export default moviesSlice.reducer;
export const { addNowPlaying, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;