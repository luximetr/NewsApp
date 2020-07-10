import React from 'react';
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {View, Text, ScrollView} from "react-native";
import {getStyles} from "./NewsSourcesListItemView.styles";

interface Props {
   title: string
   description: string
   filters: string[]
}

export class NewsSourcesListItemView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            {this.renderTitle(appearance)}
            {this.renderDescription(appearance)}
            {this.renderFilters(appearance)}
         </View>
      )
   }

   // Title
   private renderTitle(appearance: Appearance) {
      return (
         <Text style={getStyles(appearance).title}>
            {this.props.title}
         </Text>
      )
   }

   // Description
   private renderDescription(appearance: Appearance) {
      return (
         <Text
            style={getStyles(appearance).description}
            numberOfLines={2}
         >
            {this.props.description}
         </Text>
      )
   }

   // Filters
   private renderFilters(appearance: Appearance) {
      return (
         <ScrollView
            style={getStyles(appearance).filtersContainer}
            horizontal={true}
         >
            {this.renderFiltersList(appearance)}
         </ScrollView>
      )
   }

   private renderFiltersList(appearance: Appearance) {
      return this.props.filters.map((filter) => {
         return this.renderFilterItem(appearance, filter)
      })
   }

   protected renderFilterItem(appearance: Appearance, title: string) {
      return (
         <View style={getStyles(appearance).filterItem}>
            <Text
               style={getStyles(appearance).filterItemText}
               numberOfLines={1}
            >
               {title}
            </Text>
         </View>
      )
   }
}
