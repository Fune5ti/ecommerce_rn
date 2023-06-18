import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {RootState, useSelector} from '../store';
import {CartItem} from '../types/cartItem';
import {Card, Text} from 'react-native-paper';
import formatPrice from '../utils/formatPrice';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  const renderItem = ({item}: {item: CartItem}) => (
    <Card style={styles.itemContainer}>
      <Card.Content>
        <Text style={styles.title}>{item.product.nome}</Text>
        <Text>Quantidade: {item.quantity}</Text>
        <Text>
          Preco Unitario: {formatPrice(parseFloat(item.product.preco))}
        </Text>
        <Text>
          Preco Total:{' '}
          {formatPrice(parseFloat(item.product.preco) * item.quantity)}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={cartItems.length === 0 ? styles.empty : styles.container}>
      {cartItems.length === 0 ? (
        <Text variant="headlineMedium">Nenhum item no carrinho</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.product.id}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: {formatPrice(cartTotal)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    height: '100%',
  },
  empty: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  itemContainer: {
    marginBottom: 16,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    marginTop: 16,
    paddingTop: 16,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    textTransform: 'capitalize',
  },
});

export default Cart;
