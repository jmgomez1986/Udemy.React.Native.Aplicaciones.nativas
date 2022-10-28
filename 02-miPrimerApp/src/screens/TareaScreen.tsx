import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.cajaMorada } />
      <View style={ styles.cajaNaranja } />
      <View style={ styles.cajaAzul } />
    </View>
  );
};

// Ejercicio 01
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     alignItems: 'flex-start',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     flex: 1,
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 02
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 03
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//     alignSelf: 'flex-end',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//     alignSelf: 'center',
//   },
// });

// Ejercicio 04
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'space-between',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//     alignSelf: 'flex-end',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     alignSelf: 'center',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//     alignSelf: 'flex-start',
//   },
// });

// Ejercicio 05
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cajaMorada: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 06
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//   },
//   cajaMorada: {
//     flex: 2,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     flex: 2,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     flex: 4,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 07
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 08
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     left: 100,
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 09
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#28425B',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cajaMorada: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#5856D6',
//     top: 100,
//   },
//   cajaNaranja: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#F0A23B',
//     left: 100,
//   },
//   cajaAzul: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//     backgroundColor: '#28C4D9',
//   },
// });

// Ejercicio 10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    top: 50,
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
