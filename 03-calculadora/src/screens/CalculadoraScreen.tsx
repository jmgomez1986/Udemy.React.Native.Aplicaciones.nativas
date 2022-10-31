import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>

        {/* Boton */}
        
        {/* Gris Oscuro */}
        <ButtonCalc text="C" color="#2D2D2D" />
        {/* Gris Claro */}
        <ButtonCalc text="+/-" color="#9B9B9B" />
        {/* Naranja */}
        <ButtonCalc text="del" color="#FF9427"/>

      </View>

    </View>
  );
};

