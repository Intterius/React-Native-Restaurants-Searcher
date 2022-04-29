import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen';
import RestaurantSreen from './src/screens/RestaurantSreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen
          name='Restaurant'
          component={RestaurantSreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
