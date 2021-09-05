// store
import { configureStore } from '@reduxjs/toolkit';
import PopularovieReducer from './reducers/PopularReducer';
import TopRatedReducer from './reducers/TopRatedReducer';
import UpComingReducer from './reducers/UpComingReducer';
import GenreReducer from './reducers/GenreReducer';
import UserReducer from './reducers/UserReducer';

const store = configureStore({
  reducer: {
    popularMovies: PopularovieReducer,
    topRatedMovies: TopRatedReducer,
    upComingMovies: UpComingReducer,
    moviesGenre: GenreReducer,
    user: UserReducer,
  },
});
export default store;
