import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NewsFeedScreen } from '../newsFeed/screen/NewsFeedScreen';
import {NewsDetailsScreen} from "../news/newsDetails/screen/NewsDetailsScreen";

const Stack = createStackNavigator();

export function NewsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='NewsFeed' component={NewsFeedScreen} />
      <Stack.Screen name={'NewsDetails'} component={NewsDetailsScreen} />
    </Stack.Navigator>
  )
}
