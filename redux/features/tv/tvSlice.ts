import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TVState, SingleMedia } from '../../../types';

export const fetchTVShows = createAsyncThunk(
   'tv/fetchTVShows',
   async (search?: string): Promise<any> => {
      let result;

      if (search) {
         result = await fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1&query=${search}`
         );
      } else {
         result = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
         );
      }

      const data = await result.json();

      return data;
   }
);

// Define the initial state using that type
const initialState: TVState = {
   loading: false,
   shows: [],
   error: '',
};

export const tvSlice = createSlice({
   name: 'tv',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchTVShows.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchTVShows.fulfilled, (state, action) => {
            state.loading = false;

            if (action.payload.results) {
               state.shows = action.payload.results.map((item: SingleMedia) => {
                  return { ...item, media_type: 'tv' };
               });
            } else {
               state.error = 'Error fetching tv shows';
            }
         })
         .addCase(fetchTVShows.rejected, (state) => {
            state.loading = false;
            state.error = 'Error fetching tv shows';
         });
   },
});

export default tvSlice.reducer;
