import React from 'react';

const UserButton = ({ text, _onClick }: any) => {
  return <button onClick={_onClick}>{text}</button>;
};

export default UserButton;
