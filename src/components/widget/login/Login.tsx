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
import { useIsAuthActions } from '@/stores/useAuthStore';
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

  useEffect(() => {
    const login = async () => {
      const response = await loginApi.postLogin<PostLoginResponseType>(codeQueryString!);

      if (response?.status === 201) {
        setIsAuthState(true);

        // code 쿼리스트링 제거
        // urlParams.delete('code');
        // navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });

        const response = await userApi.getUserInfo<GetUserInfoType>();
        setUserInfoState({ userInfo: response!.data.data });
        navigate(`/`);
      }
    };
    if (codeQueryString !== null) login();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeQueryString]);

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
