import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { elevation } from '../common/styles';
import React from 'react';

interface IProps {
  imageSrc: ImageSourcePropType;
  name: string;
  index: number;
  isActive: boolean;
  changeCategoryClick: (value: string) => void;
}

const CategoryItem: React.FC<IProps> = ({
  name,
  imageSrc,
  index,
  isActive,
  changeCategoryClick,
}) => {
  const handleChangeCategoryPress = () => {
    changeCategoryClick(name);
  };

  return (
    <TouchableOpacity onPress={handleChangeCategoryPress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          isActive && { backgroundColor: 'rgb(241,186,87)' },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CategoryItem);

const styles = StyleSheet.create({
  container: {
    minWidth: 70,
    minHeight: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: 'white', //'rgb(241,186,87)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  elevation,
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: '700',
  },
});
