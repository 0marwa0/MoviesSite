import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, person, lang } from './config';

export const fetchPerson = createAsyncThunk(
  'movies/fetchPerson',
  async (id) => {
    const result = await axios
      .get(`${api}${person}/${id}?api_key=${key}&language=${lang}`)
      .then((res) => res.data);
    return result;
  }
);
export const PersonSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    GetPerson(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    [fetchPerson.pending](state) {
      state.status = 'loading';
    },
    [fetchPerson.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetPerson } = PersonSlic;
export default PersonSlic.reducer;
