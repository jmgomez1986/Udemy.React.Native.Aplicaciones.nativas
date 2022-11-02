import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

enum Operators {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const lastOperation = useRef<Operators>();

  const cleaner = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const buildNumber = (numberText: string) => {
    ///////////////////////////
    // Validaciones de la clase
    ///////////////////////////

    // // No aceptar doble "."
    // if (numero.includes('.') && numberText === '.') {return;}

    // if ( numero.startsWith('0') || numero.startsWith('-0')) {

    //   // Punto decimal
    //   if (numberText === '.') {
    //     setNumero(numero + numberText);

    //       // Evaluar si es otro cero y hay un "."
    //   } else if (numberText === '0' && numero.includes('.')) {
    //     setNumero(numero + numberText);

    //       // Evaluar si es diferente a "0" y no tiene "."
    //   } else if (numberText !== '0' && !numero.includes('.')) {
    //     setNumero(numberText);

    //       // Evitar "0000.0"
    //   } else if (numberText === '0' && !numero.includes('.')) {
    //     setNumero(numero);
    //   } else {
    //     setNumero(numero + numberText);
    //   }

    // } else {
    //   setNumero(numero + numberText);
    // }

    ///////////////////////////////////////////////////
    // Validaciones resumidas (Sacado de las preguntas)
    ///////////////////////////////////////////////////
    if (numberText === '.' && numero.includes('.')) {
      return;
    }
    setNumero(
      numero !== '0' || numberText === '.' ? numero + numberText : numberText,
    );
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const deleteLastEntry = () => {
    if (
      numero.length === 1 ||
      (numero.startsWith('-') && numero.length === 2)
    ) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const changeNumByLastNum = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnOperation = (operator: string) => {
    changeNumByLastNum();
    console.log(operator);

    switch (operator) {
      case '/':
        lastOperation.current = Operators.dividir;
        break;
      case '*':
        lastOperation.current = Operators.multiplicar;
        break;
      case '-':
        lastOperation.current = Operators.restar;
        break;
      case '+':
        lastOperation.current = Operators.sumar;
        break;
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior !== '0') &&
        (<Text style={styles.resultSmall}>{numeroAnterior}</Text>)
      }
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
        <ButtonCalc text="X" color="#FF9427" action={btnOperation} />
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
        <ButtonCalc text="=" color="#FF9427" action={cleaner} />
      </View>
    </View>
  );
};
