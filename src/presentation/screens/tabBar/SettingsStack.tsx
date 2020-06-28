import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsListScreen } from "../settings/settingsList/screen/SettingsListScreen";
import {ChangeThemeScreen} from "../settings/changeTheme/screen/ChangeThemeScreen";

const Stack = createStackNavigator();

export function SettingsStack() {
   return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name={'Settings'} component={SettingsListScreen}/>
         <Stack.Screen name={'ChangeTheme'} component={ChangeThemeScreen}/>
      </Stack.Navigator>
   )
}
