import React, {useState} from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: 12, textTransform: 'uppercase'}}>Select Date: </Text>
        <DateTimePicker
          value={date}
          mode={'date'}
          onChange={onChange}
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