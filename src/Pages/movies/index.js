import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { fetchPopularMovies } from '../../Store/reducers/PopularReducer';
import { fetchGenre } from '../../Store/reducers/GenreReducer';
import { imageUrl } from '../../Store/reducers/config';
import '../../shared/index.css';
// import ListLoading from '../../shared/Loading/ListLoading';

function Movies() {
  const history = useHistory();
  const dispatch = useDispatch();
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

  return (
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
        <div
          key={item.id}
          className="ListItems"
          onKeyDown={() => getDetalis(item.id)}
          onClick={() => getDetalis(item.id)}
          role="button"
          tabIndex="0"
        >
          <img src={`${imageUrl}${item.poster_path}`} alt="movie" />

          <div> {item.title}</div>
          <div> {item.release_date}</div>
          <div> {item.vote_average}</div>
          <div>
            {item.genre_ids.map((type) => (
              <span>
                <span>{`${genre[type]}, `}</span>
              </span>
            ))}
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
          <button type="button" onClick={() => onNext()}>
            <GrNext color="red" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;
