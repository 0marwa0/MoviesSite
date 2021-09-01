import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // fetchPopularMovies,
  // fetchTopRatedMovies,
  fetchUpComingMovies,
} from './Store/reducers/UpComingReducer';

function App() {
  const dispatch = useDispatch();
  // const popularMovies = useSelector((state) => state);
  const topRatedMovies = useSelector((state) => state);
  console.log(topRatedMovies, 'top rated');
  useEffect(() => {

    dispatch(fetchUpComingMovies());
    //   dispatch(fetchPopularMovies());
  }, [dispatch]);
  return <div className="App">Hello React</div>;
}

export default App;
