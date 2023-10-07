import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// apis
import { loginApi } from '@/apis/login';
import { userApi } from '@/apis/user';

// store
import { useIsAuth, useIsAuthActions } from '@/stores/useAuthStore';
import { useUserInfoActions } from '@/stores/useUserInfoStore';

// types
import { PostLoginResponseType } from '@/type/login';
import { GetUserInfoType } from '@/type/user';

const LoginProcess = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const codeQueryString = urlParams.get('code');
  const navigate = useNavigate();
  const setIsAuthState = useIsAuthActions();
  const setUserInfoState = useUserInfoActions();
  const isAuth = useIsAuth();

  useEffect(() => {
    const loginProcess = async () => {
      const response = await loginApi.postLogin<PostLoginResponseType>(codeQueryString!);
      if (response?.status === 201) {
        setIsAuthState(true);
        const response = await userApi.getUserInfo<GetUserInfoType>();
        setUserInfoState({ userInfo: response!.data.data });
        navigate('/login', { replace: true });
      }
    };
    if (codeQueryString !== null) loginProcess();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeQueryString, isAuth]);

  return <h3>Loading...</h3>;
};

export default LoginProcess;
