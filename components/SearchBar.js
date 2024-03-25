import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return <TextInput placeholder='Ara...' style={styles.input} />;
};

export default SearchBar;
const styles = StyleSheet.create({
  input: {
    color: 'grey',
    fontSize: 16,
    padding: 10,
    backgroundColor: 'gainsboro',
    borderRadius: 30,
    margin: 10,
  },
});
