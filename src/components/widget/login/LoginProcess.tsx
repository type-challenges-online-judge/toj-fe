import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// store
import { useIsAuth } from '@/stores/useAuthStore';

// types
import { usePostLoginMutation } from '@/hooks/queries/loginProcess';

const LoginProcess = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const codeQueryString = urlParams.get('code');
  const isAuth = useIsAuth();

  const { mutate: loginMutate } = usePostLoginMutation(codeQueryString!);

  useEffect(() => {
    if (codeQueryString !== null) loginMutate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeQueryString, isAuth]);

  return <h3>Loading...</h3>;
};

export default LoginProcess;
