import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignButton } from '@/components';

import { LogoStyle, NavbarStyle } from './Navbar.css';

const Navbar = () => {
  const [isAuth] = useState<boolean>(false);

  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  return (
    <div className={NavbarStyle}>
      <button className={LogoStyle} onClick={goMain}>
        TOJ
      </button>
      <SignButton text={isAuth ? 'LOGOUT' : 'LOGIN'} _onClick={() => {}} />
    </div>
  );
};

export default Navbar;
