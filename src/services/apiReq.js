import { instance } from './axios';

export const apiReq = async () => {
  const res = await instance.get('/facts/random');
  console.log('this is RRRESSS', res);
};
