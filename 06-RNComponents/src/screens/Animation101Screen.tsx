import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          backgroundColor: colors.primary,
          marginBottom: 20,
          opacity,
          transform: [{
            translateY: position,
          }],
        }}
      />
      <View style={{}}>
        <Button
          title="Fade In"
          color={colors.primary}
          onPress={() => {
              fadeIn();
              startMovingPosition(-100);
            }
          }
        />
        <View style={{marginBottom: 10}} />
          <Button
            title="Fade Out"
            color={colors.primary}
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
  box: {
    width: 150,
    height: 150,
  },
});
