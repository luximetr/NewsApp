import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


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

export default class App extends React.Component {
   render() {
      return (
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name={'Screen1'} component={Screen1} />
               <Stack.Screen name={'Screen2'} component={Screen2} />
            </Stack.Navigator>
         </NavigationContainer>
      )
   }
}
