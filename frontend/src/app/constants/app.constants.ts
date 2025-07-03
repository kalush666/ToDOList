export const APP_CONFIG = {
  NAME: 'ToDo List App',
  VERSION: '1.0.0',
  DESCRIPTION: 'A simple task management application',
} as const;

export const LOCAL_STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'current_user',
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
} as const;

export const ROUTES = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  TASKS: '/tasks',
  USERS: '/users',
  DASHBOARD: '/dashboard',
} as const;
