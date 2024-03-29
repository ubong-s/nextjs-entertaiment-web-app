import { createSlice } from '@reduxjs/toolkit';
import { UserState, SingleMedia } from '../../../types';

const getLocalStorage = () => {
   if (typeof window !== 'undefined') {
      const bookmarksJson = localStorage.getItem('bookmarks');
      let bookmarks = bookmarksJson !== null && JSON.parse(bookmarksJson);

      return bookmarks;
   }
};

// Define the initial state using that type
const initialState: UserState = {
   user: 'Ubongy',
   bookmarks: getLocalStorage() || [],
   userModal: false,
};

export const userSlice = createSlice({
   name: 'user',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {
      updateBookmarks: (state, action) => {
         const tempMovie = state.bookmarks.find(
            (item) => item.id === action.payload.id
         );

         if (tempMovie) {
            state.bookmarks = state.bookmarks.filter(
               (item) => item.id !== action.payload.id
            );
         } else {
            state.bookmarks = [...state.bookmarks, action.payload];
         }
      },
      toggleUserModal: (state) => {
         state.userModal = !state.userModal;
      },
      closeUserModal: (state) => {
         state.userModal = false;
      },
   },
});

export const { updateBookmarks, toggleUserModal, closeUserModal } =
   userSlice.actions;

export default userSlice.reducer;
