import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchUpComingMovies } from '../../Store/reducers/UpComingReducer';
import 'react-multi-carousel/lib/styles.css';
import { imageUrl } from '../../Store/reducers/config';
import './index.css';
import { sideBarSlider } from '../../shared/SilderConfig';

function Index() {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((state) => state.upComingMovies.data);
  useEffect(() => {
    dispatch(fetchUpComingMovies());
  }, [dispatch]);

  const data = upComingMovies.results ? upComingMovies.results : [];

  return (
    <Carousel responsive={sideBarSlider}>
      {data.map((item) => (
        <div className="upComingCard">
          <div className="img">
            <img src={`${imageUrl}${item.poster_path}`} alt="top rated" />
          </div>
          {/* <div>
            <div>{item.title}</div>
          </div> */}
        </div>
      ))}
    </Carousel>
  );
}
export default Index;
