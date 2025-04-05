import axios from 'axios';

// API endpoint for hello world
const API_URL = 'http://localhost:8000/api/hello-world/';

/**
 * Fetches the hello world message from the backend
 * @returns {Promise} - Promise with the response data
 */
export const getHelloWorldMessage = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching hello world message:', error);
    throw error;
  }
};