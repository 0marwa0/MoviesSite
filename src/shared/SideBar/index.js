import React from 'react';
import UserCard from './UserCard';
import './index.css';

import UpComingCard from '../../Component/UpComingCard';
import TopRatedCard from '../../Component/TopRatedCard';

function SideBar() {
  return (
    <div className="SideBar">
      <UserCard />
      <div>
        <div className="WidgetTitle">Top Rated Movies</div>
        <TopRatedCard />
      </div>
      <div>
        <div className="WidgetTitle">UpComing Movies</div>
        <UpComingCard />
      </div>

      <div className="WidgetTitle">
        <div>Watch List</div>
      </div>
    </div>
  );
}
export default SideBar;
