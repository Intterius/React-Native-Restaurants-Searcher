import { useState } from 'react';
import yelp from '../api/yelp';

export const useRestaurant = () => {
  const [{ data, isLoading, error }, setResults] = useState({
    data: [] as string[],
    error: null as null | string,
    isLoading: false,
  });

  const searchRestaurant = async (id: string) => {
    try {
      setResults((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const { data } = await yelp.get(`/${id}`);

      setResults((prevState) => ({
        ...prevState,
        isLoading: false,
        data: data.photos,
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

  return { searchRestaurant, data, isLoading, error };
};
