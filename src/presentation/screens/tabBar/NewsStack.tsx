import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NewsFeedScreen } from '../newsFeed/screen/NewsFeedScreen';

const Stack = createStackNavigator();

export function NewsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='NewsFeed' component={NewsFeedScreen} />
    </Stack.Navigator>
  )
}
