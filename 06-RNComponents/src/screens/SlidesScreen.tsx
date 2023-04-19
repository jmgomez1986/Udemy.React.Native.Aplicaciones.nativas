import React from 'react';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const SlidesScreen = () => {
  return (
    <View style={styles.globalMargin}>

      <HeaderTitle title="Slides" />

    </View>
  );
};
