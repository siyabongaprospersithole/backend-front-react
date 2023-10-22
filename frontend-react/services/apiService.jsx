// services/apiService.js
import axios from 'axios';

// Replace with your API endpoint
//call API_BASE_URL from .env file
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log(API_BASE_URL)
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchBrands = async () => {
  try {
    const response = await apiService.get('/api/brands');
    return response.data ? response.data : [];
  } catch (error) {
    console.error('Error fetching brands:', error);
 
    throw error;
  }
};
