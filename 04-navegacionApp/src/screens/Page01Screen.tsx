import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page01Screen</Text>

      <Button
        title="Go To Page 2"
        onPress={() => navigation.navigate('Page02Screen')}
      />
    </View>
  );
};
