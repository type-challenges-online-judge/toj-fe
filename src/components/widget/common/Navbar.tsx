import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthFuncButtonStyle, LogoStyle, NavbarStyle } from './Navbar.css';

// icons
import { BsFillPersonCheckFill, BsGithub } from 'react-icons/bs';

// components
import { AuthFuncButton } from '@/components';

// apis
import { tmpHandleLogout } from '@/apis/instance';

// store
import { useIsAuth } from '@/stores/useAuthStore';
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

      <div className={AuthFuncButtonStyle}>
        {isAuth && (
          <AuthFuncButton
            text={userInfo.name}
            _onClick={() => {
              navigate(`/${PAGE_URL.User}?sns_id=${userInfo.snsId}`);
            }}
          >
            <BsFillPersonCheckFill size={30} />
          </AuthFuncButton>
        )}
        <AuthFuncButton
          text={isAuth ? 'LOGOUT' : 'LOGIN'}
          _onClick={() => {
            if (!isAuth) navigate(`/${PAGE_URL.Login}`);
            if (isAuth) tmpHandleLogout();
          }}
        >
          <BsGithub size={30} />
        </AuthFuncButton>
      </div>
    </div>
  );
};

export default Navbar;
