import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Screen1() {
  return (
     <View>
       <Text>Screen1Text</Text>
     </View>
  )
}

function Screen2() {
  return (
     <View>
       <Text>Screen2</Text>
     </View>
  )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Stack1() {
   return (
      <Stack.Navigator>
         <Stack.Screen name={'Screen1'} component={Screen1} />
      </Stack.Navigator>
   )
}

function Stack2() {
   return (
      <Stack.Navigator>
         <Stack.Screen name={'Screen2'} component={Screen2} />
      </Stack.Navigator>
   )
}

export default class App extends React.Component {
   render() {
      return (
         <NavigationContainer>
            <Tab.Navigator>
               <Tab.Screen name={'Screen1'} component={Stack1} />
               <Tab.Screen name={'Screen2'} component={Stack2} />
            </Tab.Navigator>
         </NavigationContainer>
      )
   }
}
