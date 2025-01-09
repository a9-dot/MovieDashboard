// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

export default axiosInstance;