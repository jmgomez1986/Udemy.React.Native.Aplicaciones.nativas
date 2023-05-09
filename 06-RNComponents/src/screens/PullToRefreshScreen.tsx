import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

  const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Finished');
      setRefreshing(false);
      setData('Hola Mundo!!!');
    }, 3500);
  };

  return (

    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={50}
          progressBackgroundColor={dividerColor} // Android - IOS???
          colors={[colors.text]} // Android
          style={{backgroundColor: '#5856D6'}} // IOS
          tintColor={dark ? 'white' : 'black'} // IOS
          title="Refreshing" // IOS
        />
      }
    >

      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {
          data && <HeaderTitle title={data} />
        }
      </View>

    </ScrollView>
  );
};
