import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem,
}

export const FlatListMenuItem = ( {menuItem}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
    >

      <View
        style={styles.container}>

        <Icon
          name={menuItem.icon}
          size={23}
          color="grey" />

        <Text
          style={styles.itemText}>
            {menuItem.name}
        </Text>

        <View style={{flex: 1}} />

        <Icon
          name={'chevron-forward-outline'}
          size={23}
          color="grey" />

      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
