import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, upcoming, lang, page } from './config';

const upComingMoviesUrl = `${api}${upcoming}?api_key=${key}&language=${lang}&page=${page}`;

export const fetchUpComingMovies = createAsyncThunk(
  'movies/fetchUpComing',
  async () => {
    const result = await axios.get(upComingMoviesUrl).then((res) => res.data);
    return result;
  }
);

export const UpComingSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    GetUpComingMovie(state, action) {
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
export const { GetUpComingMovie } = UpComingSlic;
export default UpComingSlic.reducer;
