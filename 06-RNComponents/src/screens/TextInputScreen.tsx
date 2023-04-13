import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ScrollView } from 'react-native-gesture-handler';
interface Form {
  name: string,
  email: string,
  phone: string,
}

export const TextInputScreen = () => {

  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: keyof Form) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (

     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <ScrollView>

        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  */}

          <View style={styles.globalMargin}>

            <HeaderTitle title="Text Input" />

            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value) => onChange(value, 'name')}
            />

            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesTextInput.inputStyle}
              placeholder="Ingrese su teléfono"
              onChangeText={(value) => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />

          </View>

        {/* </TouchableWithoutFeedback> */}

      </ScrollView>

     </KeyboardAvoidingView>

  );
};

const stylesTextInput = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
