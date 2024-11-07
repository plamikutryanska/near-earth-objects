import { Text, StyleSheet, SafeAreaView, Image } from 'react-native';
 

const EmptyState = ({message}) => {
  return (
    <SafeAreaView style={styles.emptyStateContainer} forceInset={{ top: 'always' }}>  
      <Image source={require('../../images/alien.png')} style={styles.image}/>
      <Text style={styles.text}>{message}</Text>
    </SafeAreaView>
  )
}

export default EmptyState

const styles = StyleSheet.create({
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%'
  },
  image: {
    width: 240,
    height:280
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});