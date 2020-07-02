import React from 'react';
import {BaseComponent} from "../../baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {ActivityIndicator, View} from "react-native";
import {getStyles} from "./FullScreenLoaderView.styles";

export class FullScreenLoaderView extends BaseComponent {

   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <ActivityIndicator color={appearance.scroll.refresh.primary}/>
         </View>
      )
   }
}
