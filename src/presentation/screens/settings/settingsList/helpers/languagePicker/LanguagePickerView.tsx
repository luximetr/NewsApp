import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, TouchableOpacity, View, Text} from "react-native";
import {getStyles} from "./LanguagePickerView.styles";
import {Language} from "../../../../../../model/model/language/Language";
import {capitalizeFirstLetter} from "../../../../../../model/helpers/strings/StringsHelpers";
import {touchableOpacity} from "../../../../../helpers/managers/ScreenInfoProvider";

interface Props {
   languages: Language[]
   selectedLanguage: Language
   onLanguagePress: (language: Language) => void
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
      return this.props.languages.map((language) => {
         return this.renderItem(appearance, language)
      })
   }

   protected renderItem(appearance: Appearance, language: Language) {
      return (
         <TouchableOpacity
            activeOpacity={touchableOpacity}
            onPress={() => {this.props.onLanguagePress(language)}}
         >
            <View style={getStyles(appearance).item}>
               <Text style={getStyles(appearance).itemText}>
                  {capitalizeFirstLetter(language.code)}
               </Text>
            </View>
         </TouchableOpacity>
      )
   }
}
