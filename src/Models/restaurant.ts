import { ImageSourcePropType } from 'react-native';

export interface IRestaurant {
  alias: string;
  categories: {
    alias: string;
    title: string;
  }[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  display_phone: number;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    country: string;
    display_address: [string, string, string];
    state: string;
    zip_code: string;
  };
  name: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: [];
  url: string;
}
