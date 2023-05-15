import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Image, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../components/FadeInImage';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  console.log(simplePokemonList);

  return (
    <>

      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList
        data={ simplePokemonList }
        keyExtractor={ (pokemon) => pokemon.id }
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => (
          <FadeInImage
            uri={item.picture}
            style={{
              width: 100,
              height: 100,
            }}
          />
        ) }

        // Infinite Scroll
        onEndReached={ loadPokemons }
        onEndReachedThreshold={ 0.4 }

        ListFooterComponent={(
          <ActivityIndicator
            style={{height: 100}}
            size={20}
            color="grey"
          />
        )}
      />

      {/* <Text style={{
          ...styles.title,
          ...styles.globalMargin,
          top: top + 20,
          color: 'black',
        }}
      >
        Pokedex
      </Text> */}
    </>
  );
};
