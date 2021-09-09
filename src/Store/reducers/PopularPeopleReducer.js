import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { api, key, popularPeople, lang, page } from './config';

const popularPeopleUrl = `${api}${popularPeople}?api_key=${key}&language=${lang}&page=${page}`;
export const fetchPopularPeople = createAsyncThunk(
  'movies/fetchPopularPeople',
  async () => {
    const result = await axios.get(popularPeopleUrl).then((res) => res.data);
    return result;
  }
);
export const PopularPeopleSlic = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {
    GetPopularPeople(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers: {
    [fetchPopularPeople.pending](state) {
      state.status = 'loading';
    },
    [fetchPopularPeople.fulfilled](state, action) {
      state.data = action.payload;
      state.status = 'idle';
    },
  },
});
export const { GetPopularPeople } = PopularPeopleSlic;
export default PopularPeopleSlic.reducer;
