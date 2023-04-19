import React from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useState } from 'react';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {

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
          color="#5856D6"
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
