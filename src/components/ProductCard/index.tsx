import React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {Product} from '../../types/product';
import {StyleSheet} from 'react-native';
import formatPrice from '../../utils/formatPrice';

interface Props {
  product: Product;
  onCartClick: () => void;
  onCardClick: () => void;
}
const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardContent: {
    marginBottom: 10,
  },
  cardCover: {
    height: 200,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  cardTitle: {
    textTransform: 'capitalize',
  },
  price: {
    padding: 10,
  },
});
const ProductCard = ({product, onCardClick, onCartClick}: Props) => (
  <Card style={styles.card} onPress={() => onCardClick()}>
    <Card.Content style={styles.cardContent}>
      <Text variant="titleLarge" style={styles.cardTitle}>
        {product.nome}
      </Text>
      <Text numberOfLines={3} variant="bodyMedium">
        {product.descricao}
      </Text>
    </Card.Content>
    <Card.Cover source={{uri: product.imagem}} />
    <Text numberOfLines={1} variant="bodyLarge" style={styles.price}>
      Preco: {formatPrice(parseFloat(product.preco))}
    </Text>
    <Card.Actions>
      <Button icon="cart-plus" onPress={() => onCartClick()}>
        Adicionar ao carrinho
      </Button>
    </Card.Actions>
  </Card>
);

export default ProductCard;
