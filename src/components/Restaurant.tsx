import { Image, StyleSheet, Text, View } from 'react-native';
import { IRestaurant } from '../Models/restaurant';
import { elevation } from '../common/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAppNavigation from '../hooks/useAppNavigation';

interface IProps {
  restaurant: IRestaurant;
}

const Restaurant: React.FC<IProps> = ({
  restaurant: { name, rating, image_url, price, id },
}) => {
  const navigate = useAppNavigation();

  const handleRestauranPress = () => {
    navigate('Restaurant', {
      id,
    });
  };
  return (
    <TouchableOpacity onPress={handleRestauranPress}>
      <View style={[styles.elevation, styles.container]}>
        <Image source={{ uri: image_url }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  elevation,
  container: {
    marginRight: 25,
    backgroundColor: 'white',
    height: 100,
    alignSelf: 'stretch',
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },

  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: 'gold',
  },
});
