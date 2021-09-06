import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './shared_components/Footer/Footer';
import Navbar from './shared_components/Navbar';
import Sidebar from './shared_components/Sidebar';
import HomePage from './components/homepage/HomePage';
import Movies from './components/movies/Movies';
import Actors from './components/actors/Actors';
import { fetchPopularMovies } from './Store/reducers/PopularReducer';
import './styles/index.css';
import './styles/app.css';
// import SideBar from './SideBar';
// import 'antd/dist/antd.css';
// import MostPopular from './MostPopular';
// import PopularCard from './PopularCard';
import BookmarkMovies from './components/bookmarkMovies/BookmarkMovies';

function App() {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.popularMovies.data.results
  );
  const data = popularMovies ? popularMovies[0] : [];
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);
  console.log(data);

  // firebase

  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        {userName ? (
          <Route path="/bookmarked" component={BookmarkMovies} />
        ) : null}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
