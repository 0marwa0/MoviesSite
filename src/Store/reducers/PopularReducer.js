import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, topRated, lang, page } from './config';

const popularMoviesUrl = `${api}${topRated}?api_key=${key}&language=${lang}&page=${page}`;
export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async () => {
    const result = await axios.get(popularMoviesUrl).then((res) => res.data);
    return result;
  }
);
export const PopularMovieSlic = createSlice({
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
    [fetchPopularMovies.pending](state) {
      state.status = 'loading';
    },
    [fetchPopularMovies.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetPopularMovie } = PopularMovieSlic;
export default PopularMovieSlic.reducer;
