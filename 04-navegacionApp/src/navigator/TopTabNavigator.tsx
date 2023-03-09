import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
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
                iconName = 'chatbox-ellipses-outline';
                break;
              case 'Contacts':
                iconName = 'people-outline';
                break;
              case 'Albums':
                iconName = 'albums-outline';
                break;
            }

            return <Icon name={iconName} size={20} color={color} />;
          },
        })
      }
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
