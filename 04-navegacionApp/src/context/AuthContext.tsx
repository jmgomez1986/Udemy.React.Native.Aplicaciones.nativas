import React, { createContext, useReducer } from 'react';
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
  logout: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUsername: (userName: string) => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (userName: string) => {
    dispatch({type: 'changeUsername', payload: userName});
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeFavIcon,
      changeUsername,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

