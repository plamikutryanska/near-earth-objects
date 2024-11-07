import React, { useContext } from "react";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { WatchListContext } from "../../store/context/watchListContext";


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

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    // For Android
    elevation: 10,
    borderRadius: 10,
  },
  sectionHeader: {
    backgroundColor: "black",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    height: 42,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    padding: 12
  },
  objectName: {
    color: "white",
    textTransform: "uppercase",
  },
  objectDetailsContainer: {
    minHeight: 200,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  objectDetailsWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 12,
  },
  objectDetailsTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
