import { createSlice } from '@reduxjs/toolkit';

export const bookSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
  },
  reducers: {
    bookAdded(state, action) {
      state.data.push(action.payload);
    },
    bookRemoved(state, action) {
      const index = state.data.findIndex(
        (movie) => movie.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});
export const { bookAdded, bookRemoved } = bookSlic.actions;
export default bookSlic.reducer;
