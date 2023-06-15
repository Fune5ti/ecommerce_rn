import {Button, Card, IconButton, MD3Colors, Text} from 'react-native-paper';
import {Product} from '../../types/product';

interface Props {
  product: Product;
  onCartClick: (id: string) => void;
  onCardClick: (id: string) => void;
}
const ProductCard = ({product, onCardClick, onCartClick}: Props) => (
  <Card
    style={{marginBottom: 10, padding: 10}}
    onPress={() => onCardClick(product.id)}>
    <Card.Content style={{marginBottom: 10}}>
      <Text variant="titleLarge" style={{textTransform: 'capitalize'}}>
        {product.nome}
      </Text>
      <Text numberOfLines={3} variant="bodyMedium">
        {product.descricao}
      </Text>
    </Card.Content>
    <Card.Cover source={{uri: product.imagem}} />
    <Card.Actions>
      <Button icon="cart-plus" onPress={() => onCartClick(product.id)}>
        Adicionar ao carrinho
      </Button>
    </Card.Actions>
  </Card>
);

export default ProductCard;
