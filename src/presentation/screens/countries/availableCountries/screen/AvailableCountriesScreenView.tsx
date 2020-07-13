import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {FlatList, TouchableOpacity, View} from "react-native";
import {Country} from "../../../../../model/model/country/Country";
import {CountriesListItemView} from "../helpers/listItem/CountriesListItemView";
import {getStyles} from "./AvailableCountriesScreenView.styles";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";

interface Props {
   countries: Country[]
   onCountrySelect: (country: Country) => void
}

export class AvailableCountriesScreenView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <FlatList
               contentInsetAdjustmentBehavior={'automatic'}
               data={this.props.countries}
               renderItem={(item) => {
                  return this.renderListItem(appearance, item.item)
               }}
            />
         </View>
      )
   }

   // List item
   protected renderListItem(appearance: Appearance, country: Country) {
      return (
         <View>
            <TouchableOpacity
               activeOpacity={touchableOpacity}
               onPress={() => {this.props.onCountrySelect(country)}}
            >
               <CountriesListItemView
                  title={country.name}
               />
            </TouchableOpacity>
            <View style={getStyles(appearance).divider}/>
         </View>
      )
   }
}
