import React from 'react'
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
// import {getStyles} from "./SelectCountriesScreenView.styles";
// import {TabView, SceneMap, TabBar, SceneRendererProps, NavigationState} from 'react-native-tab-view';
// import {SelectedCountriesScreen} from "../../selectedCountries/screen/SelectedCountriesScreen";
// import {AvailableCountriesScreen} from "../../availableCountries/screen/AvailableCountriesScreen";
// import {View, StyleSheet} from "react-native";
import {TopTabBarView} from "../../../../helpers/components/tabBarViews/topTabBarView/TopTabBarView";
import {SelectedCountriesScreen} from "../../selectedCountries/screen/SelectedCountriesScreen";
import {AvailableCountriesScreen} from "../../availableCountries/screen/AvailableCountriesScreen";
import {TopTabBarItem} from "../../../../helpers/components/tabBarViews/topTabBarView/TopTabBarItem";

interface Props {
   onBack: VoidFunction
}

interface State {
   title: string
   tabComponents: TopTabBarItem[]
}

export class SelectCountriesScreenView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: 'Countries',
         tabComponents: [
            {
               key: 'selected',
               title: 'Selected',
               component: SelectedCountriesScreen
            },
            {
               key: 'available',
               title: 'Available',
               component: AvailableCountriesScreen
            }
         ]
      }
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView
            title={this.state.title}
            leftTopBarButton={{
               action: () => {this.props.onBack()}
            }}
         >
            <TopTabBarView
               tabItems={this.state.tabComponents}
            />
         </TopBarScreenView>
      )
   }
}
