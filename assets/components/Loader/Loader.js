import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color="black" />
      </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%'
  },
});