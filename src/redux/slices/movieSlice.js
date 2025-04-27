import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        }
    }
});

export default moviesSlice.reducer;
export const { addNowPlaying } = moviesSlice.actions;