import {Text} from 'react-native-paper';

const ProductDetails = ({route, navigation}: {route: any; navigation: any}) => {
  const {product} = route.params;
  return <Text>Testing {product.id}</Text>;
};
export default ProductDetails;
