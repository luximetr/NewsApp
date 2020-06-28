import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NewsStack } from './NewsStack';
import { SettingsStack } from "./SettingsStack";

const Tab = createBottomTabNavigator();

export class MainTabBar extends React.Component {

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='News' component={NewsStack} />
        <Tab.Screen name='Settings' component={SettingsStack} />
      </Tab.Navigator>
    )
  }
}
