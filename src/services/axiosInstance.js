// services/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use environment variable for base URL
  timeout: 10000, // Set a timeout for requests (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authorization headers if needed
axiosInstance.interceptors.request.use((config) => {
  // Optionally, add token to headers
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
