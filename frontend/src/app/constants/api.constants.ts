import { ADMIN } from '../../../../backend/src/constants/roles.constants';
export const API_CONFIG = {
  BASE_URL: '/api', // Use relative URL for proxy
  TIMEOUT: 10000,
} as const;

export const API_ENDPOINTS = {
  USERS: '/users',
  TASKS: '/tasks',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  ADMIN: '/admin',
} as const;

export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
