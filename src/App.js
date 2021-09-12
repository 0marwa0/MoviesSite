import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { auth } from './firebase';
import Footer from './shared/Footer/Footer';
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
import BookmarkMovies from './Pages/bookmarkMovies';
import {
  setActiveUser,
  setUserLogOutState,
} from './Store/reducers/UserReducer';

const translationsEn = { welcome: 'welcome' };
const translationsFr = { welcome: 'Bienvenue' };

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    fr: { translation: translationsFr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

function App() {
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // setLoading(false);
        dispatch(
          setActiveUser({
            uid: userAuth.uid,
            userName: userAuth.displayName,
            userEmail: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        );
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } else {
        setLoading(true);
        dispatch(setUserLogOutState());
      }
    });
  }, []);

  // i18next
  // const { t } = useTranslation();

  // function handleClick() {
  //   i18n.changeLanguage('fr');
  // }

  return (
    <Suspense fallback="Loading...">
      {loading && (
        <div className="App">
          {/* <button type="button" onClick={handleClick}>
click
</button>
<p>{t('welcome')}</p> */}
          <Navbar />
          <SideBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" component={Movies} exact />
            <Route path="/actors" component={Actors} exact />
            <Route path="/actor/:id" component={Actor} exact />
            <Route path="/movie/:id" component={Movie} exact />
            <Route path="/collection" component={HomePage} exact />
            {userName ? (
              <Route path="/bookmarked" component={BookmarkMovies} />
            ) : null}
          </Switch>
          <Footer />
        </div>
      )}
    </Suspense>
  );
}

export default App;
