import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";

interface Props {
   onBack: VoidFunction
}

export class NewsDetailsScreenView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView
            title={'More'}
            leftTopBarButton={{
               action: () => {this.props.onBack()}
            }}
         >
         </TopBarScreenView>
      )
   }

   private renderContent() {

   }

}
