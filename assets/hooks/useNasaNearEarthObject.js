import {useState, useEffect} from 'react'

export const useNasaNearEarthObject = ({formattedDate}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchNasaNearEarthObjectsData = async () => {
      const apiKey= 'lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN'
      try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoaded(true);
      }
    };

    fetchNasaNearEarthObjectsData();
  }, [formattedDate]);

  return { data, error, loaded };

}