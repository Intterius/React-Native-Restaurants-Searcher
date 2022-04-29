import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { useRestaurant } from '../hooks/useRestaurant';
import { useHeaderHeight } from '@react-navigation/elements';
import React, { useCallback, useEffect } from 'react';
import useAppRoute from '../hooks/useAppRoute';

const sizes = Dimensions.get('screen');

const RestaurantSreen = () => {
  const {
    params: { id },
  } = useAppRoute();

  const { searchRestaurant, data, isLoading } = useRestaurant();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  const renderedItem = ({ item }: { item: string }) => {
    return (
      <Image
        source={{ uri: item }}
        style={{
          width: '100%',
          height: Math.round((sizes.height - headerHeight) / 3),
        }}
      />
    );
  };

  const keyExtractor = useCallback((photo: string) => {
    return photo;
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={'large'} style={styles.spinnerPosition} />
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderedItem}
          data={data}
        />
      )}
    </View>
  );
};

export default RestaurantSreen;

const styles = StyleSheet.create({
  spinnerPosition: {
    marginTop: 50,
  },
});
