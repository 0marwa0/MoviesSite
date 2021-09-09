import React from 'react';
import './index.css';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { imageUrl } from '../../Store/reducers/config';

function Index({ data }) {
  return (
    <div className="flexHolder">
      <div>
        <div className="flexText">
          <IoHome color="var(--grayText" />{' '}
          <span> {data.place_of_birth ? data.place_of_birth : 'unKnown'}</span>
        </div>
        <div className="flexText">
          <FaBirthdayCake />
          <span> {data.birthday ? data.birthday : 'unKnown'}</span>
        </div>
        <span className="flexText">{data.name}</span>
      </div>
      <img src={`${imageUrl}${data.profile_path}`} alt="actor" />{' '}
    </div>
  );
}

export default Index;
