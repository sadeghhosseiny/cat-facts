import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://cat-fact.herokuapp.com',
  // /facts/random
});