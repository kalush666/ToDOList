export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection failed',
  TIMEOUT_ERROR: 'Request timed out',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Internal server error occurred',
  VALIDATION_ERROR: 'Invalid data provided',
  UNKNOWN_ERROR: 'An unknown error occurred',
} as const;

export const ERROR_OPERATIONS = {
  GENERIC: 'operation',
  LOGIN: 'login',
  REGISTER: 'register',
  CREATE_USER: 'create user',
  UPDATE_USER: 'update user',
  DELETE_USER: 'delete user',
  FETCH_USER: 'fetch user',
  FETCH_USERS: 'fetch users',
  CREATE_TASK: 'create task',
  UPDATE_TASK: 'update task',
  DELETE_TASK: 'delete task',
  FETCH_TASK: 'fetch task',
  FETCH_TASKS: 'fetch tasks',
  FETCH_USER_TASKS: 'fetch user tasks',
} as const;

export const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
} as const;
