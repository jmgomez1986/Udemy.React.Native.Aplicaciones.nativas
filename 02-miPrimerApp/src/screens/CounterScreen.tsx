import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export function CounterScreen() {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        // El 1 abarca todo el espacio posible del padre
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          // Por defecto todo es posicion relativa
          top: -15,
        }}>
        Contador: {contador}
      </Text>

      <Button
        onPress={ () => setContador( contador + 1) }
        title="Click"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
