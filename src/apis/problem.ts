import axios from 'axios';
import { API } from './instance';

export const problemApi = {
  getProblems: async () => await API.get('/api/problem'),
};

export const submitAnswer = async (code: string) => {
  const res = await axios.post('/submit', code, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
