import React, { useReducer, createContext, useEffect } from 'react';
import { AppState, AppStateStatus, Appearance, useColorScheme } from 'react-native';
import { ThemeState, darkTheme, lightTheme, themeReducer } from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {

  useEffect(() => {
    AppState.addEventListener('change', (status: AppStateStatus) => {
      console.log({status});
      if (status === 'active') {
        (Appearance.getColorScheme() === 'light')
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const [theme, dispatch] = useReducer(
    themeReducer,
    (Appearance.getColorScheme() === 'dark')
      ? darkTheme
      : lightTheme
    );

  // const colorScheme = useColorScheme();
  // useEffect(() => {
  //   (colorScheme === 'light')
  //     ? setLightTheme()
  //     : setDarkTheme();
  // }, [colorScheme]);

  // const [theme, dispatch] = useReducer(
  //   themeReducer,
  //   (colorScheme === 'dark')
  //     ? darkTheme
  //     : lightTheme
  //   );

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
