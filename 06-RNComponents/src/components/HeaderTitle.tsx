import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text
        style={{
          ...styles.title,
          color: colors.text,
        }}>
        {title}
      </Text>
    </View>
  );
};
