import React from 'react'
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import SegmentedControl from "@react-native-community/segmented-control";
import {getStyles} from "./SelectCountriesScreenView.styles";
import { TabView, SceneMap } from 'react-native-tab-view';
import {View} from "react-native";

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
               title: 'First'
            },
            {
               key: 'second',
               title: 'Second'
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
            renderScene={SceneMap({first: Screen1, second: Screen2})}
            onIndexChange={(index) => {
               this.setState({selectedIndex: index})
            }}
            navigationState={{index: this.state.selectedIndex, routes: this.state.routes}}
         />
      )
   }
}

function Screen1() {
   return <View/>
}

function Screen2() {
   return <View/>
}
