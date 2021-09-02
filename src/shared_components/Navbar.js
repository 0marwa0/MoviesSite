import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/actors">Actors</Link>
      <Link to="/collection">Collection</Link>
    </nav>
  );
}

export default Navbar;
