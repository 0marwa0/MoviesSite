import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Footer from './shared/Footer';
import Navbar from './shared/Navbar';
import HomePage from './Pages/homepage';
import Movies from './Pages/movies';
import Movie from './Pages/movie';
import Actors from './Pages/actors';
import Actor from './Pages/actor';
import SideBar from './shared/SideBar';

function App() {
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
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
