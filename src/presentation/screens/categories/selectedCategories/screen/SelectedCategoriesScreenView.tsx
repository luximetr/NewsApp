import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {FlatList, TouchableOpacity, View} from "react-native";
import {SelectedCategoriesListItem} from "../helpers/selectedCategoriesListItem/SelectedCategoriesListItem";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {SelectedCountriesListItemView} from "../../../countries/selectedCountries/helpers/listItem/SelectedCountriesListItemView";
import {getStyles} from "./SelectedCategoriesScreenView.styles";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";

interface Props {
   items: SelectedCategoriesListItem[]
   onItemPress: (item: SelectedCategoriesListItem) => void
   onItemLongPress: (item: SelectedCategoriesListItem) => void
}

export class SelectedCategoriesScreenView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <FlatList
               contentInset={{top: 8}}
               data={this.props.items}
               renderItem={(item) => {
                  return this.renderListItem(appearance, item.item)
               }}
            />
         </View>
      )
   }

   // List item
   protected renderListItem(appearance: Appearance, item: SelectedCategoriesListItem) {
      return (
         <TouchableOpacity
            activeOpacity={touchableOpacity}
            onPress={() => {this.props.onItemPress(item)}}
            onLongPress={() => {this.props.onItemLongPress(item)}}
         >
            <SelectedCountriesListItemView
               title={translate(`category_name_${item.category.code}`)}
               isEnabled={item.isEnabled}
            />
         </TouchableOpacity>
      )
   }
}
