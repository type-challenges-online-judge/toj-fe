import React, { useState } from 'react';

import { LogoStyle, NavbarStyle } from './Navbar.css';
import { SignButton } from '../../../components';

const Navbar = () => {
  const [isAuth] = useState<boolean>(false);

  return (
    <div className={NavbarStyle}>
      <p className={LogoStyle}>TOJ</p>
      <SignButton text={isAuth ? 'LOGOUT' : 'LOGIN'} _onClick={() => {}} />
    </div>
  );
};

export default Navbar;
