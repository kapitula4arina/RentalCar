import axios from 'axios';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

export const getCars = params => api.get('/cars', { params });

export const getCarById = id => api.get(`/cars/${id}`);

export const getBrands = () => api.get('/brands');
