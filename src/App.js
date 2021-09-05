import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import HomePage from './Pages/homepage';
import Movies from './Pages/movies';
import Movie from './Pages/movie';
import Actors from './Pages/actors';
import Actor from './Pages/actor';
import SideBar from './shared/SideBar';
import { fetchPopularMovies } from './Store/reducers/PopularReducer';
import './styles/index.css';
import './styles/app.css';
import BookmarkMovies from './Pages/bookmarkMovies/BookmarkMovies';

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
      <SideBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/actor/:id" component={Actor} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/collection" component={HomePage} />
        {userName ? (
          <Route path="/bookmarked" component={BookmarkMovies} />
        ) : null}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
