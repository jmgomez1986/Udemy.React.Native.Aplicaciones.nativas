import React from 'react';
import { Text, View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeInScreen = () => {

  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}>
        <Text> </Text>
      </Animated.View>

      <Button title="Fade In" onPress={() => fadeIn()} />
      <Button title="Fade Out" onPress={() => fadeOut()} />
    </View>
  );
};
