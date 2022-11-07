import {useNavigation} from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page02Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page02Screen</Text>

      <Button
        title="Go To Page 3"
        onPress={() => navigator.navigate('Page03Screen' as never)}
      />
    </View>
  );
};
