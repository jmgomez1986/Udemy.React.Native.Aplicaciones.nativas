import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeInScreen } from './src/screens/FadeInScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <FadeInScreen />
    </NavigationContainer>
  );
};

export default App;
