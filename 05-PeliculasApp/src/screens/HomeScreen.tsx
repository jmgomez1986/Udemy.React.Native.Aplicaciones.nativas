import React from 'react';
import { ActivityIndicator, View, Dimensions, Text, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesInCinema, moviesPopular, isLoading } = useMovies();
  const { top:marginTop } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>

      <View style={{marginTop: marginTop + 20}}>

        <View style={{height: 420, marginBottom: 20}}>
          <Carousel
            data={moviesInCinema}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="Populares" movies={moviesPopular} />
      </View>

    </ScrollView>
  );
};
