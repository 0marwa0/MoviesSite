import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, simialr, lang, page } from './config';

export const fetchSimialrMovies = createAsyncThunk(
  'movies/fetchSimialrMovies',
  async (id) => {
    const result = await axios
      .get(
        `${api}movie/${id}/${simialr}?api_key=${key}&language=${lang}&page=${page}`
      )
      .then((res) => res.data);
    return result;
  }
);
export const SimialrMovieSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    GetPopularMovie(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    [fetchSimialrMovies.pending](state) {
      state.status = 'loading';
    },
    [fetchSimialrMovies.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetPopularMovie } = SimialrMovieSlic;
export default SimialrMovieSlic.reducer;
