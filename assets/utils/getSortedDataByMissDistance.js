export const  getSortedDataByMissDistance = (response, sortDirection) => {
  if(response){
    if(sortDirection === 'ascending'){
      return response.sort((a,b) => a.missDistanceInMiles - b.missDistanceInMiles) 
    } else return response.sort((a,b) => b.missDistanceInMiles - a.missDistanceInMiles)
  }
  return []
}
