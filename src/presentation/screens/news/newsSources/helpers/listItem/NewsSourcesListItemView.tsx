import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {View, Text} from "react-native";

export class NewsSourcesListItemView extends BaseComponent {

   renderWith(appearance: Appearance): any {
      return (
         <View>
            <Text>Source</Text>
         </View>
      )
   }
}
