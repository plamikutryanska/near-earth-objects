import { StyleSheet, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { WatchListContextProvider } from './assets/store/context/watchListContext';
import NearEarthObjects from './assets/components/NearEarthObjects/NearEarthObjects';
import WatchList from './assets/components/WatchList/WatchList';
import Calendar from './assets/components/Calendar/Calendar'


const queryClient =  new QueryClient()

const BottomTabs = createBottomTabNavigator();

export default function App() {

  return (
    <>
    <WatchListContextProvider>
      <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>  
      <NavigationContainer>
      <BottomTabs.Navigator screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: "black",
        tabBarStyle: { backgroundColor: 'white' },
        tabBarActiveTintColor: 'black',
      })}>
      <BottomTabs.Screen 
        name="Today's NeOs"
        component={NearEarthObjects} 
        options={{
          title: "Today's Near-Earth Objects",
          tabBarLabel: "Today's NeOs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="today" size={size} color={color} />
          ),
        }}
        />
      <BottomTabs.Screen name='Watch List' component={WatchList} options={{
          title: "Watch List",
          tabBarLabel: "Watch List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="eye" size={size} color={color} />
          ),
        }}/>
      <BottomTabs.Screen name='Calendar' component={Calendar} options={{
          title: "Calendar",
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-number" size={size} color={color} />
          ),
        }}/>
    </BottomTabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
   </QueryClientProvider>
   </WatchListContextProvider>    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
