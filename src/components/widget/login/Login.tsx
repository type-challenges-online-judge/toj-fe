import React from 'react';

// components
import { AuthFuncButton } from '@/components';

// const
import { GIT_HUB_LOGIN_URL } from '@/config/const';

// icons
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  return (
    <div>
      <AuthFuncButton
        text="GitHub Login"
        _onClick={() => (window.location.href = GIT_HUB_LOGIN_URL)}
      >
        <BsGithub size={50} />
      </AuthFuncButton>
    </div>
  );
};

export default Login;
