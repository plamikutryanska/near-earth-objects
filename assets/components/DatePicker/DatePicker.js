import { Text, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import calendarIcon from '../../../assets/calendar.png'

const DatePicker = ({date, changeSelectedDate, showDatePicker, showPicker}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={showDatePicker} style={styles.selectDateWrapper}>
        <Text style={styles.selectDate} >Select a date:</Text>
        <Image source={calendarIcon} accessibilityLabel='calendar icon' style={styles.calendarIcon}/>
      </Pressable>
        {!!showPicker && (
                  <DateTimePicker
                  value={date}
                  mode={'date'}
                  onChange={changeSelectedDate}
                  display='default'
                  style={{marginRight: 12}}
                />
        )}
    </SafeAreaView>
  )
}

export default DatePicker


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 64,
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  selectDateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectDate: {
    fontSize: 12,
    textTransform: 'uppercase',
    marginRight: 12,
    marginLeft: 12
  },
  calendarIcon: {
    width: 22,
    height: 22
  }
});