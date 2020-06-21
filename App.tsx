import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


function Screen1() {
  return (
     <View>
       <Text>Screen1</Text>
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

export const Flow1 = createStackNavigator(
   {
      Screen1: Screen1,
      Screen2: Screen2
   },
   {
      initialRouteName: 'Screen1'
   }
)

const stack = createSwitchNavigator(
   {
      Flow1: {screen: Flow1}
   },
   {
      initialRouteName: 'Flow1'
   }
)

const AppContainer = createAppContainer(stack);

export default class App extends React.Component {
   render() {
      return (
         <View style={{flex: 1}}>
            <AppContainer/>
         </View>
      )
   }
}
