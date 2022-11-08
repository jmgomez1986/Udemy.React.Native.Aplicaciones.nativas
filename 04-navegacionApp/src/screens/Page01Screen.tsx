import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page01Screen</Text>

      <Button
        title="Go To Page 2"
        onPress={() => navigation.navigate('Page02Screen')}
      />

      <Text style={styles.title}>Navigate with Params</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('PersonScreen', {
          id: 1,
          name: 'Matias',
        })}
      >
        <Text>Matias</Text>
      </TouchableOpacity>

    </View>
  );
};
