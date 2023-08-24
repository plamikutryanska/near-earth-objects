import { StyleSheet, SafeAreaView } from 'react-native';
import Header  from './assets/components/Header/Header'
import NearEarthObjects from './assets/components/NearEarthObjects/NearEarthObjects';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient =  new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>  
      <Header/>
      <NearEarthObjects/>
    </SafeAreaView>
   </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
