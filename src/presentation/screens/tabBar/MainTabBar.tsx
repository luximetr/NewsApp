import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BaseComponent} from "../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../model/model/appearance/Appearance";
import {getStyles, getActiveTintColor, getInactiveTintColor} from "./MainTabBar.styles";
import {VectorIcon} from "../../helpers/components/imageViews/icons/VectorIcon";
import {NewsFeedScreen} from "../newsFeed/screen/NewsFeedScreen";
import {SettingsListScreen} from "../settings/settingsList/screen/SettingsListScreen";

const Tab = createBottomTabNavigator();

export class MainTabBar extends BaseComponent {

   renderWith(appearance: Appearance): any {
      return (
         <Tab.Navigator
            tabBarOptions={{
               style: getStyles(appearance).tabBar,
               activeTintColor: getActiveTintColor(appearance),
               inactiveTintColor: getInactiveTintColor(appearance)}}
         >
            <Tab.Screen name='News' component={NewsFeedScreen} options={{tabBarIcon: (params) => {
               return <VectorIcon name={'ios-paper'} source={'ion'} size={24} color={params.color} />
            }}}/>
            <Tab.Screen
               name='Settings'
               component={SettingsListScreen}
               options={{tabBarIcon: (params) => {
                  return <VectorIcon name={'ios-settings'} source={'ion'} size={30} color={params.color} />
               }}}/>
         </Tab.Navigator>
      )
   }
}
