import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { fetchGenre } from '../../Store/reducers/GenreReducer';
import { imageUrl } from '../../Store/reducers/config';
import { fetchPopularMovies } from '../../Store/reducers/PopularReducer';
import { fallSilder } from '../../shared/SilderConfig';

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
        {data.map((item) => (
          <div className="popularCard">
            <img src={`${imageUrl}${item.poster_path}`} alt="top rated" />
            <div className="cardText">
              <div className="cardTitle">
                {/* <span> {item.title}</span> */}
                {/* <span className="rateCtrl">{item.vote_average}</span> */}
              </div>
              {item.genre_ids.map((i) => (
                <span>{MoviesGenre[i]}</span>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default PopularCard;
