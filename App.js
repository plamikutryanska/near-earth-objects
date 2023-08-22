import { StyleSheet, SafeAreaView } from 'react-native';
import Header  from './assets/components/Header/Header'
import NearEarthObjects from './assets/components/NearEarthObjects/NearEarthObjects';

export default function App() {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>  
      <Header/>
      <NearEarthObjects/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
