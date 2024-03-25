import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TextInput,
} from 'react-native';
import ShopListItem from './components/ShopListItem';
import dummy from './assets/data/dummy';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        numColumns={2}
        data={dummy}
        renderItem={({ item }) => <ShopListItem product={item} />}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
  },
});
