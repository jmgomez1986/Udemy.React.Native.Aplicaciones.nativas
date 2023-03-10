import React, { createContext } from 'react';
import { useReducer } from 'react';
import { authReducer } from './AuthReducer';

// Definir como luce. Que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean,
  username?: string,
  favouriteIcon?: string
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favouriteIcon: undefined,
};

// Para decirle a React como luce y qye expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  
  return (
    <AuthContext.Provider value={{
      authState,
      signIn: () => {},
    }}>
      {children}
    </AuthContext.Provider>
  );
};

