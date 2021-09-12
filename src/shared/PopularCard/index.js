import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { fetchGenre } from '../../Store/reducers/GenreReducer';
import { imageUrl } from '../../Store/reducers/config';
import { fetchPopularMovies } from '../../Store/reducers/PopularReducer';
import { fallSilder } from '../SilderConfig';

function PopularCard() {
  const MoviesGenre = useSelector((state) => state.moviesGenre.data);
  const popularMovies = useSelector(
    (state) => state.popularMovies.data.results
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchGenre());
  }, [dispatch]);
  const data = popularMovies || [];
  return (
    <div className="popularList">
      <Carousel responsive={fallSilder}>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="popularCard">
            <img src={`${imageUrl}${item.poster_path}`} alt="top rated" />
            <div className="cardText">
              <div className="cardTitle">
                <span> {item.title}</span>

                <span className="rateCtrl">{item.vote_average}</span>
              </div>
              {item.genre_ids.map((i, a) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={a}>{MoviesGenre[i]}</span>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default PopularCard;
