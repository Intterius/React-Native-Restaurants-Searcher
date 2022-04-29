import { generateKey } from './uniqueId';
import { ImageSourcePropType } from 'react-native';

export interface ICategory {
  name: string;
  imageSrc: ImageSourcePropType;
  id: string;
}

export const categories: ICategory[] = [
  {
    name: 'Burger',
    imageSrc: require('../assets/burger.png'),
    id: generateKey(),
  },
  {
    name: 'Cake',
    imageSrc: require('../assets/cake.png'),
    id: generateKey(),
  },
  {
    name: 'Pasta',
    imageSrc: require('../assets/pasta.png'),
    id: generateKey(),
  },
  {
    name: 'Pizza',
    imageSrc: require('../assets/pizza.png'),
    id: generateKey(),
  },
  {
    name: 'Smoothie',
    imageSrc: require('../assets/smoothies.png'),
    id: generateKey(),
  },
  {
    name: 'Steak',
    imageSrc: require('../assets/steak.png'),
    id: generateKey(),
  },
];
