import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BaseComponent} from "../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../model/model/appearance/Appearance";
import {getStyles, getActiveTintColor, getInactiveTintColor} from "./MainTabBar.styles";
import {VectorIcon} from "../../helpers/components/imageViews/icons/VectorIcon";
import {NewsFeedScreen} from "../news/newsFeed/screen/NewsFeedScreen";
import {SettingsListScreen} from "../settings/settingsList/screen/SettingsListScreen";
import {LocalizableComponent} from "../../helpers/components/baseViews/baseComponent/LocalizableComponent";
import {translate} from "../../../app/repos/appLanguagesRepo/repo/AppLanguagesRepo";

const Tab = createBottomTabNavigator();

interface Props {
}

interface State {
   screen1Title: string
   screen2Title: string
}

export class MainTabBar extends LocalizableComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         screen1Title: 'Screen1',
         screen2Title: 'Screen2',
      }
   }

   // Setup strings
   setupStrings() {
      this.setState({
         screen1Title: translate('tab_bar_tab1_title'),
         screen2Title: translate('tab_bar_tab2_title'),
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
                     return <VectorIcon name={'ios-paper'} source={'ion'} size={24} color={params.color} />
                  },
                  tabBarLabel: this.state.screen1Title
               }}
            />
            <Tab.Screen
               name={'Settings'}
               component={SettingsListScreen}
               options={{
                  tabBarIcon: (params) => {
                     return <VectorIcon name={'ios-settings'} source={'ion'} size={30} color={params.color} />
                  },
                  tabBarLabel: this.state.screen2Title
               }}
            />
         </Tab.Navigator>
      )
   }
}
