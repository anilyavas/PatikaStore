import { View, Text, StyleSheet, Image } from 'react-native';

const ShopListItem = ({ product }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: product.imageURL }} />
      <Text style={styles.title}>{product.title}</Text>
    </View>
  );
};

export default ShopListItem;
const styles = StyleSheet.create({
  itemContainer: {},
});
