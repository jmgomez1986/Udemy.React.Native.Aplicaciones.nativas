import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animations101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{menuItem.name}</Text>
        <Icon
          name={menuItem.icon}
          size={60}
          color="black" />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
