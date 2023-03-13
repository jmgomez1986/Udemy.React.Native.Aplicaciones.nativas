import {StyleSheet} from 'react-native';

export const DefaultTheme = {
  colors: {
    primary: 'rgb(0, 104, 116)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(151, 240, 255)',
    onPrimaryContainer: 'rgb(0, 31, 36)',
    secondary: 'rgb(74, 98, 103)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(88, 86, 214)',
    onSecondaryContainer: 'rgb(5, 31, 35)',
  },
};

export const colours = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  btnBig: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btnBigText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuItem: {
    fontSize: 20,
  },
  menuButton: {
    marginVertical: 10,
  },
});
