import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { fetchPopularPeople } from '../../Store/reducers/PopularPeopleReducer';
import { imageUrl } from '../../Store/reducers/config';

function Actors() {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state) => state.popularPeople.data.results
  );
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);
  const data = popularMovies || [];

  const history = useHistory();
  const getDetalis = (id) => {
    history.push(`actor/${id}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

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
    <div className="gridhomepage">
      <div className="List">
        <div className="ListItems">
          <div>Phont</div>
          <div>Actor Name</div>
          <div>Gender</div>
          <div>Popularity</div>
          <div>Role</div>
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
            <img src={`${imageUrl}${item.profile_path}`} alt="movie" />

            <div> {item.name}</div>

            <div> {item.gender === 1 ? 'Famel' : 'Male'}</div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${item.popularity}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"
                />
              </div>
            </div>

            <div>{item.known_for_department}</div>
          </div>
        ))}{' '}
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

export default Actors;
