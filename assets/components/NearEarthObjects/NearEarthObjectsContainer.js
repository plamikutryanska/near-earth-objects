import galaxyImageV2 from '../../../assets/galaxy.jpg'
import { ScrollView, StyleSheet, View, ImageBackground, Text, ActivityIndicator  } from 'react-native';
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"


const NearEarthObjectsContainer = ({apiResponse}) => {
  return (
    <>
    {/* <ImageBackground source={galaxyImageV2} alt={'space image'} style={styles.image} resizeMode="cover"> */}
        <ScrollView style={{backgroundColor: 'black'}}>
        <Text style={styles.totalCount}>Total count: {apiResponse?.length}</Text>
        {apiResponse?.map((object, index) => {
          return (
            <View key={index}>
              <NearEarthObjectDetails objectDetails={object}/>
            </View>
          )
          })}
      </ScrollView>
    {/* </ImageBackground>  */}
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
  totalCount: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});