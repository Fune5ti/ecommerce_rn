import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../types/product';
import {dispatch} from '..';

const slice = createSlice({
  name: 'suplier-products',
  initialState: {
    loading: false,
    error: null,
    products: [] as Product[],
    filteredProducts: [] as Product[],
    categories: [] as string[],
    materials: [] as string[],
    filterValues: {
      category: 'none',
      material: 'none',
      sortByPrice: true,
      sortOrder: 'ascending' as 'ascending' | 'descending',
    },
  },
  reducers: {
    startGetProducts(state) {
      state.loading = true;
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.categories = Array.from(
        new Set(action.payload.map((product: Product) => product.categoria)),
      );
      state.materials = Array.from(
        new Set(action.payload.map((product: Product) => product.material)),
      );
      state.error = null;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    clearFilters(state) {
      state.filteredProducts = state.products;
    },
    setFilterValues(state, action) {
      state.filterValues = action.payload;
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
export const clearFilters = () => {
  return async () => {
    dispatch(slice.actions.clearFilters());
  };
};
export const filterProducts = (
  material: string,
  sortByPrice: boolean,
  sortOrder: 'ascending' | 'descending',
  category: string,
  products: Product[],
) => {
  return async () => {
    // Filter by material
    let filteredProducts = products;

    if (material !== 'none') {
      filteredProducts = filteredProducts.filter(
        (product: Product) =>
          product.material.toLowerCase() === material.toLowerCase(),
      );
    }

    if (sortByPrice) {
      const compare = (a: Product, b: Product) => {
        const priceA = parseFloat(a.preco);
        const priceB = parseFloat(b.preco);

        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
        return 0;
      };

      filteredProducts.sort(compare);

      // Reverse if sortOrder is descending
      if (sortOrder === 'descending') {
        filteredProducts.reverse();
      }
    }

    // Filter by category
    if (category !== 'none') {
      filteredProducts = filteredProducts.filter(
        (product: Product) =>
          product.categoria.toLowerCase() === category.toLowerCase(),
      );
    }
    dispatch(slice.actions.setFilteredProducts(filteredProducts));
    dispatch(
      slice.actions.setFilterValues({
        material,
        sortByPrice,
        sortOrder,
        category,
      }),
    );
  };
};
