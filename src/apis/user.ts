import { AxiosError, AxiosResponse } from 'axios';
import { API } from './instance';

// API
export const userApi = {
  getUserInfo: async <T>(): Promise<AxiosResponse<T> | undefined> => {
    try {
      const apiResponse = await API.get<T>(`/api/user/info`);
      return apiResponse;
    } catch (e) {
      if (e instanceof AxiosError) console.error(e.message);
    }
  },
};
