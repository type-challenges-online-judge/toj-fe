import React from 'react';
import { Login } from '@/components';
import { LoginpageWrapperStyle } from './LoginPage.css';

const LoginPage = () => {
  return (
    <div className={LoginpageWrapperStyle}>
      <Login />
    </div>
  );
};

export default LoginPage;
