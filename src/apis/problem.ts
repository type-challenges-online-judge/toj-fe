import { SubmitType } from '@/type/status';
import axios from 'axios';
import { API } from './instance';

export const problemApi = {
  getProblems: async () => await API.get('/api/problem'),
};

export const submitAnswer = async (submitData: SubmitType) => {
  const res = await axios.post('/submit', submitData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
