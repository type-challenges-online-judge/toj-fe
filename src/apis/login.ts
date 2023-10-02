import { AxiosError, AxiosResponse } from 'axios';
import { API } from './instance';

// API
export const loginApi = {
  postLogin: async <T>(gitHubAuthCode: string): Promise<AxiosResponse<T> | undefined> => {
    try {
      const apiResponse = await API.post('/api/auth/login', null, {
        params: { code: gitHubAuthCode },
      });
      const { accessToken } = apiResponse.data.data;

      localStorage.setItem('accessToken', JSON.stringify(accessToken));

      API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      return apiResponse;
    } catch (e) {
      if (e instanceof AxiosError) console.error(e.message);
    }
  },
};
