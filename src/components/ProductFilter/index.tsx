import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface Props {
  materials: string[];
  categories: string[];
  initialValues: {
    material: string;
    sortByPrice: boolean;
    sortOrder: 'ascending' | 'descending';
    category: string;
  };
  clearFilters: () => void;
  applyFilters: (
    material: string,
    sortByPrice: boolean,
    sortOrder: 'ascending' | 'descending',
    category: string,
  ) => void;
  onClose: () => void;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
const ProductFilter = ({
  applyFilters,
  categories,
  materials,
  clearFilters,
  onClose,
  initialValues,
}: Props) => {
  const [material, setMaterial] = useState(initialValues.material);
  const [sortByPrice, setSortByPrice] = useState(initialValues.sortByPrice);
  const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>(
    initialValues.sortOrder,
  );
  const [category, setCategory] = useState(initialValues.category);
  const resetFilters = () => {
    setMaterial('none');
    setSortByPrice(false);
    setSortOrder('ascending');
    setCategory('none');
  };
  return (
    <View>
      <Text>Material:</Text>
      <Picker
        selectedValue={material}
        onValueChange={itemValue => setMaterial(itemValue)}>
        <Picker.Item key={0} label="Nenhum" value="none" />
        {materials.map(currentMaterial => (
          <Picker.Item
            key={currentMaterial}
            label={currentMaterial}
            value={currentMaterial}
          />
        ))}
      </Picker>
      <Text>Ordenar por preco:</Text>
      <Picker
        selectedValue={sortByPrice}
        onValueChange={itemValue => setSortByPrice(Boolean(itemValue))}>
        <Picker.Item key={1} label="Sim" value={true} />
        <Picker.Item key={0} label="Nao" value={false} />
      </Picker>

      <Text>Ordem:</Text>
      <Picker
        selectedValue={sortOrder}
        enabled={sortByPrice}
        onValueChange={itemValue => setSortOrder(itemValue)}>
        <Picker.Item key={1} label="Ascendente" value="ascending" />
        <Picker.Item key={2} label="Descendente" value="descending" />
      </Picker>
      <Text>Categoria: </Text>
      <Picker
        selectedValue={category}
        onValueChange={itemValue => setCategory(itemValue)}>
        <Picker.Item key={0} label="Nenhum" value="none" />
        {categories.map(currentCategory => (
          <Picker.Item
            key={currentCategory}
            label={currentCategory}
            value={currentCategory}
          />
        ))}
      </Picker>

      <View style={styles.container}>
        <Button
          title="Apply Filters"
          onPress={() => {
            applyFilters(material, sortByPrice, sortOrder, category);
            onClose();
          }}
        />
        <Button
          title="Clear Filters"
          onPress={() => {
            resetFilters();
            clearFilters();
            onClose();
          }}
        />
      </View>
    </View>
  );
};
export default ProductFilter;
