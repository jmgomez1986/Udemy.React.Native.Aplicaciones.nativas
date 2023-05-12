import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList } = usePokemonPaginated();
  console.log(simplePokemonList);

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
        }}
      >
        Pokedex
      </Text>
    </>
  );
};
