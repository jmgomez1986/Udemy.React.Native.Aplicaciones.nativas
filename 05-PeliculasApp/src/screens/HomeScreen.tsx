import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
  const { moviesInCinema, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
