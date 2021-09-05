import React from 'react';
import MostPopular from '../../Component/MostPopular';
import PopularCard from '../../Component/PopularCard';

function HomePage({ data }) {
  console.log(data, 'home page');
  return (
    <div>
      <MostPopular data={data} />
      <PopularCard />
    </div>
  );
}

export default HomePage;
