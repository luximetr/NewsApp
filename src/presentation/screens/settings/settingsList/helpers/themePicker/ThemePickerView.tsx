import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, TouchableOpacity, View} from "react-native";
import {getStyles} from "./ThemePickerView.styles";
import {AppearanceType} from "../../../../../../model/model/appearance/AppearanceType";
import {appearanceProvider} from "../../../../../helpers/managers/AppearanceProvider";

interface Props {
   themes: AppearanceType[]
   onSelectTheme: (theme: AppearanceType) => void
}

export class ThemePickerView extends BaseComponent<Props> {

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
      return this.props.themes.map((theme) => {
         return this.renderItem(appearance, theme)
      })
   }

   private renderItem(appearance: Appearance, theme: AppearanceType) {
      const itemAppearance = appearanceProvider.getAppearanceByType(theme)
      return (
         <TouchableOpacity
            onPress={() => {this.props.onSelectTheme(theme)}}
         >
            <View style={[getStyles(appearance).item, {backgroundColor: itemAppearance.background.secondary}]} />
         </TouchableOpacity>
      )
   }
}
