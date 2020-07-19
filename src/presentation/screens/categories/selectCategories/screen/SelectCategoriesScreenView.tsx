import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {TopTabBarItem} from "../../../../helpers/components/tabBarViews/topTabBarView/TopTabBarItem";
import {SelectedCategoriesScreen} from "../../selectedCategories/screen/SelectedCategoriesScreen";
import {AvailableCategoriesScreen} from "../../availableCategories/screen/AvailableCategoriesScreen";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopTabBarView} from "../../../../helpers/components/tabBarViews/topTabBarView/TopTabBarView";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/AppLanguagesRepo";

interface Props {
   onBack: VoidFunction
}

interface State {
   title: string
   tabComponents: TopTabBarItem[]
}

export class SelectCategoriesScreenView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: translate('categories_title'),
         tabComponents: [
            {
               key: 'selected',
               title: translate('categories_tab1_title'),
               component: SelectedCategoriesScreen
            },
            {
               key: 'available',
               title: translate('categories_tab2_title'),
               component: AvailableCategoriesScreen
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

