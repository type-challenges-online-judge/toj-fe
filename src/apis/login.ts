import axios, { AxiosError } from 'axios';
import { API } from './instance';

// API
export const loginApi = {
  postLogin: async (gitHubAuthCode: string) => {
    try {
      const apiResponse = await API.post('/api/auth/login', null, {
        params: { code: gitHubAuthCode },
      });
      const { accessToken } = apiResponse.data.data;

      API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      return apiResponse;
    } catch (e) {
      if (e instanceof AxiosError) console.error(e.message);
    }
  },
};
