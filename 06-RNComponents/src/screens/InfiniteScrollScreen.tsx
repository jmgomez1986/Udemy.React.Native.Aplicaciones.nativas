import React from 'react';
import { View, Image, ActivityIndicator, FlatList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/200/300`}}
        style={{
          height: 400,
          width: '100%',
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>

      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => renderItem(item)}

        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}

        onEndReached={loadMore}
        onEndReachedThreshold={0.5}

        ListFooterComponent={() => (
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ActivityIndicator size={50} color="#5856D6" />
          </View>
        )}
      />

    </View>
  );
};

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
