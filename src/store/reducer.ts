import {combineReducers} from '@reduxjs/toolkit';

import productsReducer from './slice/products';

const reducer = combineReducers({
  products: productsReducer,
});

export default reducer;
