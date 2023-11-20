import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useIsAuth } from '@/stores/useAuthStore';
import { userApi } from '@/apis/user';
import { GetUserInfoType } from '@/type/user';

interface AuthorizationProps {
  children: ReactNode;
}

const Authorization = ({ children }: AuthorizationProps) => {
  const isAuth = useIsAuth();
  const [isLogin, setIsLogin] = useState(false);
  const [serchParams] = useSearchParams();
  const loaction = useLocation();

  const isSnsId = serchParams.get('sns_id'); // null or 0
  const isSubmit = loaction.pathname.startsWith('/submit'); // true or false
  const isUser = loaction.pathname === '/user'; // true or false

  useEffect(() => {
    const checkAuthAndRedirection = async () => {
      const res = await userApi.getUserInfo<GetUserInfoType>();
      if (res?.status === 200) setIsLogin(true);
    };

    // 답안보기 페이지가 아니거나 || 사용자페이지 이거나
    if (!(isSnsId === null && !isSubmit) || isUser) {
      checkAuthAndRedirection();
    }
  }, [isUser, isAuth, isSnsId, isSubmit]);

  if (!(isSnsId === null && !isSubmit) && (!isAuth || !isLogin)) return null;

  return <>{children}</>;
};

export default Authorization;
