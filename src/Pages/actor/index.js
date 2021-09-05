import React, { useEffect } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPerson } from '../../Store/reducers/PersonReducer';
import ActorProfile from './ActorProfile';

function Actor() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const popularMovies = useSelector((state) => state.person.data);
  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [dispatch]);
  const data = popularMovies || [];
  return (
    <div>
      <div className="actorInfo">
        <ActorProfile data={data} />
        <div>{data.biography}</div>
      </div>
    </div>
  );
}

export default Actor;
