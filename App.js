import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import MediumFeed from './src/screens/MediumFeed';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <MediumFeed />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    alignContent: 'center',
    paddingTop: 15
  }
})

export default App;