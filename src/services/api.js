import axios from 'axios';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

// Отримати всі машини
export const getCars = params => api.get('/cars', { params });

// Отримати конкретне авто
export const getCarById = id => api.get(`/cars/${id}`);

// Отримати бренди
export const getBrands = () => api.get('/brands');
