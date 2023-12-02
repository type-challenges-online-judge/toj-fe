import { AxiosError, AxiosResponse } from 'axios';
import { API } from './instance';

export const loginApi = {
  postLogin: async <T>(gitHubAuthCode: string): Promise<AxiosResponse<T> | undefined> => {
    const apiResponse = await API.post('/api/auth/login', null, {
      params: { code: gitHubAuthCode },
    });

    return apiResponse;
  },
};
