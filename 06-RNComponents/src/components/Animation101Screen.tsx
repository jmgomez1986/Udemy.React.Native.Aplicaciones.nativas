import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{
            translateY: position,
          }],
        }}
      />
      <View
        style={{}}
      >
        <Button
          title="Fade In"
          onPress={() => {
              fadeIn();
              startMovingPosition(-100);
            }
          }
        />

        <View style={{marginBottom: 10}} />

        <Button
          title="Fade Out"
          onPress={fadeOut}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5856D6',
  },
});
