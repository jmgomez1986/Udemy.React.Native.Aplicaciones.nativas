import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />

      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          backgroundColor: '#5856D6',
          justifyContent: 'center',
        }}
        activeOpacity={0.8}
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

