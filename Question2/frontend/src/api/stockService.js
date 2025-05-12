import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const fetchStockData = async (ticker, minutes) => {
  const res = await api.get(`/stocks/${ticker}?minutes=${minutes}&aggregation=average`);
  return res.data;
};
