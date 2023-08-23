import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import spaceImage from '../../../assets/space.jpg'

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={spaceImage} alt={'space image'} resizeMode={'cover'} style={styles.image}>
      <View style={styles.detailsBox}>
        <Text style={styles.detailsText}>No Information Found for the Selected date</Text>
      </View>
      </ImageBackground>
    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.7,
    flex: 1,
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