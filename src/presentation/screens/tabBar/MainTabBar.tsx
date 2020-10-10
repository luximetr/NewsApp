import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Appearance} from "../../../model/model/appearance/Appearance";
import {getStyles, getActiveTintColor, getInactiveTintColor} from "./MainTabBar.styles";
import {NewsFeedScreen} from "../news/newsFeed/screen/NewsFeedScreen";
import {SettingsListScreen} from "../settings/settingsList/screen/SettingsListScreen";
import {LocalizableComponent} from "../../helpers/components/baseViews/baseComponent/LocalizableComponent";
import {translate} from "../../../app/repos/appLanguagesRepo/repo/Translator";
import {Image, ImageSourcePropType} from "react-native";
import {ReadLaterScreen} from "../news/readLater/screen/ReadLaterScreen";

const Tab = createBottomTabNavigator();

interface Props {
}

interface State {
  screen1Title: string
  screen2Title: string
  screen3Title: string
}

export class MainTabBar extends LocalizableComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
        screen1Title: '',
        screen2Title: '',
        screen3Title: ''
      }
   }

   // Setup strings
   setupStrings() {
      this.setState({
        screen1Title: translate('tab_bar_tab1_title'),
        screen2Title: translate('tab_bar_tab2_title'),
        screen3Title: translate('tab_bar_tab3_title')
      })
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <Tab.Navigator
            tabBarOptions={{
               style: getStyles(appearance).tabBar,
               activeTintColor: getActiveTintColor(appearance),
               inactiveTintColor: getInactiveTintColor(appearance)}}
         >
            <Tab.Screen
               name={'News'}
               component={NewsFeedScreen}
               options={{
                  tabBarIcon: (params) => {
                     return this.renderTabIcon(params, {uri: 'news'})
                  },
                  tabBarLabel: this.state.screen1Title
               }}
            />
            <Tab.Screen
              name={'ReadLater'}
              component={ReadLaterScreen}
              options={{
                tabBarIcon: (params) => {
                  return this.renderTabIcon(params, {uri: 'clock'})
                },
                tabBarLabel: this.state.screen2Title
              }}
            />
            <Tab.Screen
               name={'Settings'}
               component={SettingsListScreen}
               options={{
                  tabBarIcon: (params) => {
                     return this.renderTabIcon(params, {uri: 'settings'})
                  },
                  tabBarLabel: this.state.screen3Title
               }}
            />
         </Tab.Navigator>
      )
   }

   // Tab icon
   protected renderTabIcon(params: any, source: ImageSourcePropType) {
      return (
         <Image
            style={{
               height: params.size - 3,
               width: params.size - 3,
               tintColor: params.color}}
            source={source}
         />
      )
   }
}
