import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-be-the-hero-ongs.herokuapp.com',
});

export default api;