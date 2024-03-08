import React from 'react';
import { Chart, Solved, UserProfile } from '@/components';
import { UserWrapperStyle } from './User.css';

const User = () => {
  return (
    <div className={UserWrapperStyle}>
      <UserProfile />
      <Solved />
      {/* <Chart /> */}
    </div>
  );
};

export default User;
