import React, {useState} from 'react'
import { ScrollView, StyleSheet, View, Text, Pressable, Image } from 'react-native';
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"
import ascending from '../../../assets/ascending.png'
import descending from '../../../assets/descending.png'
import { getSortedDataByMissDistance } from '../../utils/getSortedDataByMissDistance';

const NearEarthObjectsContainer = ({apiResponse}) => {
  const [sortDirection, setSortDirection] = useState('ascending')
  
  const sortedDataByMissDistance = getSortedDataByMissDistance(apiResponse, sortDirection)

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.totalCount}>Total count: {apiResponse?.length}</Text>
        <Text style={styles.sortText}>Sort By Miss Distance: </Text>
          <View style={styles.sortButtonWrapper}>
            <Pressable onPress={() => setSortDirection('ascending')}  style={{marginRight: 12}}>
              <Image source={ascending} style={styles.sortButton} accessibilityLabel='ascending button'/>
              {sortDirection === 'ascending' && <View style={styles.selectedSortDirection}/>}
              </Pressable>
              <Pressable onPress={() => setSortDirection('descending')} style={{marginLeft: 12}}>
                <Image source={descending} style={styles.sortButton} accessibilityLabel='descending button'/>
                {sortDirection === 'descending' && <View style={styles.selectedSortDirection}/>}
              </Pressable>
          </View>
        {sortedDataByMissDistance?.map((object, index) => {
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
  },
  sortText: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  sortButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sortButton: {
    width: 32,
    height: 32
  },
  selectedSortDirection: {
    borderColor: 'red',
    borderBottomWidth: 4,
    marginTop: 6
  }
});