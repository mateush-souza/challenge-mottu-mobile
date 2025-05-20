/**
 * Arquivo central de tipos e interfaces do aplicativo
 */

// Tipo de usuário
export interface User {
  id: string;
  name: string;
  email: string;
  registrationNumber: string;
  avatar?: string;
  createdAt: string;
}

// Tipo de resposta de autenticação da API
export interface AuthResponse {
  token: string;
  user: User;
}

// Tipo de dados do formulário de login
export interface LoginFormData {
  email: string;
  password: string;
}

// Tipo de dados do formulário de cadastro
export interface RegisterFormData {
  email: string;
  fullName: string;
  registrationNumber: string;
  password: string;
}

// Tipo de erro da API
export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

// Tipo do contexto de autenticação
export interface AuthContextData {
  user: User | null;
  signed: boolean;
  loading: boolean;
  signIn(data: LoginFormData): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

// Tipo para o tema
export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    light: string;
    dark: string;
    white: string;
    black: string;
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  shadows: {
    sm: object;
    md: object;
    lg: object;
  };
}