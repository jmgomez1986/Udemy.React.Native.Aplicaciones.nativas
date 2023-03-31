import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animations101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animations102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>{menuItem.name}</Text>
        <Icon
          name={menuItem.icon}
          size={60}
          color="black" />
      </View>
    );
  };

  const renderMenuHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={styles.title}>Opciones del Menu</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8
      }}/>
    );
  };

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => renderMenuHeader()}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};
