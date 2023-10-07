import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// api
import { loginApi } from '@/apis/login';
import { userApi } from '@/apis/user';

// components
import { SignButton } from '@/components';

// const
import { GIT_HUB_LOGIN_URL } from '@/config/const';

// store
import { useIsAuth, useIsAuthActions } from '@/stores/useAuthStore';
import { useUserInfoActions } from '@/stores/useUserInfoStore';

// types
import { PostLoginResponseType } from '@/type/login';
import { GetUserInfoType } from '@/type/user';

const Login = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const codeQueryString = urlParams.get('code');
  const navigate = useNavigate();
  const setIsAuthState = useIsAuthActions();
  const setUserInfoState = useUserInfoActions();
  const isAuth = useIsAuth();

  useEffect(() => {
    const login = async () => {
      const response = await loginApi.postLogin<PostLoginResponseType>(codeQueryString!);

      if (response?.status === 201) {
        setIsAuthState(true);
        const response = await userApi.getUserInfo<GetUserInfoType>();
        setUserInfoState({ userInfo: response!.data.data });
        navigate(`/`);
      }
    };
    // {replace:true}를 사용하면 뒤로가기를 했을 때 깃허브 로그인페이지로 가버리므로 생략
    if (isAuth) navigate(`/`); // 로그인 후 뒤로가기로 접근 방지

    if (codeQueryString !== null) login();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeQueryString, isAuth]);

  return (
    <div>
      {codeQueryString === null ? (
        <SignButton
          text="GitHub Login"
          _onClick={() => (window.location.href = GIT_HUB_LOGIN_URL)}
          iconSize={50}
        />
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Login;
