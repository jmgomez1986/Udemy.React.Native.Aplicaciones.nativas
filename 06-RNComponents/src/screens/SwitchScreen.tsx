import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

interface State {
  isActive: boolean,
  isHungry: boolean,
  isHappy : boolean
}

export const SwitchScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);

  const [state, setState] = useState<State>({
    isActive: true,
    isHungry: false,
    isHappy:true,
  });

  const { isActive, isHungry, isHappy } = state;

  const onChange = (value: boolean, field: keyof State) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>

      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text,
          }}
        >
          isActive
        </Text>
        <CustomSwitch isOn={ isActive } onChange={(value) => onChange(value, 'isActive')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text,
          }}
        >
          isHungry
        </Text>
        <CustomSwitch isOn={ isHungry } onChange={(value) => onChange(value, 'isHungry')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text,
          }}
        >
          isHappy
        </Text>
        <CustomSwitch isOn={ isHappy } onChange={(value) => onChange(value, 'isHappy')}/>
      </View>

      <Text style={{
        ...styles.switchText,
        color: colors.text,
        }}
      >
        { JSON.stringify(state, null, 5) }
      </Text>

    </View>
  );
};
