import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userEmail: null,
  photoURL: null,
};

const UserReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.photoURL = action.payload.photoURL;
    },
    setUserLogOutState(state) {
      state.userName = null;
      state.userEmail = null;
      state.photoURL = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = UserReducer.actions;
export default UserReducer.reducer;
