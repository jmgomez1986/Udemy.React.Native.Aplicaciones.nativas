import React, { createContext } from 'react';

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
  return (
    <AuthContext.Provider value={{
      authState: authInitialState,
      signIn: () => {},
    }}>
      {children}
    </AuthContext.Provider>
  );
};

