import { SubmitType } from '@/type/status';
import axios from 'axios';

export const submitAnswer = async (submitData: SubmitType) => {
  const res = await axios.post('/submit', submitData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
