import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoStyle, NavbarStyle } from './Navbar.css';

// components
import { SignButton } from '@/components';

// apis
import { tmpHandleLogout } from '@/apis/instance';

// store
import { useIsAuth } from '@/stores/useAuthStore';

const Navbar = () => {
  const navigate = useNavigate();

  const isAuth = useIsAuth();

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
          if (!isAuth) navigate(`/login`);
          if (isAuth) tmpHandleLogout('/');
        }}
        iconSize={20}
      />
    </div>
  );
};

export default Navbar;
