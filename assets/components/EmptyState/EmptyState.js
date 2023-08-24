import { Text, View, StyleSheet } from 'react-native';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsBox}>
        <Text style={styles.detailsText}>No Information Found for the Selected date</Text>
      </View>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsBox: {
    backgroundColor: 'white',
    height: 46,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    fontSize: 12,
    textTransform: 'uppercase'
  }
});