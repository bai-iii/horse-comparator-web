import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3016',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
