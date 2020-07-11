import React from 'react';
import {BottomAlert} from "../../../../../helpers/components/alerts/bottomAlert/BottomAlert";
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getStyles} from "./NewsFeedFilterAlert.styles";
import {CategoryItem} from "./CategoryItem";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
   categories: CategoryItem[]
}

interface State {
   countriesHeader: string
   categoriesHeader: string
   moreButtonTitle: string
}

export class NewsFeedFilterAlert extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countriesHeader: "Countries",
         categoriesHeader: "Categories",
         moreButtonTitle: "more"
      }
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <BottomAlert
            isVisible={this.props.isVisible}
            onClose={() => {this.props.onClose()}}
         >
            {this.renderContent(appearance)}
         </BottomAlert>
      )
   }

   // Content
   private renderContent(appearance: Appearance) {
      return (
         <View>
            {this.renderCountriesPicker(appearance)}
            {this.renderCategoriesPicker(appearance)}
         </View>
      )
   }

   // Country picker
   private renderCountriesPicker(appearance: Appearance) {
      return (
         <View>
            <Text style={getStyles(appearance).sectionHeader}>{this.state.countriesHeader}</Text>
            <View style={getStyles(appearance).itemsListContainer}>
               <ScrollView style={getStyles(appearance).itemsScrollView} horizontal={true}>
                  {this.renderCountriesList(appearance)}
               </ScrollView>
               <TouchableOpacity style={getStyles(appearance).moreButton}>
                  <Text style={getStyles(appearance).moreButtonText}>
                     {this.state.moreButtonTitle}
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }

   private renderCountriesList(appearance: Appearance) {
      const countries = ['ru', 'en', 'us', 'uk']
      return countries.map((country) => {
         return this.renderCountriesListItem(appearance, country)
      })
   }

   protected renderCountriesListItem(appearance: Appearance, country: string) {
      return (
         <View style={getStyles(appearance).item}>
            <Text style={getStyles(appearance).itemText}>{country}</Text>
         </View>
      )
   }

   // Categories picker
   private renderCategoriesPicker(appearance: Appearance) {
      return (
         <View>
            <Text style={getStyles(appearance).sectionHeader}>{this.state.categoriesHeader}</Text>
            <View style={getStyles(appearance).itemsListContainer}>
               <ScrollView style={getStyles(appearance).itemsScrollView} horizontal={true}>
                  {this.renderCategoriesList(appearance)}
               </ScrollView>
               <TouchableOpacity style={getStyles(appearance).moreButton}>
                  <Text style={getStyles(appearance).moreButtonText}>
                     {this.state.moreButtonTitle}
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }

   private renderCategoriesList(appearance: Appearance) {
      const languages = ['rufsdfhkwehfjwhf', 'uawrfwrfwrf wrf wrf wr', 'ew rf wrf n']
      return languages.map((language) => {
         return this.renderCategoriesListItem(appearance, language)
      })
   }

   protected renderCategoriesListItem(appearance: Appearance, language: string) {
      return (
         <View style={getStyles(appearance).item}>
            <Text style={getStyles(appearance).itemText}>{language}</Text>
         </View>
      )
   }
}
