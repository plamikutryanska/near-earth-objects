import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
