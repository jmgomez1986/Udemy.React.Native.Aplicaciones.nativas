import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: string;
  color?: string;
  btnWide?: boolean;
}

const {width, height} = Dimensions.get('window');

export const ButtonCalc = ({text, color = '#2D2D2D', btnWide = false}: Props) => {
  return (
    <TouchableOpacity>

        <View style={{
            ...styles.button,
            backgroundColor: color,
            width: (btnWide) ? width / 2 - 20 : width / 4 - 20,
            height: width / 4 - 20,
          }}>
        <Text style={{
            ...styles.buttonText,
            color: (color === '#9B9B9B') ? 'black' : 'white',
          }}>
        {text}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
});
