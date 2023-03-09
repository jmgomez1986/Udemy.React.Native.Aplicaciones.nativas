import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { colours } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const {top:paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
          tabBarPressColor: colours.primary,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: colours.primary,
          },
          tabBarStyle: {
            borderTopColor: colours.primary,
            borderTopWidth: 0,
            shadowColor: 'transparent', //en ios
            elevation: 0,
          },
          tabBarIcon: ({color}) => {
            let iconName: string = '';
            switch (route.name) {
              case 'Chat':
                iconName = 'Ch';
                break;
              case 'Contacts':
                iconName = 'Co';
                break;
              case 'Album':
                iconName = 'Al';
                break;
            }
            return <Text style={{color}}>{iconName}</Text>;
          },
        })
      }
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
