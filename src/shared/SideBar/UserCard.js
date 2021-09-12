import React from 'react';

import { useSelector } from 'react-redux';
import './index.css';

function UserCard() {
  const user = useSelector((state) => state.user);
  return user.photoURL ? (
    <div className="UserCard">
      <img src={user.photoURL} alt="" />
      <p>{user.userName}</p>
    </div>
  ) : null;
}

export default UserCard;
