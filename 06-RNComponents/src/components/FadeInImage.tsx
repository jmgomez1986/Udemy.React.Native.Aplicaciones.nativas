import React, { useContext } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useState } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {

  const { theme: { colors } } = useContext(ThemeContext);
  const {opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn(1000);
  };

  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        isLoading &&
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={50}
          color={colors.primary}
        />
      }

      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={[
          style,
          {opacity},
        ]}
      />

    </View>
  );
};
