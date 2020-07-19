import React from 'react';
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {AppearanceContext} from "../../../../../app/repos/appearancesRepo/AppearancesRepo";
import {View} from "react-native";

export class AppearanceComponent<P = any, S = any> extends React.Component<P, S> {

   render() {
      return (
         <AppearanceContext.Consumer>
            {appearance => (
               this.renderWith(appearance)
            )}
         </AppearanceContext.Consumer>
      )
   }

   renderWith(appearance: Appearance) {
      return <View/>
   }
}
