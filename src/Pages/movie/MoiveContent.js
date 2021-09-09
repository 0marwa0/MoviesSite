import React from 'react';
import { imageUrl } from '../../Store/reducers/config';
import MovieCast from './movieCast';
import './index.css';

const Index = ({ MovieInfo }) => (
  <div className="movieOverview">
    <img
      src={`${imageUrl}${MovieInfo.poster_path}`}
      className="moviePoster"
      alt="movie"
    />
    <div>
      <div className="TitleText">{MovieInfo.title}</div>
      <div> {MovieInfo.overview}</div>
      <div className="TitleText">Movie Cast</div>
      <MovieCast />
    </div>
  </div>
);

export default Index;
