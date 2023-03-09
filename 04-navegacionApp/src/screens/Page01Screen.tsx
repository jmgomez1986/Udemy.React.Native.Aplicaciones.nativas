import { DrawerScreenProps } from '@react-navigation/drawer';

import React, { useEffect } from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colours } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colours.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page01Screen</Text>

      <Button
        title="Go To Page 2"
        onPress={() => navigation.navigate('Page02Screen')}
      />

      <Text style={{
          ...styles.title,
          marginVertical: 20,
        }}>
          Navigate with Params
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.btnBig,
            backgroundColor: '#5856d6',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Matias',
            })
          }>
          <Icon name="body-outline" color="white" size={35} />
          <Text style={styles.btnBigText}>Matias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.btnBig,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'María',
            })
          }>

          <Icon name="woman-outline" color="white" size={35} />
          <Text style={styles.btnBigText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
