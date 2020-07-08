import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {MainTabBar} from "../presentation/screens/tabBar/MainTabBar";
import {NewsDetailsScreen} from "../presentation/screens/news/newsDetails/screen/NewsDetailsScreen";
import {NewsSourcesScreen} from "../presentation/screens/news/newsSources/screen/NewsSourcesScreen";

const Stack = createStackNavigator();

export function AppStack() {
   return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name={'MainTabBar'} component={MainTabBar} />
         <Stack.Screen name={'NewsDetails'} component={NewsDetailsScreen} />
         <Stack.Screen name={'NewsSources'} component={NewsSourcesScreen} />
      </Stack.Navigator>
   )
}
