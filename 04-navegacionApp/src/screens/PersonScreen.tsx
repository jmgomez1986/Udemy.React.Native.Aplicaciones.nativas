import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  });

  return (
    <View>
      <Text>{JSON.stringify(params, null, 4)}</Text>
    </View>
  );
};

