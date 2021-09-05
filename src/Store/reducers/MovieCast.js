import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, credits, lang } from './config';

export const fetchMovieCast = createAsyncThunk(
  'movies/fetchCast',
  async (id) => {
    const movieCastUrl = `${api}movie/${id}/${credits}?api_key=${key}&language=${lang}`;
    const result = await axios.get(movieCastUrl).then((res) => res.data);

    return result;
  }
);
export const MovieCastSlic = createSlice({
  name: 'movie',
  initialState: {
    data: {},
    status: 'idle',
  },
  reducers: {
    GetMovieCast(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchMovieCast.pending](state) {
      state.status = 'loading';
    },
    [fetchMovieCast.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetMovieCast } = MovieCastSlic;
export default MovieCastSlic.reducer;
