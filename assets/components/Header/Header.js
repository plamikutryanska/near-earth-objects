import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>near earth objects</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer : {
    backgroundColor: 'black',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  headerTitle: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 18,
  }
});