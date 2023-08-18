import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://senna.oncar.com.br/v1',
});
