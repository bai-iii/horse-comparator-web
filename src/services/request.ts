import { Horse } from '@/types';

import api from './api';

export const getHorses = async (): Promise<Horse[]> => {
  const { data = [] } = await api.get('/horse');
  return data;
};
