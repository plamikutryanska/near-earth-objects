import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({date, changeSelectedDate}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectDateWrapper}>
      <Ionicons name="calendar-number" size={24} color={'black'} />
        <DateTimePicker
          value={date}
          mode={'date'}
          onChange={changeSelectedDate}
          display='default'
          style={styles.datePicker}
        />
      </View>
    </SafeAreaView>
  )
}

export default DatePicker


const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectDateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%'
  },
  datePicker: {
    marginRight: 12,
  }
});