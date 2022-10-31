import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoChico}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>


      <View>

        {/* Boton */}
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            1
          </Text>
        </View>


      </View>


    </View>
  );
};

