import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />

      <Button
        title="Abrir modal"
        onPress={() => setIsVisible(true)}
      />

      <Modal
        animationType="fade"
        visible={isVisible}
        transparent={true}
      >

        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <View style={{
            width: 200,
            height: 200,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5,
          }}>
            <HeaderTitle title="Modal Title" />
            <Text style={{
              fontSize: 16,
              fontWeight: '300',
              marginBottom: 25,
              }}>
                Cuerpo del modal
              </Text>
              <Button
                title="Cerrar"
                onPress={() => setIsVisible(false)}
              />
          </View>

        </View>

      </Modal>
    </View>
  );
};
