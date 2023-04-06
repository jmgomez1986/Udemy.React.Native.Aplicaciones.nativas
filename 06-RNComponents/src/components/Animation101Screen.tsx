import React, { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {

  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }
    ).start(() => console.log('Animación terminada'));

    Animated.timing(
      top,
      {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.bounce,
      }
    ).start();
  };

  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }
    ).start(() => top.setValue(-100));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{
            translateY: top,
          }],
        }}
      />
      <View
        style={{}}
      >
        <Button
          title="Fade In"
          onPress={fadeIn}
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
