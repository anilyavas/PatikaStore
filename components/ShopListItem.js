import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const ShopListItem = ({ product }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Image style={styles.image} source={{ uri: product.imgURL }} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && (
          <Text style={{ color: 'red', fontSize: 20, marginTop: 5 }}>
            STOKTA YOK
          </Text>
        )}
      </View>
    </View>
  );
};

export default ShopListItem;
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: Dimensions.get('window'),
    padding: 15,
    backgroundColor: 'gainsboro',
    margin: 10,
    borderRadius: 30,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    color: 'grey',
  },
});
