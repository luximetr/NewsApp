import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {BottomAlert} from "../../../../helpers/components/alerts/bottomAlert/BottomAlert";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getItemColor, getStyles} from "./NewsFeedFilterAlertView.styles";
import {SelectedCountriesListItem} from "../../../countries/selectedCountries/helpers/listItem/SelectedCountriesListItem";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import React from "react";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
   onEditCountries: VoidFunction
   onEditCategories: VoidFunction
   countriesList: SelectedCountriesListItem[]
   onCountryItemPress: (item: SelectedCountriesListItem) => void
}

interface State {
   countriesHeader: string
   categoriesHeader: string
}

export class NewsFeedFilterAlertView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         countriesHeader: "Countries",
         categoriesHeader: "Categories",
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
         <View style={getStyles(appearance).container}>
            {this.renderCountriesPicker(appearance)}
            {this.renderCategoriesPicker(appearance)}
         </View>
      )
   }

   // Countries picker
   private renderCountriesPicker(appearance: Appearance) {
      return (
         <View>
            {this.renderCountriesSectionHeader(appearance)}
            <View style={getStyles(appearance).itemsListContainer}>
               <ScrollView style={getStyles(appearance).itemsScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                  {this.renderCountriesList(appearance)}
               </ScrollView>
            </View>
         </View>
      )
   }

   private renderCountriesSectionHeader(appearance: Appearance) {
      return this.renderSectionHeader(appearance, this.state.countriesHeader, () => {this.props.onEditCountries()})
   }

   private renderCountriesList(appearance: Appearance) {
      return this.props.countriesList.map((item) => {
         return this.renderCountriesListItem(appearance, item)
      })
   }

   protected renderCountriesListItem(appearance: Appearance, item: SelectedCountriesListItem) {
      return (
         <TouchableOpacity
            activeOpacity={touchableOpacity}
            onPress={() => {this.props.onCountryItemPress(item)}}
         >
            <View style={[getStyles(appearance).item, {backgroundColor: getItemColor(appearance, item.isEnabled)}]}>
               <Text style={getStyles(appearance).itemText}>{item.country.name}</Text>
            </View>
         </TouchableOpacity>
      )
   }

   // Categories picker
   private renderCategoriesPicker(appearance: Appearance) {
      return (
         <View>
            {this.renderCategoriesSectionHeader(appearance)}
            <View style={getStyles(appearance).itemsListContainer}>
               <ScrollView style={getStyles(appearance).itemsScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                  {this.renderCategoriesList(appearance)}
               </ScrollView>
            </View>
         </View>
      )
   }

   private renderCategoriesSectionHeader(appearance: Appearance) {
      return this.renderSectionHeader(appearance, this.state.categoriesHeader, () => {this.props.onEditCategories()})
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

   // Section
   private renderSectionHeader(appearance: Appearance, title: string, onEdit: VoidFunction) {
      return (
         <View style={getStyles(appearance).sectionHeader}>
            <Text style={getStyles(appearance).sectionHeaderText}>
               {title}
            </Text>
            <TouchableOpacity
               activeOpacity={touchableOpacity}
               style={getStyles(appearance).sectionHeaderButton}
               onPress={() => {onEdit()}}
            >
               <Image
                  source={require('../../../../helpers/assets/edit.png')}
                  style={getStyles(appearance).sectionHeaderButtonIcon}
               />
            </TouchableOpacity>
         </View>
      )
   }
}