import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoStyle, NavbarStyle } from './Navbar.css';

// components
import { SignButton } from '@/components';

// apis
import { tmpHandleLogout } from '@/apis/instance';

// store
import { useIsAuth } from '@/stores/useAuthStore';
import UserButton from '@/components/core/button/UserButton';
import { PAGE_URL } from '@/config/path';
import { useUserInfo } from '@/stores/useUserInfoStore';

const Navbar = () => {
  const navigate = useNavigate();

  const isAuth = useIsAuth();
  const userInfo = useUserInfo();

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

      {isAuth && (
        <UserButton
          text="내 정보"
          _onClick={() => {
            navigate(`/${PAGE_URL.User}?sns_id=${userInfo.snsId}`);
          }}
        />
      )}

      <SignButton
        text={isAuth ? 'LOGOUT' : 'LOGIN'}
        _onClick={() => {
          if (!isAuth) navigate(`/${PAGE_URL.Login}`);
          if (isAuth) tmpHandleLogout();
        }}
        iconSize={20}
      />
    </div>
  );
};

export default Navbar;
