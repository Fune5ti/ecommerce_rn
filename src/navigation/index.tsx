import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import Home from '../screens/home';
import ProductDetails from '../screens/product-details';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produtos" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
