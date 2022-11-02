import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

  const {
    numeroAnterior,
    numero,
    cleaner,
    buildNumber,
    positiveNegative,
    deleteLastEntry,
    btnOperation,
    calculate,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultSmall}>{numeroAnterior}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={cleaner} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={deleteLastEntry} />
        <ButtonCalc text="/" color="#FF9427" action={btnOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="x" color="#FF9427" action={btnOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnOperation} />
      </View>

      {/* Fila de botones */}
      <View style={styles.row}>
        <ButtonCalc text="0" btnWide action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
