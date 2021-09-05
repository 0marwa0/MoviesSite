import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, genre, lang } from './config';

const toObj = (data) =>
  data.reduce((acc, item) => {
    const { id, name } = item;
    return { ...acc, [id]: name };
  }, {});
const genreMoviesUrl = `${api}${genre}?api_key=${key}&language=${lang}`;
export const fetchGenre = createAsyncThunk('movies/fetchGenre', async () => {
  const result = await axios.get(genreMoviesUrl).then((res) => res.data);
  return result;
});
export const MovieSlic = createSlice({
  name: 'movie',
  initialState: {
    data: {},
    status: 'idle',
  },
  reducers: {
    GetMovieGenre(state, action) {
      state.data = toObj(action.payload.genres);
    },
  },
  extraReducers: {
    [fetchGenre.pending](state) {
      state.status = 'loading';
    },
    [fetchGenre.fulfilled](state, action) {
      state.data = toObj(action.payload.genres);
      state.status = 'idle';
    },
  },
});
export const { GetMovieGenre } = MovieSlic;
export default MovieSlic.reducer;
