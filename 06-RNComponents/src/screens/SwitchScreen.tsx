import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

interface State {
  isActive: boolean,
  isHungry: boolean,
  isHappy : boolean
}

export const SwitchScreen = () => {

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
    <View style={styles.container}>

      <View>
        <HeaderTitle title="Switches" />
      </View>

      <View style={styles.swithRow}>
        <Text style={styles.swithText}>isActive</Text>

        <CustomSwitch isOn={ isActive } onChange={(value) => onChange(value, 'isActive')}/>
      </View>

      <Text style={styles.swithText}>
        { JSON.stringify(state, null, 5) }
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  swithRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  swithText: {
    fontSize: 25,
  },
});
