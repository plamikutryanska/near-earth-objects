import React, {useEffect, useState} from 'react'
import DatePicker from "../DatePicker/DatePicker"
import NearEarthObjectDetails from "../NearEarthObjectDetails/NearEarthObjectDetails"
import { useNasaNearEarthObject } from '../../hooks/useNasaNearEarthObject';
import { getFormattedDate } from '../../utils/getFormattedDate';
import {getNearEarthObjectDetails} from '../../utils/getNearEarthObjectDetails'
import { ScrollView } from 'react-native';

const NearEarthObjects = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(getFormattedDate(date))

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  useEffect(() => {
    setFormattedDate(getFormattedDate(date))
  }, [date])

 const response = useNasaNearEarthObject({formattedDate})
 const apiResponse = getNearEarthObjectDetails({data: response.data, formattedDate})

  return (
    <>
      <DatePicker date={date} changeSelectedDate={onChange}  />
      <ScrollView>
      {apiResponse?.map(object => {
        return <NearEarthObjectDetails objectDetails={object}/>
        })}
      </ScrollView>
    </>
  )
}

export default NearEarthObjects