import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, View } from 'react-native';

export const SwithchScreen = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#D9D9DB', true: '#5856D6'}}
        thumbColor={Platform.OS === 'android' ? '#5858D6' : '#'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
