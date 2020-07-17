import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, TouchableOpacity, View} from "react-native";
import {getStyles} from "./AppearancePickerView.styles";
import {AppearancePickerItem} from "./AppearancePickerItem";

interface Props {
   appearances: AppearancePickerItem[]
   onItemPress: (appearance: AppearancePickerItem) => void
}

export class AppearancePickerView extends BaseComponent<Props> {

   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <ScrollView
               horizontal={true}
            >
               {this.renderItems(appearance)}
            </ScrollView>
         </View>
      )
   }

   private renderItems(appearance: Appearance) {
      return this.props.appearances.map((item) => {
         return this.renderItem(appearance, item)
      })
   }

   private renderItem(appearance: Appearance, item: AppearancePickerItem) {
      return (
         <TouchableOpacity
            onPress={() => {this.props.onItemPress(item)}}
         >
            <View style={[getStyles(appearance).item, {backgroundColor: item.color}]} />
         </TouchableOpacity>
      )
   }
}
