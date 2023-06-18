import {combineReducers} from '@reduxjs/toolkit';

import productsReducer from './slice/products';
import cartReducer from './slice/cart';
import persistReducer from 'redux-persist/es/persistReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
const reducer = combineReducers({
  products: productsReducer,
  cart: persistReducer(
    {
      key: 'cart',
      storage: AsyncStorage,
    },
    cartReducer,
  ),
});

export default reducer;
