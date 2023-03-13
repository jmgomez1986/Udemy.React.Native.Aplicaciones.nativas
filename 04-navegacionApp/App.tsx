import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { Tabs } from './src/navigator/Tabs';

const theme = {
  ...DefaultTheme,
};

const App = () => {
  return (

    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppState>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          <MenuLateral />
          {/* <Tabs /> */}
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  );
};

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;
