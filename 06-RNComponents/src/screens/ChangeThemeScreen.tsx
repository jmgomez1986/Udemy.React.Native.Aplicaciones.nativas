import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

  const {setLightTheme} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={setLightTheme }
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
        }}
      >
        <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22,
          }}
        >
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};

