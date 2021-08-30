// store
import { configureStore } from '@reduxjs/toolkit';
import PopularovieReducer from './reducers/PopularReducer';
import TopRatedReducer from './reducers/TopRatedReducer';
import UpComingReducer from './reducers/UpComingReducer';

const store = configureStore({
  reducer: {
    popularMovies: PopularovieReducer,
    topRatedMovies: TopRatedReducer,
    upComingMovies: UpComingReducer,
  },
});
export default store;
