import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProduct = (id) => API.get(`/products/${id}`);
