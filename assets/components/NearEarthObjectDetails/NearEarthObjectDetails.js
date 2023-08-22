import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const NearEarthObjectDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.objectName}>Name of Object</Text>
      </View>
      <View style={styles.objectDetailsContainer}>
        <View style={styles.objectDetailsRow}>
          <Text style={styles.objectDetailsTitle}>Approximate diameter in feet: </Text>
          <Text>200</Text>
        </View>
        <View style={styles.objectDetailsRow}>
          <Text style={styles.objectDetailsTitle}>Relative velocity in miles per hour: </Text>
          <Text>200</Text>
        </View>
        <View style={styles.objectDetailsRow}>
          <Text style={styles.objectDetailsTitle}>Miss distance in miles: </Text>
          <Text>200</Text>
        </View>
        <View style={styles.objectDetailsRow}>
          <Text style={styles.objectDetailsTitle}>Potentially hazardous: </Text>
          <Text>False</Text>
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
    borderColor: 'black',
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
    justifyContent: 'center'
  },
  objectDetailsRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12
  },
  objectDetailsTitle: {
    fontWeight: 'bold',
    fontSize: 14
  }
});