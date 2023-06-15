import {useSelector} from 'react-redux';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {RootState, dispatch} from '../store';

import {Text, MD2Colors, useTheme} from 'react-native-paper';
import {useEffect} from 'react';
import {getProducts} from '../store/slice/products';
import {Product} from '../types/product';
import ProductCard from '../components/ProductCard';

const Home = ({navigation}: {navigation: any}) => {
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      product={item}
      onCardClick={id => navigation.navigate('ProductDetail', {product: item})}
      onCartClick={id => console.log(id, 'cart')}
    />
  );
  const {loading, products, error} = useSelector(
    (state: RootState) => state.products,
  );
  const theme = useTheme();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: theme.colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
        <FlatList
          style={{backgroundColor: theme.colors.background}}
          data={products}
          renderItem={renderItem}
          keyExtractor={(item: Product) => item.id}
        />
      )}
    </View>
  );
};

export default Home;
