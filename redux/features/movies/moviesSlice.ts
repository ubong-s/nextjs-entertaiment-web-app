import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { MoviesState, SingleMedia } from '../../../types';

export const fetchMovies = createAsyncThunk(
   'movies/fetchMovies',
   async (search?: string): Promise<any> => {
      let result;

      if (search) {
         result = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1&query=${search}`
         );
      } else {
         result = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
         );
      }

      const data = await result.json();

      return data;
   }
);

// Define the initial state using that type
const initialState: MoviesState = {
   loading: false,
   movies: [],
   error: '',
};

export const moviesSlice = createSlice({
   name: 'movies',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;

            if (action.payload.results) {
               state.movies = action.payload.results.map(
                  (item: SingleMedia) => {
                     return { ...item, media_type: 'Movie' };
                  }
               );
            } else {
               state.error = 'Error fetching  movies';
            }
         })
         .addCase(fetchMovies.rejected, (state) => {
            state.loading = false;
            state.error = `Error fetching movies`;
         });
   },
});

export default moviesSlice.reducer;
