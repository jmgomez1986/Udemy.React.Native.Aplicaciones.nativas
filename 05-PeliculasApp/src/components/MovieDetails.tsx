import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  console.log(movieFull.genres);
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={20} color="grey" />
          <Text>  { movieFull.vote_average }</Text>

          <Text style={{marginLeft: 8}}>
            - { movieFull.genres.map((genre) => genre.name).join(', ')}
          </Text>

          {/* {
            movieFull.genres.map((genre) => (
              <Text>  {genre.name}, </Text>
            ))
          } */}

        </View>
      </View>

      {/* Casting */}

    </>
  );
};

const styles = StyleSheet.create({});
