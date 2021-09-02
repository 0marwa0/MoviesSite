import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './shared_components/Footer';
import Navbar from './shared_components/Navbar';
import Sidebar from './shared_components/Sidebar';
import HomePage from './components/homepage/HomePage';
import Movies from './components/movies/Movies';
import Actors from './components/actors/Actors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/collection" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
