import axios from "axios";

// Define the base URL for your API
const baseURL = "http://192.168.0.102:8000";

// Create an Axios instance with the base URL and default headers
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Interceptors for request and response handling
api.interceptors.request.use(
  (config) => {
    // Add token or any other headers if needed
    // const token = getToken(); // Function to get token
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
