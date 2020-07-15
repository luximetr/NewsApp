import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {FlatList, TouchableOpacity, View} from "react-native";
import {getStyles} from "./SelectedCountriesScreenView.styles";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {SelectedCountriesListItemView} from "../helpers/listItem/SelectedCountriesListItemView";
import {SelectedCountriesListItem} from "../helpers/listItem/SelectedCountriesListItem";

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
                  title={item.country.name}
                  isEnabled={item.isEnabled}
               />
            </TouchableOpacity>
            <View style={getStyles(appearance).divider}/>
         </View>
      )
   }
}
