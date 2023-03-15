import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
interface Props {
  movie: Movie,
  width?: number,
  height?: number,
}

type DetailscreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailScreen'>;

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation<DetailscreenNavigationProp>();

  return (
    <TouchableOpacity
    onPress={ () => navigation.navigate('DetailScreen', movie) }
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 8,
      }}
    >
      <View style={ styles.imageContainer}>
        <Image
          source={{uri}}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 10,
  },
});
