import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, TouchableOpacity, View, Text} from "react-native";
import {getStyles} from "./LanguagePickerView.styles";
import {touchableOpacity} from "../../../../../helpers/managers/ScreenInfoProvider";
import {LanguagePickerItem} from "./LanguagePickerItem";

interface Props {
   items: LanguagePickerItem[]
   onItemPress: (item: LanguagePickerItem) => void
}

export class LanguagePickerView extends BaseComponent<Props> {

   // Render
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

   // Items
   private renderItems(appearance: Appearance) {
      return this.props.items.map((item) => {
         return this.renderItem(appearance, item)
      })
   }

   protected renderItem(appearance: Appearance, item: LanguagePickerItem) {
      return (
         <TouchableOpacity
            activeOpacity={touchableOpacity}
            onPress={() => {this.props.onItemPress(item)}}
         >
            <View style={getStyles(appearance).item}>
               <Text style={getStyles(appearance).itemText}>
                  {item.title}
               </Text>
            </View>
            {item.isSelected && (<View style={getStyles(appearance).selectingIndicator}/>)}
         </TouchableOpacity>
      )
   }
}
