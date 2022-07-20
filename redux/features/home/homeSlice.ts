import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HomeState } from '../../../types/';

export const fetchMedia = createAsyncThunk(
   'home/fetchMedia',
   async (): Promise<any> => {
      const result = await fetch(
         `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
      );

      const data = await result.json();
      return data;
   }
);

export const fetchSearch = createAsyncThunk(
   'home/fetchSearch',
   async (search: string): Promise<any> => {
      const result = await fetch(
         `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      );

      const data = await result.json();
      return data;
   }
);

// Define the initial state using that type
const initialState: HomeState = {
   loading: false,
   trending: [],
   recommended: [],
   searchResults: [],
   trending_error: '',
   recommended_error: '',
   searchResults_error: '',
};

export const homeSlice = createSlice({
   name: 'home',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchMedia.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchMedia.fulfilled, (state, action) => {
            state.loading = false;

            if (action.payload.results) {
               state.trending = action.payload.results.slice(0, 5);
               state.recommended = action.payload.results.slice(-15);
            } else {
               state.trending_error = 'Error fetching trending movies';
               state.recommended_error = 'Error fetching recommended movies';
            }
         })
         .addCase(fetchMedia.rejected, (state) => {
            state.loading = false;
            state.trending_error = 'Error fetching trending movies';
            state.recommended_error = 'Error fetching recommended movies';
         });
      builder
         .addCase(fetchSearch.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchSearch.fulfilled, (state, action) => {
            state.loading = false;

            if (action.payload.results) {
               state.searchResults = action.payload.results;
            } else {
               state.searchResults_error = 'Error fetching movies';
            }
         })
         .addCase(fetchSearch.rejected, (state) => {
            state.loading = false;
            state.searchResults_error = 'Error fetching movies';
         });
   },
});

export default homeSlice.reducer;
