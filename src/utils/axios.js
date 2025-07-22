import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
