import React from 'react';
import {AppearanceContext} from "../../../../../model/repos/appearancesRepo/AppearancesRepo";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {View} from "react-native";

export class BaseComponent<P=any, S=any> extends React.Component<P, S> {

   render() {
      return (
         <AppearanceContext.Consumer>
            {appearance => this.renderWith(appearance)}
         </AppearanceContext.Consumer>
      )
   }

   renderWith(appearance: Appearance) {
      return <View/>
   }
}
