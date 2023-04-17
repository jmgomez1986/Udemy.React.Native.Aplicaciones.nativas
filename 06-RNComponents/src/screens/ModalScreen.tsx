import React from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
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
          // height: 100,
          // width: 100,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>

          <View style={{
            backgroundColor: 'white',
          }}>
            <HeaderTitle title="Modal Title" />
            <Text>Cuerpo del modal</Text>
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
