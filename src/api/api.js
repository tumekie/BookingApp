import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bookwithtumekie.online',
});

export default api;
