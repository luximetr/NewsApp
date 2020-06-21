import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { MainTabBar } from '../presentation/screens/tabBar/MainTabBar';

export default class App extends React.Component {
   render() {
      return (
         <NavigationContainer>
            <MainTabBar />
         </NavigationContainer>
      )
   }
}
