import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, key, topRated, lang, page } from './config';

const topRatedMoviesUrl = `${api}${topRated}?api_key=${key}&language=${lang}&page=${page}`;

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchMovies', () =>
  fetch(topRatedMoviesUrl)
    .then((res) => res.json())
    .then((res) => res)
);

export const TopRatedSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    GetTopRatedMovie(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTopRatedMovies.pending](state) {
      state.status = 'loading';
    },
    [fetchTopRatedMovies.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetTopRatedMovie } = TopRatedSlic;
export default TopRatedSlic.reducer;
