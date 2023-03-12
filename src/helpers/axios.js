import axios from "axios";

// const baseURL = "https://dbest-ai-mentors-v2.azurewebsites.net"
const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
