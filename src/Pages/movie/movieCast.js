import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../Store/reducers/MovieCast';
import { imageUrl } from '../../Store/reducers/config';

function Index() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const MovieCast = useSelector((state) => state.movieCast.data);
  useEffect(() => {
    dispatch(fetchMovieCast(id));
  }, [dispatch]);

  const data = MovieCast.cast ? MovieCast.cast : [];
  return (
    <div className="movieCastHolder">
      {data.map((cast) => (
        <div className="movieCast" key={cast.id}>
          <img src={`${imageUrl}${cast.profile_path}`} alt="actor " />
          <div>{cast.name}</div>
          <div className="actorRole">{cast.known_for_department}</div>
        </div>
      ))}
    </div>
  );
}
export default Index;
