import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  TextInput,
} from 'react-native';
import dummy from './assets/data/dummy';
import ShopListItem from './components/ShopListItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ara...' style={styles.input} />
      </View>
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
  inputContainer: {
    backgroundColor: 'gainsboro',
    borderRadius: 30,
    height: 40,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input: {
    color: 'grey',
    fontSize: 16,
    padding: 20,
  },
});
