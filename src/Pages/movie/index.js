import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../Store/reducers/MovieReducer';
import { fetchSimialrMovies } from '../../Store/reducers/SimilarMoviesReducer';
import MovieContent from './MoiveContent';
import MovieSimialr from './similarMovie';

function Movie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const MovieInfo = useSelector((state) => state.movie.data);
  const SimialrMovies = useSelector((state) => state.simialrMovies);
  useEffect(() => {
    dispatch(fetchSimialrMovies(id));
    dispatch(fetchMovie(id));
  }, [dispatch]);
  return (
    <div className="movieHolder">
      <MovieContent MovieInfo={MovieInfo} />
      <div className="TitleText">Simialr Movies</div>
      <MovieSimialr SimialrMovies={SimialrMovies} />
    </div>
  );
}

export default Movie;
