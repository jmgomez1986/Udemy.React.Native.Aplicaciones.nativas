import React, { createContext } from 'react';
import { useReducer } from 'react';
import { authReducer } from './authReducer';

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
  changeFavIcon: (iconName: string) => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavIcon,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

