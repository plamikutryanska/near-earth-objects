import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

const fetchNasaData = async (formattedDate) => {
  const apiKey= 'lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN'
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`

  const response = await axios.get(url)

  return response.data
}

export const UseNasaNearEarthObjects = (formattedDate) => {
  const {isLoading, data} = useQuery(['nasaNEO', formattedDate], () => fetchNasaData(formattedDate))
  return {data, isLoading}
}