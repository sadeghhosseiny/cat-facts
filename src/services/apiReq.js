import { instance } from './axios';

export const apiReq = async () => {
  return await instance.get('/facts/random');
};
