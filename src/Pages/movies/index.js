/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { fetchPopularMovies } from '../../Store/reducers/PopularReducer';
import { fetchGenre } from '../../Store/reducers/GenreReducer';
// import { bookAdded } from '../../Store/reducers/BookMarkReducer';
import { imageUrl } from '../../Store/reducers/config';
import '../../shared/index.css';
// import ListLoading from '../../shared/Loading/ListLoading';
import { db } from '../../firebase';

function Movies() {
  const history = useHistory();
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.uid);
  const popularMovies = useSelector(
    (state) => state.popularMovies.data.results
  );
  const moviesGenre = useSelector((state) => state.moviesGenre.data);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;
  //  const [perPage, setPerPage] = useState(6);
  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchGenre());
  }, [dispatch]);
  const data = popularMovies || [];
  const genre = moviesGenre || {};
  const getDetalis = (id) => {
    history.push(`/movie/${id}`);
  };
  const indexofLast = currentPage * perPage;
  const indexofFirst = indexofLast - perPage;
  const currentList = data.slice(indexofFirst, indexofLast);
  const totalPages = data.length / perPage;
  const onNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };
  const onPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((page) => page - 1);
    }
  };

  const onBook = (item) => {
    let bookmarksRef;
    if (uid) {
      bookmarksRef = db.collection('bookmarks');
      bookmarksRef.add({ ...item, uid });
    }

    // not the correct way don't do this!!!!!!
    // let bookmarksRef;
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     bookmarksRef = db.collection('bookmarks');
    //     bookmarksRef.add({ ...item, uid: user.uid });
    //   }
    // });
    // }
  };

  return (
    <div className="gridhomepage">
      <div className="List">
        {/* <ListLoading /> */}
        <div className="ListItems">
          <div>Poster</div>
          <div>Movie title</div>
          <div>Release date</div>
          <div>Rate</div>
          <div>Genre</div>
        </div>
        {currentList.map((item) => (
          <div key={item.id} className="ListItems">
            <img src={`${imageUrl}${item.poster_path}`} alt="movie" />
            <div
              onKeyDown={() => getDetalis(item.id)}
              onClick={() => getDetalis(item.id)}
              role="button"
              tabIndex="0"
            >
              {item.title}
            </div>
            <div> {item.release_date}</div>
            <div> {item.vote_average}</div>
            <div>
              {item.genre_ids.map((type) => (
                <span>
                  <span>{`${genre[type]}, `}</span>
                </span>
              ))}
            </div>
            <div>
              {' '}
              {/* <label className="inline-flex items-center" htmlFor="book">
                <input
                 
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="ml-2" />
              </label> */}
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                value="value1"
                onClick={() => onBook({ item })}
              />
              <label />
            </div>
          </div>
        ))}

        <div className="pagination">
          <div />
          <div>
            <button type="button" onClick={() => onPrev()}>
              <GrPrevious color="orange" />
            </button>
            {currentPage}-{totalPages}
            <button type="button" onClick={onNext}>
              <GrNext color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
