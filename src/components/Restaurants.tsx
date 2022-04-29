import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useRestaurants } from '../hooks/useRestaurants';
import React, { useCallback, useEffect } from 'react';
import { IRestaurant } from '../Models/restaurant';
import Restaurant from './Restaurant';

interface IProps {
  term: string;
}

const Restaurants: React.FC<IProps> = ({ term }) => {
  const { searchRestaurants, isLoading, error, data } = useRestaurants();

  const renderedItem = useCallback(
    ({ item }: { item: IRestaurant }) => {
      return <Restaurant restaurant={item} />;
    },
    [data]
  );

  const extractedKey = useCallback((item: IRestaurant) => {
    return item.id;
  }, []);

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
      {isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={extractedKey}
          renderItem={renderedItem}
        />
      )}
    </View>
  );
};

export default React.memo(Restaurants);

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
  },
});
