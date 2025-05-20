/**
 * Constantes globais do aplicativo
 */

// Configuração da API
export const API = {
  BASE_URL: 'https://api.motoconnect.com', // Substitua pela URL real da sua API
  TIMEOUT: 10000, // 10 segundos
  VERSION: 'v1',
};

// Chaves para armazenamento local
export const STORAGE_KEYS = {
  AUTH_TOKEN: '@MotoConnect:authToken',
  USER_DATA: '@MotoConnect:userData',
  SETTINGS: '@MotoConnect:settings',
};

// Configurações gerais do app
export const APP_CONFIG = {
  APP_NAME: 'MotoConnect',
  APP_VERSION: '1.0.0',
  COMPANY_NAME: 'Mottu',
  SUPPORT_EMAIL: 'support@mottu.com',
  PRIVACY_POLICY_URL: 'https://mottu.com/privacy',
  TERMS_URL: 'https://mottu.com/terms',
};

// Constantes para mensagens e erros
export const MESSAGES = {
  NETWORK_ERROR: 'Verifique sua conexão com a internet.',
  SERVER_ERROR: 'Ops! Estamos com problemas no servidor. Tente novamente mais tarde.',
  LOGIN_ERROR: 'E-mail ou senha incorretos.',
  REGISTER_SUCCESS: 'Cadastro realizado com sucesso!',
  REQUIRED_FIELD: 'Este campo é obrigatório.',
  INVALID_EMAIL: 'Por favor, insira um e-mail válido.',
  PASSWORD_MIN_LENGTH: 'A senha deve ter pelo menos 6 caracteres.',
};

export const ROUTES = {
  SPLASH: 'Splash',
  LOGIN: 'Login',
  REGISTER: 'Register',
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
};

export default {
  API,
  STORAGE_KEYS,
  APP_CONFIG,
  MESSAGES,
  ROUTES,
};