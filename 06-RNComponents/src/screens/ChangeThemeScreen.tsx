import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

  const {setLightTheme, setDarkTheme, theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />


    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={setLightTheme }
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}
      >
        <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}
        >
          Light
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={setDarkTheme }
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: colors.primary,
          justifyContent: 'center',
        }}
      >
        <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}
        >
          Dark
        </Text>
      </TouchableOpacity>

    </View>

    </View>
  );
};

