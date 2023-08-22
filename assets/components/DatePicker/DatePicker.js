import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({date, changeSelectedDate}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: 12, textTransform: 'uppercase'}}>Select Date: </Text>
        <DateTimePicker
          value={date}
          mode={'date'}
          onChange={changeSelectedDate}
        />
    </SafeAreaView>
    </View>
  )
}

export default DatePicker


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});