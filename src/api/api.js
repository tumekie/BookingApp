import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.217.150.137:8080',
});

export default api;
