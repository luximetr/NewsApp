import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {View} from "react-native";

export class AvailableCountriesScreenView extends BaseComponent {

   renderWith(appearance: Appearance): any {
      return (
         <View style={{backgroundColor: 'green', flex: 1}}/>
      )
   }
}
