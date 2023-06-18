/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import Home from '../screens/home';
import ProductDetails from '../screens/product-details';
import {NavigationContainer} from '@react-navigation/native';
import CartIcon from '../components/CartIcon';
import {RootState, useSelector} from '../store';
import Cart from '../screens/cart';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const count = useSelector((state: RootState) => state.cart.items.length);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({}) => {
            return {
              headerRight: () => <CartIcon count={count} />,
            };
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetails}
          options={({route}) => {
            const {product} = route?.params;
            return {
              title: product.nome,
              headerRight: () => <CartIcon count={count} />,
            };
          }}
        />
        <Stack.Screen name="Carrinho" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
