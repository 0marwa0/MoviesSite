import React from 'react';
import './index.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { imageUrl } from '../../Store/reducers/config';
// import { fetchSimialrMovies } from '../../Store/reducers/SimilarMoviesReducer';
import { fallSilder } from '../../shared/SilderConfig';
// import { fetchGenre } from '../../Store/reducers/GenreReducer';

function Index({ SimialrMovies }) {
  // const MoviesGenre = useSelector((state) => state.moviesGenre.data);
  // const SimialrMovies = useSelector(
  // (state) => state.simialrMovies.data.results
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSimialrMovies());
  //   dispatch(fetchGenre());
  // }, [dispatch]);
  // const data = SimialrMovies || [];
  const data = SimialrMovies.data.results || [];
  return (
    <div style={{ width: '920px' }}>
      <Carousel responsive={fallSilder}>
        {data.map((item) => (
          <div className="popularCard">
            <img src={`${imageUrl}${item.poster_path}`} alt="top rated" />
            <div className="cardText">
              <div className="cardTitle">
                <span className="rateCtrl">{item.vote_average}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Index;
