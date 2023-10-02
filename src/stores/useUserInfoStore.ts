import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// type
import type { UserInfoActionType, UserInfoType } from './type';

const initailState: UserInfoType = {
  userInfo: {
    snsId: 0,
    name: '',
    profileUrl: '',
  },
};

export const useUserInfoStore = create(
  persist<UserInfoType & UserInfoActionType>(
    (set) => ({
      ...initailState,
      setUserInfoState: (userInfo: UserInfoType) => {
        set({ ...userInfo });
      },
    }),
    {
      name: 'userInfoStorage',
    },
  ),
);

export const useUserInfo = () => {
  return useUserInfoStore((state) => state.userInfo);
};

export const useUserInfoActions = () => {
  return useUserInfoStore((state) => state.setUserInfoState);
};
