import { useMutation, useQueryClient } from '@tanstack/react-query';

import { loginApi } from '@/apis/login';
import { PostLoginResponseType } from '@/type/login';
import { userApi } from '@/apis/user';
import { GetUserInfoType } from '@/type/user';

import { useIsAuthActions } from '@/stores/useAuthStore';
import { useUserInfoActions } from '@/stores/useUserInfoStore';
import { useNavigate } from 'react-router-dom';
import { API } from '@/apis/instance';

const postLogin = async (codeQueryString: string) => {
  const res = await loginApi.postLogin<PostLoginResponseType>(codeQueryString);
  return res?.data;
};

const enrollAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
  API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const usePostLoginMutation = (codeQueryString: string) => {
  const navigate = useNavigate();
  const setIsAuthState = useIsAuthActions();
  const setUserInfoState = useUserInfoActions();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
      return await postLogin(codeQueryString);
    },
    onSuccess: async (data) => {
      const loginPostResonse = data;
      const { accessToken } = loginPostResonse!.data;
      enrollAccessToken(accessToken);

      try {
        const userInfoResponse = await queryClient.fetchQuery(
          ['userInfo'],
          async () => await userApi.getUserInfo<GetUserInfoType>(),
        );

        setUserInfoState({ userInfo: userInfoResponse!.data.data });
        setIsAuthState(true);
        navigate('/', { replace: true });
      } catch (e) {}
    },
  });
};
