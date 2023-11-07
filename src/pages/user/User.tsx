import { Badge } from '@/svgs';
import React from 'react';

const User = () => {
  return (
    <div>
      사용자 페이지
      <Badge diff={'easy'} />
      <Badge diff={'medium'} />
      <Badge diff={'hard'} />
      <Badge diff={'extreme'} />
    </div>
  );
};

export default User;
