import React from "react";
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {View, Text} from "react-native";
import {getContainerColor, getStyles} from "./SelectedCountriesListItemView.styles";

interface Props {
   title: string
   isEnabled: boolean
}

export class SelectedCountriesListItemView extends BaseComponent<Props> {

   renderWith(appearance: Appearance): any {
      return (
         <View style={[getStyles(appearance).container, {backgroundColor: getContainerColor(appearance, this.props.isEnabled)}]}>
            <Text style={getStyles(appearance).titleText}>
               {this.props.title}
            </Text>
         </View>
      )
   }
}
