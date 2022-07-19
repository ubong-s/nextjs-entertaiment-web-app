import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import homeReducer from './features/home/homeSlice';
import moviesReducer from './features/movies/moviesSlice';
import tvReducer from './features/tv/tvSlice';

// ...

export const store = configureStore({
   reducer: {
      home: homeReducer,
      movies: moviesReducer,
      tv: tvReducer,
   },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
