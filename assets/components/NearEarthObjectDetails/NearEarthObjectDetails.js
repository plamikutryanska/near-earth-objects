import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

const DetailItem = ({ title, value }) => (
  <View style={styles.objectDetailsWrapper}>
    <Text style={styles.objectDetailsTitle}>{title}</Text>
    <Text>{value}</Text>
  </View>
);

const NearEarthObjectDetails = ({ objectDetails }) => {
  const {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.objectName}>{name}</Text>
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
  },
  sectionHeader: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
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
