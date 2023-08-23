import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import calendarIcon from '../../../assets/calendar.png'

const DatePicker = ({date, changeSelectedDate, showDatePicker, showPicker}) => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Pressable onPress={showDatePicker} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 12, textTransform: 'uppercase', marginRight: 12}} >Select a date:</Text>
        <Image source={calendarIcon} alt='calendar icon' style={{width: 22, height: 22}}/>
      </Pressable>
        {!!showPicker && (
                  <DateTimePicker
                  value={date}
                  mode={'date'}
                  onChange={changeSelectedDate}
                  display='default'
                />
        )}
      </SafeAreaView>
    </View>
  )
}

export default DatePicker


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 12,
    paddingRight: 12,
    height: 64,
    justifyContent: 'center'
  }
});