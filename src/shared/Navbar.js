import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '20px',
        width: '900px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
  );
}

export default Navbar;
