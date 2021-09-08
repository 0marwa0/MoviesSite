// store
import { configureStore } from '@reduxjs/toolkit';
import PopularovieReducer from './reducers/PopularReducer';
import TopRatedReducer from './reducers/TopRatedReducer';
import UpComingReducer from './reducers/UpComingReducer';
import GenreReducer from './reducers/GenreReducer';
import PopularPeopleReducer from './reducers/PopularPeopleReducer';
import MovieReducer from './reducers/MovieReducer';
import PersonReducer from './reducers/PersonReducer';
import SimilarMoviesReducer from './reducers/SimilarMoviesReducer';
import VideoReducer from './reducers/VideoReducer';
import MovieCast from './reducers/MovieCast';
import UserReducer from './reducers/UserReducer';
import BookMardReducer from './reducers/BookMarkReducer';

const store = configureStore({
  reducer: {
    popularMovies: PopularovieReducer,
    topRatedMovies: TopRatedReducer,
    upComingMovies: UpComingReducer,
    moviesGenre: GenreReducer,
    popularPeople: PopularPeopleReducer,
    person: PersonReducer,
    movie: MovieReducer,
    simialrMovies: SimilarMoviesReducer,
    video: VideoReducer,
    movieCast: MovieCast,
    user: UserReducer,
    bookMark: BookMardReducer,
  },
});
export default store;
