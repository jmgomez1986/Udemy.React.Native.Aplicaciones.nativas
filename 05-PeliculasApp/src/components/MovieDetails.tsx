import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

  const { format } = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

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
        </View>

        {/* Descripcion */}
        <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 10}}>
          Descripción
        </Text>
        <Text style={{fontSize: 16, marginTop: 3}}>{movieFull.overview}</Text>
        {/* Presupuesto */}
        <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 10}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16, marginTop: 3}}>{format(movieFull.budget)}</Text>

      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 10, marginHorizontal: 20}}>
          Actores
        </Text>
        <CastItem actor={cast[0]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
