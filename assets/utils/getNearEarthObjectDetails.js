
export const getNearEarthObjectDetails = ({data, formattedDate}) => {
  if(data) {
    return (
      data.near_earth_objects[formattedDate]?.map(object => {
        return {
          name: object.name || '',
          approximateDiameterInFeet: 'need to figure this out',
          relativeVelocityInMilesPerHour: object.close_approach_data[0].relative_velocity?.miles_per_hour || '',
          missDistanceInMiles: object.close_approach_data[0].miss_distance?.miles || '',
          potentiallyHazardousAsteroid: object.is_potentially_hazardous_asteroid || ''
        }
      })
    )
  }

  return []
}