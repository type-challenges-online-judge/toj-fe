import React from 'react';
import { Solved, UserProfile } from '@/components';

const User = () => {
  return (
    <div>
      <div>
        <UserProfile />
      </div>
      <Solved />
    </div>
  );
};

export default User;
