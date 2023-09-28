import { useIsAuthStore } from '@/stores/useAuthStore';
import axios, { AxiosError } from 'axios';

export const API = axios.create({});

export const tmpHandleLogout = () => {
  localStorage.removeItem('accessToken');

  delete API.defaults.headers.common.Authorization;

  useIsAuthStore.getState().setLoginState(false);
};

// accessToken 만료 시 진행
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!(error instanceof AxiosError)) return;
    if (error.response !== undefined && error.response.status === 401) {
      alert('로그인 해 주세요');
      tmpHandleLogout();
    }

    // return await Promise.reject(error);
  },
);
