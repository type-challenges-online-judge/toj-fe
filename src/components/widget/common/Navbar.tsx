import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoStyle, NavbarStyle } from './Navbar.css';

// components
import { SignButton } from '@/components';

// apis
import { loginApi } from '@/apis/login';
import { tmpHandleLogout } from '@/apis/instance';
import { userApi } from '@/apis/user';

// const
import { GIT_HUB_LOGIN_URL } from '@/config/const';

// store
import { useIsAuth, useIsAuthActions } from '@/stores/useAuthStore';
import { useUserInfoActions } from '@/stores/useUserInfoStore';

// type
import { GetUserInfoType } from '@/type/user';
import { PostLoginResponseType } from '@/type/login';

const Navbar = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const codeQueryString = urlParams.get('code');
  const navigate = useNavigate();

  const isAuth = useIsAuth();
  const setIsAuthState = useIsAuthActions();
  const setUserInfoState = useUserInfoActions();

  useEffect(() => {
    const login = async () => {
      const response = await loginApi.postLogin<PostLoginResponseType>(codeQueryString!);

      if (response?.status === 201) {
        setIsAuthState(true);

        // URL에서 code 쿼리스트링 제거
        urlParams.delete('code');
        navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });

        const response = await userApi.getUserInfo<GetUserInfoType>();
        setUserInfoState({ userInfo: response!.data.data });
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
          if (!isAuth) window.location.href = GIT_HUB_LOGIN_URL;
          if (isAuth) tmpHandleLogout();
        }}
      />
    </div>
  );
};

export default Navbar;
