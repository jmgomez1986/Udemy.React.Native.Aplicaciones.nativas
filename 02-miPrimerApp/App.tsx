import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';

export const App = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>

      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      <BoxObjectModelScreen />

    </SafeAreaView>
  );
};
