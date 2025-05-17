import axios from "axios";

const API = axios.create({
  baseURL: process.env.LABS_PUBLIC_API_BASE_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true,
});


export default API
