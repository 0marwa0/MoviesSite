import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from './Store/reducers/PopularReducer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SideBar from './SideBar';
import 'antd/dist/antd.css';
import MostPopular from './MostPopular';
import PopularCard from './PopularCard';

function App() {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.popularMovies.data.results
  );
  const data = popularMovies ? popularMovies[0] : [];
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);
  return (
    <div className="App">
      <SideBar />

      <MostPopular data={data} />
      <div>
        <p className="WidgetTitle">Poupular Movies</p> <PopularCard />
      </div>
    </div>
  );
}

export default App;
