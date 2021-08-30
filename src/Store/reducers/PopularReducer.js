import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, key, topRated, lang, page } from './config';

const popularMoviesUrl = `${api}${topRated}?api_key=${key}&language=${lang}&page=${page}`;
export const fetchPopularMovies = createAsyncThunk('movies/fetchMovies', () =>
  fetch(popularMoviesUrl)
    .then((res) => res.json())
    .then((res) => res)
);
export const MovieSlic = createSlice({
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
export const { GetPopularMovie } = MovieSlic;
export default MovieSlic.reducer;
