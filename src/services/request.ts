import { Horse } from '@/types';

import api from './api';

export const getHorses = async (): Promise<Horse[]> => {
  const { data = [] } = await api.get('/horse');
  return data.reverse(); // use reverse to show latest horse
};

export const addHorse = async (newHorse: Omit<Horse, 'id'>): Promise<string> => {
  const { data } = await api.put('/horse', newHorse);
  return data;
};
