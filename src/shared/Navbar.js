import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../firebase';
import {
  setActiveUser,
  setUserLogOutState,
} from '../Store/reducers/UserReducer';
import '../styles/app.css';

function Navbar() {
  // firebase
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  function handleSignIn() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
            photoURL: result.user.photoURL,
          })
        );
      })
      .catch(() => {});
  }

  function handleSignOut() {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOutState());
      })
      .catch((err) => alert(err.message));
  }

  return (
    <div className="nav">
      <div>
        <nav className="flex w-5/4 justify-center items-end h-16  relative">
          <div className="pr-8">
            <NavLink
              exact
              className="p-8 hover:text-gray-800"
              activeClassName="text-xl-gray-800"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="p-8 hover:text-gray-700"
              activeClassName="text-gray-600"
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className="p-8 hover:text-gray-200"
              activeClassName="text-gray-600"
              to="/actors"
            >
              Actors
            </NavLink>
            {userName ? (
              <NavLink
                className="p-8 hover:text-gray-700"
                to="/"
                onClick={handleSignOut}
              >
                Sign Out
              </NavLink>
            ) : (
              <NavLink
                className="p-8 hover:text-gray-200"
                to=""
                onClick={handleSignIn}
              >
                Sign In
              </NavLink>
            )}
            {userName ? (
              <NavLink
                className="p-8 hover:text-gray-200"
                activeClassName="text-gray-600"
                to="/bookmarked"
              >
                Bookmark
              </NavLink>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
