import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page01Screen</Text>

      <Button
        title="Go To Page 2"
        onPress={() => navigation.navigate('Page02Screen')}
      />

      <Text style={styles.title}>Navigate with Params</Text>

      <View style={{flexDirection: 'row'}}>

        <TouchableOpacity
          style={{
              ...styles.btnBig,
              backgroundColor: '#5856d6',
            }}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Matias',
          })}
        >
          <Text style={styles.btnBigText}>Matias</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            ...styles.btnBig,
            backgroundColor: '#FF9427',
          }}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 2,
            name: 'Juan',
          })}
        >
          <Text style={styles.btnBigText}>Juan</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
};
