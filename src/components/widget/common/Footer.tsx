import React from 'react';

import { CopyrightStyle, FooterStyle } from './Footer.css';

const Footer = () => {
  return (
    <div className={FooterStyle}>
      <p className={CopyrightStyle}>COPYRIGHT 2023. TOJ, All rights reserved.</p>
    </div>
  );
};

export default Footer;
