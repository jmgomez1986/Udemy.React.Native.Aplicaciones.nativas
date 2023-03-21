import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeInScreen } from './src/screens/FadeInScreen';
import { GradientProvider } from './src/context/GradienContext';

const AppState = ({children}: any) => {

  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  );

};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      <Navigation />
      {/* <FadeInScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
