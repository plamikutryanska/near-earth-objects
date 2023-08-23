import React, {useEffect, useState} from 'react'
import DatePicker from "../DatePicker/DatePicker"
import { useNasaNearEarthObject } from '../../hooks/useNasaNearEarthObject';
import { getFormattedDate } from '../../utils/getFormattedDate';
import {getNearEarthObjectDetails} from '../../utils/getNearEarthObjectDetails'
import EmptyState from '../EmptyState/EmptyState';
import NearEarthObjectsContainer from './NearEarthObjectsContainer';

const NearEarthObjects = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(getFormattedDate(date))
  const [showPicker, setShowDatePicker] = useState(true)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const showDatePicker = () => {
    setShowDatePicker(true)
  }

  useEffect(() => {
    setFormattedDate(getFormattedDate(date))
  }, [date])

 const response = useNasaNearEarthObject({formattedDate})
 const apiResponse = getNearEarthObjectDetails({data: response.data, formattedDate})

  return (
    <>
      <DatePicker date={date} changeSelectedDate={onChange} showPicker={showPicker} showDatePicker={showDatePicker}/>
      {apiResponse ? <NearEarthObjectsContainer apiResponse={apiResponse} /> : <EmptyState/>}
    </>
  )
}

export default NearEarthObjects