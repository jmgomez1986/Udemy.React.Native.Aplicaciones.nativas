import React, { useState, useRef, useContext } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/theme/ThemeContext';

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface Props extends StackScreenProps<any, any> {}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = ({navigation}: Props) => {
  const { theme: { colors } } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  const isVisible = useRef(false);
  const {opacity, fadeIn} = useAnimation();
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />

        <Text style={{...styles.title, marginBottom: 10, color: colors.primary}}>{item.title}</Text>
        <Text style={{...styles.subTitle, color: colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            // setIsVisible(true);
            isVisible.current = true;
            fadeIn();
          }
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />

        {/* {
          isVisible && ( */}
            <Animated.View style={{opacity}}>
              <TouchableOpacity
                style={{...styles.button, backgroundColor: colors.primary}}
                activeOpacity={0.8}
                onPress={() => {
                  if (isVisible.current) {
                    navigation.navigate('HomeScreen');
                  }
                }}>
                <Icon
                  style={{marginTop: 5}}
                  name="chevron-forward-outline"
                  color="white"
                  size={30} />
                <Text
                  style={{...styles.buttonText}}>
                  Entrar
                </Text>
              </TouchableOpacity>
            </Animated.View>
        {/*    )
        } */  }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    paddingHorizontal: 25,
    alignItems: 'center',
    width: 130,
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
