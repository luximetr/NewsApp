import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, TouchableOpacity, View, Text} from "react-native";
import {getStyles} from "./LanguagePickerView.styles";

export class LanguagePickerView extends BaseComponent {

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
      const items = [1,2]
      return items.map((item) => {
         return this.renderItem(appearance)
      })
   }

   protected renderItem(appearance: Appearance) {
      return (
         <TouchableOpacity>
            <View style={getStyles(appearance).item}>
               <Text style={getStyles(appearance).itemText}>
                  En
               </Text>
            </View>
         </TouchableOpacity>
      )
   }
}
