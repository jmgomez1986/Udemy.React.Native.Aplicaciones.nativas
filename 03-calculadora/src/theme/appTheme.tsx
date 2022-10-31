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
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultSmall: {
    color: 'rgba(255, 255, 255, .5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
