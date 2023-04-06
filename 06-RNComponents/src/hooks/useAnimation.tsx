import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Animación terminada'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => position.setValue(-100));
  };

  const startMovingPosition = (initPosition: number = -100, duration: number = 700) => {
    position.setValue(initPosition);

    Animated.timing(
      position,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
        // easing: Easing.bounce,
      }
    ).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
    position,
    startMovingPosition,
  };
};
