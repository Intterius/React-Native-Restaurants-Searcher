import { FlatList, View } from 'react-native';
import { categories, ICategory } from '../common/categories';
import React, { useCallback } from 'react';
import CategoryItem from './CategoryItem';

interface IProps {
  category: string;
  setCategory: (value: string) => void;
}

type renderedItem = { item: ICategory; index: number };

const Categories: React.FC<IProps> = ({ category, setCategory }) => {
  const renderedItem = useCallback(
    ({ item: { name, imageSrc, id }, index }: renderedItem) => (
      <CategoryItem
        key={id}
        name={name}
        imageSrc={imageSrc}
        index={index}
        isActive={name === category}
        changeCategoryClick={setCategory}
      />
    ),
    [category]
  );

  const keyExtractor = useCallback((item) => {
    return item.id;
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={keyExtractor}
        renderItem={renderedItem}
      />
    </View>
  );
};

export default React.memo(Categories);
