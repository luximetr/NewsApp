import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {FlatList, TouchableOpacity, View} from "react-native";
import {getStyles} from "./SelectedCountriesScreenView.styles";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {SelectedCountriesListItemView} from "../helpers/listItem/SelectedCountriesListItemView";
import {SelectedCountriesListItem} from "../helpers/listItem/SelectedCountriesListItem";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";

interface Props {
   items: SelectedCountriesListItem[]
   onItemPress: (item: SelectedCountriesListItem) => void
   onItemLongPress: (item: SelectedCountriesListItem) => void
}

export class SelectedCountriesScreenView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <FlatList
               data={this.props.items}
               contentInset={{top: 8}}
               renderItem={(item) => {
                  return this.renderListItem(appearance, item.item)
               }}
            />
         </View>
      )
   }

   // List item
   protected renderListItem(appearance: Appearance, item: SelectedCountriesListItem) {
      return (
         <View>
            <TouchableOpacity
               activeOpacity={touchableOpacity}
               onPress={() => {this.props.onItemPress(item)}}
               onLongPress={() => {this.props.onItemLongPress(item)}}
            >
               <SelectedCountriesListItemView
                  title={translate(`country_name_${item.country.code}`)}
                  isEnabled={item.isEnabled}
               />
            </TouchableOpacity>
         </View>
      )
   }
}
