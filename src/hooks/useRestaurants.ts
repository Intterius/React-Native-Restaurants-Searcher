import { IRestaurant } from './../Models/restaurant';
import { useState } from 'react';
import yelp from '../api/yelp';

export const useRestaurants = () => {
  const [{ data, isLoading, error }, setResults] = useState({
    data: [] as IRestaurant[],
    error: null as null | string,
    isLoading: false,
  });

  const searchRestaurants = async (term: string) => {
    try {
      setResults((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const {
        data: { businesses },
      }: { data: { businesses: IRestaurant[] } } = await yelp.get('/search', {
        params: {
          location: 'Canada',
          term,
        },
      });

      setResults((prevState) => ({
        ...prevState,
        isLoading: false,
        data: businesses,
      }));
    } catch (err) {
      const { message } = err as Error;

      setResults({
        isLoading: false,
        error: message,
        data: [],
      });
    }
  };

  return { searchRestaurants, data, isLoading, error };
};
