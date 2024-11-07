import { StyleSheet } from "react-native";

export default StyleSheet.create({
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