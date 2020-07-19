import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {FlatList, TouchableOpacity, View} from "react-native";
import {Category} from "../../../../../model/model/category/Category";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {CountriesListItemView} from "../../../countries/availableCountries/helpers/listItem/CountriesListItemView";
import {getStyles} from "./AvailableCategoriesScreenView.styles";

interface Props {
   categories: Category[]
   onCategoryPress: (category: Category) => void
}

export class AvailableCategoriesScreenView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <FlatList
               contentInset={{top: 8}}
               data={this.props.categories}
               renderItem={(item)=> {
                  return this.renderListItem(appearance, item.item)
               }}
            />
         </View>
      )
   }

   // List item
   protected renderListItem(appearance: Appearance, category: Category) {
      return (
         <TouchableOpacity
            activeOpacity={touchableOpacity}
            onPress={() => {this.props.onCategoryPress(category)}}
         >
            <CountriesListItemView
               title={category.name}
            />
         </TouchableOpacity>
      )
   }
}
