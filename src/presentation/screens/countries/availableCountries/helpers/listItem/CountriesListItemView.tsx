import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {View, Text} from "react-native";
import {getStyles} from "./CountriesListItemView.styles";

interface Props {
   title: string
}

export class CountriesListItemView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <Text style={getStyles(appearance).titleText}>
               {this.props.title}
            </Text>
         </View>
      )
   }
}
