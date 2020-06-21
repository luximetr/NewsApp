import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NewsStack } from './NewsStack';

const Tab = createBottomTabNavigator();

export class MainTabBar extends React.Component {

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='News' component={NewsStack} />
      </Tab.Navigator>
    )
  }
}
