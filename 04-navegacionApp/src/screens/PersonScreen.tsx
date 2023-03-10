import React, {useContext, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const userRef = useRef<string>();
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  useEffect(() => {
    if (params.name !== userRef.current) {
      userRef.current = params.name;
      changeUsername(params.name);
    }
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params, null, 4)}
      </Text>
    </View>
  );
};

