import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000" || "https://practice-labs-be.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true,
});


export default API
