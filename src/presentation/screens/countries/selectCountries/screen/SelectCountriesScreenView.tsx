import React from 'react'
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {TopTabBarView} from "../../../../helpers/components/tabBarViews/topTabBarView/TopTabBarView";
import {SelectedCountriesScreen} from "../../selectedCountries/screen/SelectedCountriesScreen";
import {AvailableCountriesScreen} from "../../availableCountries/screen/AvailableCountriesScreen";
import {TopTabBarItem} from "../../../../helpers/components/tabBarViews/topTabBarView/TopTabBarItem";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";

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
         title: translate('countries_title'),
         tabComponents: [
            {
               key: 'selected',
               title: translate('countries_tab1_title'),
               component: SelectedCountriesScreen
            },
            {
               key: 'available',
               title: translate('countries_tab2_title'),
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
