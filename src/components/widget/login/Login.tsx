import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import { SignButton } from '@/components';

// const
import { GIT_HUB_LOGIN_URL } from '@/config/const';

// store
import { useIsAuth } from '@/stores/useAuthStore';

const Login = () => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <SignButton
        text="GitHub Login"
        _onClick={() => (window.location.href = GIT_HUB_LOGIN_URL)}
        iconSize={50}
      />
    </div>
  );
};

export default Login;
