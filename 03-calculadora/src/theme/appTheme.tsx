import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultadoChico: {
    color: 'rgba(255, 255, 255, .5)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
  },
});
