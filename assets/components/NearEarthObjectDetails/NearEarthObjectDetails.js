import React, { useContext } from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WatchListContext } from "../../store/context/watchListContext";
import styles from './nearEarthObjectStyles'


const DetailItem = ({ title, value }) => (
  <View style={styles.objectDetailsWrapper}>
    <Text style={styles.objectDetailsTitle}>{title}</Text>
    <Text>{value}</Text>
  </View>
);

const NearEarthObjectDetails = ({ objectDetails }) => {
  const {
    id,
    name,
    approximateDiameterInFeet: { minDiameter, maxDiameter } = {},
    relativeVelocityInMilesPerHour,
    missDistanceInMiles,
    potentiallyHazardousAsteroid,
  } = objectDetails;

  const detailsData = [
    {
      title: "Approximate diameter in feet:",
      value: `Min: ${minDiameter} Max: ${maxDiameter}`,
    },
    {
      title: "Relative velocity in miles per hour:",
      value: relativeVelocityInMilesPerHour,
    },
    { title: "Miss distance in miles:", value: missDistanceInMiles },
    { title: "Potentially hazardous:", value: potentiallyHazardousAsteroid },
  ];

  const watchListContext = useContext(WatchListContext)
  const neosOnWatchListIds = watchListContext.watchListState.map((neo) => neo.id)

  const eyeIconColor = neosOnWatchListIds.includes(id) ? '#e03910' : 'white'

  const handleWatchListItems = (isAddedToWatchList) => {
      if(!isAddedToWatchList || neosOnWatchListIds.length === 0){
         return watchListContext.addToWatchList(objectDetails)
      } else return watchListContext.removeFromWatchList(id)
      
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.objectName}>{name}</Text>
        <Pressable onPress={() => handleWatchListItems(neosOnWatchListIds.includes(id))}>
          <Ionicons name="eye" size={22} color={eyeIconColor} />
        </Pressable>
      </View>
      <View style={styles.objectDetailsContainer}>
        {detailsData.map((details, index) => {
          return (
            <DetailItem
              key={index}
              title={details.title}
              value={details.value}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default NearEarthObjectDetails;