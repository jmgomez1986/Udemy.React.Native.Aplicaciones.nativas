import React from 'react';
import {Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colours, DefaultTheme} from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';

const theme = {
  ...DefaultTheme,
};

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabsIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colours.primary,
        tabBarStyle: {
          borderTopColor: colours.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <BottomTabsIOS.Screen name="Tab1Screen" options={{
          title: 'Tab1',
          tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>
        }} component={Tab1Screen} /> */}
      <BottomTabsIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabsIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabsIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsIOS.Navigator>
  );
};

const BottomTabsAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
      theme={theme}
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colours.primary,
      }}
      activeColor="#FFFFFF"
      // inactiveColor="#FFFFFF"
      initialRouteName="Tab1Screen"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'T3';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabsAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabsAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabsAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsAndroid.Navigator>
  );
};
