import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';

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
      <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>

      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => renderItem(item)}

        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}

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
