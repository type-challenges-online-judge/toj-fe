import { useIsAuthStore } from '@/stores/useAuthStore';
import { useUserInfoStore } from '@/stores/useUserInfoStore';
import axios, { AxiosError } from 'axios';

export const API = axios.create({});

export const tmpHandleLogout = (url?: string) => {
  if (url !== undefined) window.location.href = `${url}`;
  if (url === undefined) window.location.reload();

  localStorage.removeItem('accessToken');

  delete API.defaults.headers.common.Authorization;

  useIsAuthStore.getState().setIsAuthState(false);

  useUserInfoStore.getState().setUserInfoState({
    userInfo: {
      snsId: 0,
      name: '',
      profileUrl: '',
    },
  });
};

// accessToken 만료 시 진행
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!(error instanceof AxiosError)) return;
    if (error.response !== undefined && error.response.status === 401) {
      alert('로그인 해 주세요');
      tmpHandleLogout('/login');
    }

    // return await Promise.reject(error);
  },
);
