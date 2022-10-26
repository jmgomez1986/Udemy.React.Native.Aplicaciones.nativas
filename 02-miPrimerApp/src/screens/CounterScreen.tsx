import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableOpacityComponent,
} from 'react-native';

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

      <TouchableOpacity
        onPress={() => setContador(contador + 1)}
      >
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 100,
          }}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
