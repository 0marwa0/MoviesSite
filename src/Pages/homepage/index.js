import React from 'react';
import MostPopular from '../../Component/MostPopular';
import PopularCard from '../../Component/PopularCard';
import '../../styles/app.css';

function HomePage({ data }) {
  return (
    <div>
      <div>
        <MostPopular data={data} />
        <div className="Widget_title">Popular Movies</div>
        <PopularCard />
      </div>
    </div>
  );
}

export default HomePage;
