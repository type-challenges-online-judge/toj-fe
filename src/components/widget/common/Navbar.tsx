import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SignButton } from '@/components';

import { LogoStyle, NavbarStyle } from './Navbar.css';
import { loginApi } from '@/apis/login';
import { GIT_HUB_LOGIN_URL } from '@/config/const';
// import { userApi } from '@/apis/user';

const Navbar = () => {
  const [isAuth] = useState<boolean>(false);

  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);

  const codeQueryString = urlParams.get('code');

  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      const response = await loginApi.postLogin(codeQueryString!);

      if (response?.status === 201) {
        // URL에서 code 쿼리스트링 제거
        urlParams.delete('code');
        navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
      }
    };
    if (codeQueryString !== null) login();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeQueryString]);

  const goMain = () => {
    navigate('/');
  };

  return (
    <div className={NavbarStyle}>
      <button className={LogoStyle} onClick={goMain}>
        TOJ
      </button>

      {/* 테스트 용으로 임시 구현 */}
      {/* <button
        className={LogoStyle}
        onClick={async () => {
          await userApi.getUserInfo();
        }}
      >
        유저 정보 테스트 버튼
      </button> */}
      <SignButton
        text={isAuth ? 'LOGOUT' : 'LOGIN'}
        _onClick={() => {
          window.location.href = GIT_HUB_LOGIN_URL;
        }}
      />
    </div>
  );
};

export default Navbar;
