import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from '../store';
import {addToCart} from '../store/slice/cart';
import formatPrice from '../utils/formatPrice';
const ProductDetails = ({route}: {route: any}) => {
  const {product} = route.params;
  const dispatch = useDispatch();

  const addItemToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imagem}} />

      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.box}>
            <Text style={styles.label}>Categoria</Text>
            <Text style={styles.text}>{product.categoria}</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}>Material</Text>
            <Text style={styles.text}>{product.material}</Text>
          </View>
        </View>

        <Text style={styles.title}>{product.nome}</Text>
        <Text style={styles.price}>Preco: {formatPrice(product.preco)}</Text>
        <Text style={styles.description}>{product.descricao}</Text>

        <Button
          mode="contained"
          onPress={() => addItemToCart()}
          style={styles.buttonStyle}>
          Add to Cart
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    marginTop: 'auto',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  infoContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  box: {
    width: '48%',
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
  },
});
export default ProductDetails;
