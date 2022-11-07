import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page03Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page03Screen</Text>

      <Button
        title="Previous Page"
        onPress={() => navigation.pop()}
      />

      <Button
        title="Go To Page 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
