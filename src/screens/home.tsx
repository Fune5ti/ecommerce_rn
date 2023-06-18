/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {RootState, dispatch} from '../store';

import {
  Text,
  MD2Colors,
  useTheme,
  MD3Theme,
  IconButton,
  Modal,
} from 'react-native-paper';
import {useEffect} from 'react';
import {
  clearFilters,
  filterProducts,
  getProducts,
} from '../store/slice/products';
import {Product} from '../types/product';
import ProductCard from '../components/ProductCard';
import {addToCart} from '../store/slice/cart';
import ProductFilter from '../components/ProductFilter';

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    noData: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listStyle: {
      padding: 20,
    },
    modal: {backgroundColor: 'white', padding: 20, height: 400},
  });

const Home = ({navigation}: {navigation: any}) => {
  const {
    loading,
    filteredProducts,
    materials,
    categories,
    products,
    filterValues,
  } = useSelector((state: RootState) => state.products);
  const theme = useTheme();
  const homeStyles = styles(theme);

  const [showFilter, setShowFilter] = React.useState(false);
  const hideModal = () => setShowFilter(false);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addItemToCart = useCallback((product: Product) => {
    dispatch(addToCart(product));
  }, []);

  const clearFiltersCallback = useCallback(() => {
    dispatch(clearFilters());
  }, []);

  const applyFilters = useCallback(
    (
      material: string,
      sortByPrice: boolean,
      sortOrder: 'ascending' | 'descending',
      category: string,
    ) => {
      dispatch(
        filterProducts(material, sortByPrice, sortOrder, category, products),
      );
    },
    [products],
  );

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerLeft: () => (
        <IconButton icon="filter" onPress={() => setShowFilter(true)} />
      ),
    });
  }, [navigation]);
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      product={item}
      onCardClick={() => navigation.navigate('ProductDetail', {product: item})}
      onCartClick={() => addItemToCart(item)}
    />
  );
  return (
    <View style={homeStyles.container}>
      {filteredProducts.length === 0 && !loading && (
        <Text style={homeStyles.noData} variant="headlineLarge">
          Nenhum produto encontrado
        </Text>
      )}
      {loading ? (
        <>
          <Text variant="headlineLarge">Carregando Produtos...</Text>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.red800}
            size="large"
          />
        </>
      ) : (
        <>
          <FlatList
            style={homeStyles.listStyle}
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item: Product) => item.id}
          />
          <Modal
            visible={showFilter}
            style={homeStyles.modal}
            onDismiss={hideModal}
            dismissable>
            <ProductFilter
              initialValues={filterValues}
              onClose={hideModal}
              materials={materials}
              categories={categories}
              clearFilters={() => clearFiltersCallback()}
              applyFilters={(material, sortByPrice, sortOrder, category) =>
                applyFilters(material, sortByPrice, sortOrder, category)
              }
            />
          </Modal>
        </>
      )}
    </View>
  );
};

export default Home;
