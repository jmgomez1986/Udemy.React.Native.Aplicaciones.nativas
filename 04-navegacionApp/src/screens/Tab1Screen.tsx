import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles, colours } from '../theme/appTheme';


export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colours.primary} />
      </Text>
    </View>
  );
};
