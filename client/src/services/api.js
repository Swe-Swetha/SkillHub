import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

export const users = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  getSkills: () => api.get('/users/skills'),
  updateSkills: (data) => api.put('/users/skills', data),
};

export const skills = {
  getAll: () => api.get('/skills'),
  search: (query) => api.get(`/skills/search?q=${query}`),
};

export const sessions = {
  create: (data) => api.post('/sessions', data),
  getAll: () => api.get('/sessions'),
  update: (id, data) => api.put(`/sessions/${id}`, data),
};

export const blogs = {
  create: (data) => api.post('/blogs', data),
  getAll: () => api.get('/blogs'),
  getOne: (id) => api.get(`/blogs/${id}`),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

export default api;