import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const { moviesInCinema, isLoading } = useMovies();
  const { top:marginTop } = useSafeAreaInsets();

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
    <View style={{marginTop: marginTop + 20}}>
      <MoviePoster
        movie={moviesInCinema[0]}
      />
    </View>
  );
};
