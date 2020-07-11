import React from 'react'
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {getStyles} from "./SelectCountriesScreenView.styles";
import { TabView, SceneMap } from 'react-native-tab-view';
import {SelectedCountriesScreen} from "../../selectedCountries/screen/SelectedCountriesScreen";
import {AvailableCountriesScreen} from "../../availableCountries/screen/AvailableCountriesScreen";

interface Props {
   onBack: VoidFunction
}

interface State {
   title: string
   selectedIndex: number
   routes: {
      key: string,
      title: string
   }[]
}

export class SelectCountriesScreenView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: 'Countries',
         selectedIndex: 0,
         routes: [
            {
               key: 'first',
               title: 'Selected'
            },
            {
               key: 'second',
               title: 'Available'
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
            {this.renderSegmentedControl(appearance)}
         </TopBarScreenView>
      )
   }

   // Segmented control
   private renderSegmentedControl(appearance: Appearance) {
      return (
         <TabView
            renderScene={SceneMap({
               first: SelectedCountriesScreen,
               second: AvailableCountriesScreen
            })}
            onIndexChange={(index) => {
               this.setState({selectedIndex: index})
            }}
            navigationState={{
               index: this.state.selectedIndex,
               routes: this.state.routes
            }}
         />
      )
   }
}
