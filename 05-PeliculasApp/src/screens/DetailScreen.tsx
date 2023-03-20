import React from 'react';
import { Dimensions, Image, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMovieDetail(movie.id);

  return (
    <ScrollView>

      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>

      <View style={{...styles.marginContainer}}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {
        isLoading
          ? <ActivityIndicator color="red" size={100} style={{marginTop: 20}}/>
          : <MovieDetails movieFull={movieFull!} cast={cast}/>
      }

    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 10,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    overflow: 'hidden',
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
});
