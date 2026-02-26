export default apiClient;

import axios from "axios"

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})

// Response interceptor (Clean Interceptor)
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    if (error.code === "ECONNABORTED") {
      return Promise.reject(new Error("Request Timed Out"))
    }
    return Promise.reject(error);
  }
)
