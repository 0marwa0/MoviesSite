import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, movie, lang } from './config';

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async (id) => {
  const result = await axios
    .get(`${api}${movie}/${id}?api_key=${key}&language=${lang}`)
    .then((res) => res.data);
  return result;
});
export const MovieSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    GetMovie(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    [fetchMovie.pending](state) {
      state.status = 'loading';
    },
    [fetchMovie.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetMovie } = MovieSlic;
export default MovieSlic.reducer;
