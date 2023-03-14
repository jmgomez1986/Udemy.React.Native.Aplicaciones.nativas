import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {

  useEffect(() => {

    movieDB.get<MovieDBNowPlaying>('/now_playing').then((resp) => {
      console.log(resp.data);
    });

  });


  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};