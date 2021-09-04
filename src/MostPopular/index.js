import React from 'react';
import './index.css';
import { imageUrl } from '../Store/reducers/config';

function Index({ data }) {
  return (
    <div
      className="mostPopular"
      style={{ backgroundImage: `url(${imageUrl}${data.poster_path})` }}
    />
  );
}
export default Index;
