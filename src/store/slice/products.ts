import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../types/product';
import {dispatch} from '..';

const slice = createSlice({
  name: 'suplier-products',
  initialState: {
    loading: false,
    error: null,
    products: [] as Product[],
  },
  reducers: {
    startGetProducts(state) {
      state.loading = true;
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.error = null;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export default slice.reducer;

export const getProducts = () => {
  return async () => {
    try {
      dispatch(slice.actions.startGetProducts());
      const response = await fetch(
        'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider',
      );
      const data = await response.json();
      dispatch(slice.actions.setProducts(data));
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
};
