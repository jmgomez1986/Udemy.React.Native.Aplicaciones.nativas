import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'rgb(255, 45, 85)',
    // background: 'black',
    // card: string;
    // text: string;
    // border: string;
    // notification: string;
  },
};

const App = () => {
  return (
    <NavigationContainer
      theme={customTheme}
    >
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
