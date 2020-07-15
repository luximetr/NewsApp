import React from 'react';
import {BaseComponent} from "../../baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {NavigationState, SceneMap, SceneRendererProps, TabBar, TabView} from "react-native-tab-view";
import {getStyles} from "./TopTabBarView.styles";
import {TopTabBarItem} from "./TopTabBarItem";

interface Props {
   tabItems: TopTabBarItem[]
}

interface State {
   selectedIndex: number
   routes: {
      key: string,
      title: string
   }[],
   scenes: any
}

export class TopTabBarView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      const routes = props.tabItems.map((item) => {
         return {key: item.key, title: item.title}
      })
      let scenes = Object.create({})
      this.props.tabItems.forEach((item) => {
         scenes[item.key] = item.component
      })
      this.state = {
         selectedIndex: 0,
         routes: routes,
         scenes: scenes,
      }
   }

   // Tab view
   renderWith(appearance: Appearance) {
      return (
         <TabView
            renderTabBar={(props) => {
               return this.renderTabBar(appearance, props)
            }}
            renderScene={SceneMap(this.state.scenes)}
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

   // Tab bar
   protected renderTabBar(appearance: Appearance, props: SceneRendererProps & {navigationState: NavigationState<{key: string, title: string}>}) {
      return (
         <TabBar
            {...props}
            indicatorStyle={getStyles(appearance).indicator}
            style={getStyles(appearance).tabBar}
            activeColor={appearance.tabBar.selectedTint}
            inactiveColor={appearance.tabBar.unselectedTint}
         />
      )
   }
}
