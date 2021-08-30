import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, key, upcoming, lang, page } from './config';

const upComingMoviesUrl = `${api}${upcoming}api_key=${key}&language=${lang}&page=${page}`;

export const fetchUpComingMovies = createAsyncThunk('movies/fetchMovies', () =>
  fetch(upComingMoviesUrl)
    .then((res) => res.json())
    .then((res) => res)
);

export const UpComingSlic = createSlice({
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
    [fetchUpComingMovies.pending](state) {
      state.status = 'loading';
    },
    [fetchUpComingMovies.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetPopularMovie } = UpComingSlic;
export default UpComingSlic.reducer;
