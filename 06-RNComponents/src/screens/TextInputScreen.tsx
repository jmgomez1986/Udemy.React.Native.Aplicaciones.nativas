import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {

  const { theme: { colors, dividerColor } } = useContext(ThemeContext);
  const { form, isSubscribed, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
	});

  return (
    <ScrollView>

      <View style={styles.globalMargin}>

        <HeaderTitle title="Text Input" />

        <TextInput
          style={{
            ...stylesTextInput.inputStyle,
            borderColor: colors.text,
            color: colors.text,
          }}
          placeholder="Ingrese su nombre"
          placeholderTextColor={dividerColor}
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={(value) => onChange(value, 'name')}
        />

        <TextInput
          style={{
            ...stylesTextInput.inputStyle,
            borderColor: colors.text,
            color: colors.text,
          }}
          placeholder="Ingrese su email"
          placeholderTextColor={dividerColor}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(value) => onChange(value, 'email')}
          keyboardType="email-address"
        />

        <View style={styles.switchRow}>
          <Text style={{
            ...styles.switchText,
            color: colors.text,
            }}
          >
            Suscribirse
          </Text>
          <CustomSwitch isOn={ isSubscribed } onChange={(value) => onChange(value, 'isSubscribed')}/>
        </View>

        <TextInput
          style={{
            ...stylesTextInput.inputStyle,
            borderColor: colors.text,
            color: colors.text,
          }}
          placeholder="Ingrese su teléfono"
          placeholderTextColor={dividerColor}
          onChangeText={(value) => onChange(value, 'phone')}
          keyboardType="phone-pad"
        />

        <HeaderTitle title={JSON.stringify(form, null, 3)} />

      </View>

    </ScrollView>

  );
};

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
  },
});
