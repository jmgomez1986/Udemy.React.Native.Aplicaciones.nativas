import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>

      <TouchableOpacity
        style={{...styles.button, backgroundColor: '#084F6A'}}
        activeOpacity={0.8}
        onPress={() => { navigation.navigate('PokemonScreen'); }}
      >
        <Icon
          style={{}}
          name="star-outline"
          color="red"
          size={30} />
        <Text
          style={{...styles.buttonText}}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
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

