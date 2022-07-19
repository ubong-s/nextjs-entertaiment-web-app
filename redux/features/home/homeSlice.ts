// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';
// import { Movie, MoviesState } from '../../../types/index';

// export const fetchMovies = createAsyncThunk(
//    'movies/fetchMovies',
//    async (): Promise<any> => {
//       const response1 = fetch(
//          `https://api.themoviedb.org/3/modvie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
//       ).then((res) => res.json());

//       const response2 = fetch(
//          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
//       ).then((res) => res.json());

//       const [trending_movies, recommended_movies] = await Promise.all([
//          response1,
//          response2,
//       ]);

//       return { trending_movies, recommended_movies };
//    }
// );

// // Define the initial state using that type
// const initialState: MoviesState = {
//    loading: false,
//    trending_movies: [],
//    recommended_movies: [],
//    trending_error: '',
//    recommended_error: '',
// };

// export const homeSlice = createSlice({
//    name: 'home',
//    // `createSlice` will infer the state type from the `initialState` argument
//    initialState,
//    reducers: {},
//    extraReducers(builder) {
//       builder
//          .addCase(fetchMovies.pending, (state) => {
//             state.loading = true;
//          })
//          .addCase(fetchMovies.fulfilled, (state, action) => {
//             state.loading = false;
//             const { trending_movies, recommended_movies } = action.payload;

//             if (trending_movies.results) {
//                state.trending_movies = trending_movies.results;
//             } else {
//                state.trending_error = 'Error fetching trending movies';
//             }

//             if (recommended_movies.results) {
//                state.recommended_movies = recommended_movies.results;
//             } else {
//                state.recommended_error = 'Error fetching recommended movies';
//             }
//          })
//          .addCase(fetchMovies.rejected, (state) => {
//             state.loading = false;
//             // state.error = `Error fetching movies`;
//          });
//    },
// });

// export default homeSlice.reducer;
