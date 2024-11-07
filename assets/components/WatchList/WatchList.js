import { ScrollView, Text, StyleSheet } from "react-native"
import { useContext } from "react"
import {WatchListContext} from '../../store/context/watchListContext'
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"
import EmptyState from "../EmptyState/EmptyState"

const WatchList = () => {
  const watchListContext = useContext(WatchListContext)
  const neosOnWatchList = watchListContext.watchListState

  return (
    <>
      {
      neosOnWatchList.length === 0 ? 
      <EmptyState message={'There are no Near-Earth Objects added to your watchlist.'}/> :
      <ScrollView>
        <Text style={styles.text}>Total Count: {neosOnWatchList.length}</Text>
        {neosOnWatchList.map((neo) => {
          return (
            <NearEarthObjectDetails objectDetails={neo} key={neo.id}/>     
          )
        })}
      </ScrollView>
      }
    </>
  )
}

export default WatchList

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20
  }
})
