import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../../types/cartItem';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartItem[],
    total: 0,
  },

  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(
        item => item.product.id === product.id,
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.items = [...state.items, {product, quantity: 1}];
      }

      state.total += parseFloat(product.preco);
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find(
        item => item.product.id === productId,
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.items = state.items.filter(
            item => item.product.id !== productId,
          );
        } else {
          existingProduct.quantity--;
        }

        state.total -= parseFloat(existingProduct.product.preco);
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
