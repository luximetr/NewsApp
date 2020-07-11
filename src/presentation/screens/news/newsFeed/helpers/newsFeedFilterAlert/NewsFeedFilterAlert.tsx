import React from 'react';
import {BottomAlert} from "../../../../../helpers/components/alerts/bottomAlert/BottomAlert";
import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getStyles} from "./NewsFeedFilterAlert.styles";
import {CategoryItem} from "./CategoryItem";
import {touchableOpacity} from "../../../../../helpers/managers/ScreenInfoProvider";

interface Props {
   isVisible: boolean
   onClose: VoidFunction
   categories: CategoryItem[]
   onEditCountries: VoidFunction
   onEditCategories: VoidFunction
}

interface State {
   countriesHeader: string
   categoriesHeader: string
}

export class NewsFeedFilterAlert extends BaseComponent<Props, State> {

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
                  source={require('../../../../../helpers/assets/edit.png')}
                  style={getStyles(appearance).sectionHeaderButtonIcon}
               />
            </TouchableOpacity>
         </View>
      )
   }
}
