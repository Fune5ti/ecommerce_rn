import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Badge, IconButton, MD3Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

interface Props {
  count: number;
}
const CartIcon = ({count}: Props) => {
  const navigation = useNavigation();
  return (
    <View>
      <IconButton
        icon="cart"
        iconColor={MD3Colors.error50}
        size={30}
        onPress={() => navigation.navigate('Carrinho')}
      />
      {count > 0 && <Badge style={styles.badge}>{count}</Badge>}
    </View>
  );
};
const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 5,
    right: -8,
    backgroundColor: 'red',
  },
});

export default CartIcon;
