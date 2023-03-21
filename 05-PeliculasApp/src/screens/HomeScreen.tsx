import React from 'react';
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top: marginTop } = useSafeAreaInsets();
  const getPosterColours = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const colours = await ImageColors.getColors(uri, {});

    console.log(uri);
    console.log(colours);
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: marginTop + 20 }}>
          <View style={{ height: 420, marginBottom: 20 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColours(index)}
            />
          </View>

          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Mejor Puntuadas" movies={topRated} />
          <HorizontalSlider title="Proximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
