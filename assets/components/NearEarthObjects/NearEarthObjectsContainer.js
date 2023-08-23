import galaxyImage from '../../../assets/galaxy.jpg'
import { ScrollView, StyleSheet, View, ImageBackground  } from 'react-native';
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"

const NearEarthObjectsContainer = ({apiResponse}) => {
  return (
    <>
    <ImageBackground source={galaxyImage} alt={'galaxy image'} style={styles.image} resizeMode="cover">
      <ScrollView>
      {apiResponse?.map((object, index) => {
        return (
          <View key={index}>
            <NearEarthObjectDetails objectDetails={object}/>
          </View>
        )
        })}
      </ScrollView>
    </ImageBackground> 
    </>
  )
}

export default NearEarthObjectsContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});