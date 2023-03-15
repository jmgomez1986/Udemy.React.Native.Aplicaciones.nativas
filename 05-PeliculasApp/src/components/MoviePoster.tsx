import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie,
  width?: number,
  height?: number,
}

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{
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
    </View>
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