import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const NearEarthObjectDetails = ({objectDetails}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.objectName}>{objectDetails.name}</Text>
      </View>
      <View style={styles.objectDetailsContainer}>
        <View style={styles.objectDetailsWrapper}>
          <Text style={styles.objectDetailsTitle}>Approximate diameter in feet: </Text>
          <Text>Min: {objectDetails.approximateDiameterInFeet.minDiameter}</Text>
          <Text>Max: {objectDetails.approximateDiameterInFeet.maxDiameter}</Text>
        </View>
        <View style={styles.objectDetailsWrapper}>
          <Text style={styles.objectDetailsTitle}>Relative velocity in miles per hour: </Text>
          <Text>{objectDetails.relativeVelocityInMilesPerHour}</Text>
        </View>
        <View style={styles.objectDetailsWrapper}>
          <Text style={styles.objectDetailsTitle}>Miss distance in miles: </Text>
          <Text>{objectDetails.missDistanceInMiles}</Text>
        </View>
        <View style={styles.objectDetailsWrapper}>
          <Text style={styles.objectDetailsTitle}>Potentially hazardous:</Text>
          <Text>{objectDetails.potentiallyHazardousAsteroid}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NearEarthObjectDetails

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    margin: 20,
    
  },
  sectionHeader: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    borderTopLeftRadius: 9,
    borderTopRightRadius:9
  },
  objectName: {
    color: 'white',
    textTransform: 'uppercase'
  },
  objectDetailsContainer: {
    minHeight: 200,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  objectDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 12,
  },
  objectDetailsTitle: {
    fontWeight: 'bold',
    fontSize: 14
  }
});