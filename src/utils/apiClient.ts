import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-cloud-technical-test.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
