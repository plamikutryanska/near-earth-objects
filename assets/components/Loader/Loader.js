import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color="white" />
      </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});