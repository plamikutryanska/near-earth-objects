import {Text, StyleSheet, ScrollView} from 'react-native'
import { useState, useEffect } from 'react';
import { getNearEarthObjectDetails } from "../../utils/getNearEarthObjectDetails";
import { UseNasaNearEarthObjects } from "../../hooks/useNasaNearEarthObjects";
import { getFormattedDate } from "../../utils/getFormattedDate";

import DatePicker from '../DatePicker/DatePicker'
import NearEarthObjectDetails from '../NearEarthObjectDetails/NearEarthObjectDetails';
import Loader from "../Loader/Loader";
import EmptyState from "../EmptyState/EmptyState";


const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(getFormattedDate(date));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const { data, isLoading } = UseNasaNearEarthObjects(formattedDate);
  const apiResponse = getNearEarthObjectDetails({ data, formattedDate });

  useEffect(() => {
    setFormattedDate(getFormattedDate(date));
  }, [date]);


  return (
    <ScrollView>
      <Text style={styles.text}>
        To view the Near-Earth Objects on a given date,
        please select a date from the calendar below.
      </Text>
      <DatePicker
        date={date}
        changeSelectedDate={onChange}
      />
      {isLoading && <Loader />}
      {apiResponse && !isLoading && (
        apiResponse.map((neo) => {
          return <NearEarthObjectDetails objectDetails={neo} key={neo.id}/>
        })
      )}
      {!apiResponse && !isLoading && <EmptyState message={'No Information Found for the Selected Date'}/>}
    </ScrollView>
  )
}

export default Calendar

const styles = StyleSheet.create({
  text: {
    margin: 12,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})