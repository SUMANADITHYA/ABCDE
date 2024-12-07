import axios from 'axios';

const BASE_URL = 'http://localhost:8081'; // Replace with your Spring Boot backend URL

export const api = axios.create({
  baseURL: BASE_URL,
});


export const registerUser = (userData) => api.post('/users/signup', userData);
export const login = (username, password) => 
  api.post('/users/login', { username, password });

export const fetchItems = () => api.get('/items');
export const addToCart = (token, itemId) => 
  api.post('/carts', { itemId }, { headers: { Authorization: `Bearer ${token}` } });

export const fetchCart = (token) => 
  api.get('/carts', { headers: { Authorization: `Bearer ${token}` } });

export const checkout = (token) => 
  api.post('/orders', {}, { headers: { Authorization: `Bearer ${token}` } });

export const fetchOrders = (token) => 
  api.get('/orders', { headers: { Authorization: `Bearer ${token}` } });
