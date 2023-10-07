import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useIsAuth } from '@/stores/useAuthStore';

interface AuthorizationProps {
  children: ReactNode;
}

const Authorization = ({ children }: AuthorizationProps) => {
  const isAuth = useIsAuth();
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();
  const loaction = useLocation();
  const isSnsId = serchParams.get('sns_id'); // null or 0
  const isSubmit = loaction.pathname.startsWith('/submit'); // true or false

  useEffect(() => {
    if (!isAuth && !(isSnsId === null && !isSubmit)) {
      // alert('로그인이 필요한 서비스 입니다');
      navigate(`/login`, { replace: true });
    }
  }, [isAuth, navigate, isSnsId, isSubmit]);

  if (!isAuth && !(isSnsId === null && !isSubmit)) return null;

  return <>{children}</>;
};

export default Authorization;
