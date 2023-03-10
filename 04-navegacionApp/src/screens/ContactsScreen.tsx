import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View>
      <Text>ContactsScreen</Text>

      {
        !authState.isLoggedIn && <Button title="Sign In" onPress={signIn} />
      }
    </View>
  );
};
