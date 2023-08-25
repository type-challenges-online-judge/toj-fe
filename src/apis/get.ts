import axios from 'axios';

export const getProblemList = async () => {
  const res = await axios.get(`/mockData/problemList.json`);
  return res.data;
};
