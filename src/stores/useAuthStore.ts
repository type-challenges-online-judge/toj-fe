import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// type
import type { IsAuthActionType, IsAuthType } from './type';

const initailState: IsAuthType = {
  isAuth: false,
};

export const useIsAuthStore = create(
  persist<IsAuthType & IsAuthActionType>(
    (set) => ({
      ...initailState,
      setIsAuthState: (loginState: boolean) => {
        set({ isAuth: loginState });
      },
    }),
    {
      name: 'isAuthStorage',
    },
  ),
);

export const useIsAuth = () => {
  return useIsAuthStore((state) => state.isAuth);
};

export const useIsAuthActions = () => {
  return useIsAuthStore((state) => state.setIsAuthState);
};
