import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Foo from './Foo';


const BottomTabs2 = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FooComponent = () => {
    return (
      <BottomTabs.Navigator screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "black",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            iconName={"add"}
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("Foo");
            }}
          />
        ),
      })}>
    <BottomTabs.Screen
        name="Foo Tab"
        component={RecentExpenses}
        options={{
          title: "Foo Title",
          tabBarLabel: "Foo Title option",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      
    </BottomTabs.Navigator>
    )
}

const BottomTabs = () => {
  <NavigationContainer>
  <BottomTabs2.Navigator>
  <BottomTabs2.Screen name="Today's NeOs"component={Foo}/>
  <BottomTabs2.Screen name='Watch List' component={Foo}/>
  <BottomTabs2.Screen name='Calendar' component={Foo}/>


</BottomTabs2.Navigator>
  </NavigationContainer>
              {/* <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: "white",
            }}
          >
    <Stack.Screen
              name="FooComponent"
              component={FooComponent}
              options={{ headerShown: false }}
            />
</Stack.Navigator> */}
}

export default BottomTabs;