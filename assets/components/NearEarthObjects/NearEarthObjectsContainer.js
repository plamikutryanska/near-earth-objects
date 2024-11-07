import React, {useState} from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { getSortedDataByMissDistance } from '../../utils/getSortedDataByMissDistance';
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"
import styles from './nearEarthObjectsContainerStyles'


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