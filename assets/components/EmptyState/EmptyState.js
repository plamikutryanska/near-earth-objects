import { Text, SafeAreaView, Image } from 'react-native';
import styles from './emptyStateStyles'
 

const EmptyState = ({message}) => {
  return (
    <SafeAreaView style={styles.emptyStateContainer} forceInset={{ top: 'always' }}>  
      <Image source={require('../../images/alien.png')} style={styles.image}/>
      <Text style={styles.text}>{message}</Text>
    </SafeAreaView>
  )
}

export default EmptyState