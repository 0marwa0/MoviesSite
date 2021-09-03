import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchTopRatedMovies } from '../Store/reducers/TopRatedReducer';
import { fetchGenre } from '../Store/reducers/GenreReducer';
import 'react-multi-carousel/lib/styles.css';
import { imageUrl } from '../Store/reducers/config';
import './index.css';
import { sideBarSlider } from '../shared/SilderConfig';

function Index() {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.topRatedMovies.data);
  const MoviesGenre = useSelector((state) => state.moviesGenre.data);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
    dispatch(fetchGenre());
  }, [dispatch]);

  const data = topRatedMovies.results ? topRatedMovies.results : [];

  return (
    <Carousel responsive={sideBarSlider}>
      {data.map((item) => (
        <div className="TopRateCard">
          <img src={`${imageUrl}${item.poster_path}`} alt="top rated" />
          <div className="cardText">
            <div className="cardTitle">{item.title}</div>
            {item.genre_ids.map((i) => (
              <span>
                {MoviesGenre[i]}
                {'  '}{' '}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default Index;
