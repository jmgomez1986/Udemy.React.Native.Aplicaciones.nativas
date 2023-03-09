import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page01Screen} from '../screens/Page01Screen';
import {Page02Screen} from '../screens/Page02Screen';
import {Page03Screen} from '../screens/Page03Screen';
import {PersonScreen} from '../screens/PersonScreen';
import { styles } from '../../../03-calculadora/src/theme/appTheme';

export type RootStackParams = {
  Page01Screen: undefined;
  Page02Screen: undefined;
  Page03Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page02Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0, // Android
          shadowColor: 'transparent', // IOS
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page01Screen"
        options={{title: 'Page 01'}}
        component={Page01Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Person'}}
        component={PersonScreen}
      />
      <Stack.Screen
        name="Page02Screen"
        options={{title: 'Page 02'}}
        component={Page02Screen}
      />
      <Stack.Screen
        name="Page03Screen"
        options={{title: 'Page 03'}}
        component={Page03Screen}
      />
    </Stack.Navigator>
  );
};
