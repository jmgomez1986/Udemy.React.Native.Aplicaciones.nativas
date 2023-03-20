import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{ uri }} style={styles.actorImage} />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 5,
    height: 60,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 10,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
  actorInfo: {
    marginLeft: 10,
  },
});
