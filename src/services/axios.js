import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-phonebook-2930.herokuapp.com/',
});

export default api;
