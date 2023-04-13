import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Text Input" />

      <TextInput
        style={stylesTextInput.inputStyle}
      />
    </View>
  );
};

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
