import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <nav className="flex w-3/4 justify-center items-end h-16 bg-white relative">
        <div className="pr-8">
          <NavLink
            exact
            className="p-8 hover:text-green-700"
            activeClassName="text-green-600"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="p-8 hover:text-green-700"
            activeClassName="text-green-600"
            to="/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className="p-8 hover:text-green-700"
            activeClassName="text-green-600"
            to="/actors"
          >
            Actors
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
