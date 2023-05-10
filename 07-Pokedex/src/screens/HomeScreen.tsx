import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {

  const { top } = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <>

      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <Text style={{
          ...styles.title,
          ...styles.globalMargin,
          top: top + 20,
          color: 'black',
        }}>Pokedex</Text>
    </>
  );
};
