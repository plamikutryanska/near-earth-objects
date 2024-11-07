import React, {useState} from 'react'
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { getSortedDataByMissDistance } from '../../utils/getSortedDataByMissDistance';
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"


const NearEarthObjectsContainer = ({apiResponse}) => {
  const [sortDirection, setSortDirection] = useState('ascending')
  
  const sortedDataByMissDistance = getSortedDataByMissDistance(apiResponse, sortDirection)

  return (
      <ScrollView style={styles.container} >
        <Text style={styles.totalCount}>Total count: {apiResponse?.length}</Text>
        <Text style={styles.sortText}>Sort By Miss Distance: </Text>
          <View style={styles.sortButtonWrapper}>
            <Pressable onPress={() => setSortDirection('ascending')}  style={{marginRight: 12}}>
            <Ionicons name="arrow-up-circle" size={46}/>
              {sortDirection === 'ascending' && <View style={styles.selectedSortDirection}/>}
              </Pressable>
              <Pressable onPress={() => setSortDirection('descending')} style={{marginLeft: 12}}>
                <Ionicons name="arrow-down-circle" size={46}/>
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
    backgroundColor: '#DFDCE3',
  },
  totalCount: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20
  },
  sortText: {
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  sortButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectedSortDirection: {
    borderColor: '#e03910',
    borderBottomWidth: 4,
    marginTop: 6
  }
});