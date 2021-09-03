import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchUpComingMovies } from '../Store/reducers/UpComingReducer';
import { fetchGenre } from '../Store/reducers/GenreReducer';
import 'react-multi-carousel/lib/styles.css';
import { imageUrl } from '../Store/reducers/config';
import './index.css';
import { sideBarSlider } from '../shared/SilderConfig';

function Index() {
  /* eslint-disable react/jsx-props-no-spreading */
  const dispatch = useDispatch();
  const upComingMovies = useSelector((state) => state.upComingMovies.data);
  const MoviesGenre = useSelector((state) => state.moviesGenre.data);

  useEffect(() => {
    dispatch(fetchUpComingMovies());
    dispatch(fetchGenre());
  }, [dispatch]);

  const data = upComingMovies.results ? upComingMovies.results : [];

  return (
    <Carousel responsive={sideBarSlider}>
      {data.map((item) => (
        <div className="upComingCard">
          <div className="img">
            <img src={`${imageUrl}${item.poster_path}`} alt="top rated" />
          </div>
          <div className="cardText">
            <div className="cardTitle">{item.title}</div>
            {item.genre_ids.map((i) => (
              <span>{MoviesGenre[i]}</span>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default Index;
