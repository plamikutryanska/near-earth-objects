import { ScrollView, StyleSheet, View, Text } from 'react-native';
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"


const NearEarthObjectsContainer = ({apiResponse}) => {
  return (
      <ScrollView style={styles.container}>
        <Text style={styles.totalCount}>Total count: {apiResponse?.length}</Text>
        {apiResponse?.map((object, index) => {
          return (
            <View key={index}>
              <NearEarthObjectDetails objectDetails={object}/>
            </View>
          )
          })}
      </ScrollView>
  )
}

export default NearEarthObjectsContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  totalCount: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20
  }
});