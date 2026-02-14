import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const getCurrentUser = () =>
  API.get("/auth/me");

export const logoutUser = () =>
  API.post("/auth/logout");

export default API;