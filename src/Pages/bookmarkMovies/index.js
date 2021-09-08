import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { bookRemoved } from '../../Store/reducers/BookMarkReducer';
import { fetchPopularMovies } from '../../Store/reducers/PopularReducer';
import { fetchGenre } from '../../Store/reducers/GenreReducer';
import { imageUrl } from '../../Store/reducers/config';
import '../../shared/index.css';

function Index() {
  const history = useHistory();
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.bookMark.data);
  const moviesGenre = useSelector((state) => state.moviesGenre.data);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

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
  const onDelete = (id) => {
    dispatch(bookRemoved(id));
  };
  return (
    <div className="gridhomepage">
      <div className="List">
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
              <RiDeleteBinLine
                color="red"
                onClick={() => onDelete(item.id)}
                cursor="pinter"
              />
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
    </div>
  );
}

export default Index;
