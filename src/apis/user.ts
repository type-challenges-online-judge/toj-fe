import { AxiosError } from 'axios';
import { API } from './instance';

// API
export const userApi = {
  getUserInfo: async () => {
    try {
      const apiResponse = await API.get(`/api/user/info`);
      console.log(apiResponse.data);
      return apiResponse;
    } catch (e) {
      if (e instanceof AxiosError) console.error(e.message);
    }
  },
};
