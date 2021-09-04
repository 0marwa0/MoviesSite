// store
import { configureStore } from '@reduxjs/toolkit';
import PopularovieReducer from './reducers/PopularReducer';
import TopRatedReducer from './reducers/TopRatedReducer';
import UpComingReducer from './reducers/UpComingReducer';
import GenreReducer from './reducers/GenreReducer';

const store = configureStore({
  reducer: {
    popularMovies: PopularovieReducer,
    topRatedMovies: TopRatedReducer,
    upComingMovies: UpComingReducer,
    moviesGenre: GenreReducer,
  },
});
export default store;
