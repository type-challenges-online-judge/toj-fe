import axios from 'axios';

export const submitAnswer = async (code: string) => {
  const res = await axios.post('/submit', code, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.data;
};
