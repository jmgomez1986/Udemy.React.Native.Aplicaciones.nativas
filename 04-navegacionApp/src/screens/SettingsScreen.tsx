import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colours, styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20,}}
    >
      <Text style={styles.title}>SettingsScreen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favouriteIcon && (
          <Icon
            style={{alignSelf: 'center'}}
            name={authState.favouriteIcon}
            size={200}
            color={colours.primary} />
        )
      }

    </View>
  );
};
